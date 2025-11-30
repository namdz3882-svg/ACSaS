
import React, { useState, useEffect } from 'react';
import { AppView, Question, QuestionType } from './types';
import { QUESTIONS } from './data';
import { getQuestionChapter, sortQuestions } from './utils';
import HomeView from './components/HomeView';
import QuizView from './components/QuizView';
import SearchView from './components/SearchView';
import MistakesView from './components/MistakesView';
import ChapterSelectView from './components/ChapterSelectView';
import FavoritesView from './components/FavoritesView';
import TypeSelectView from './components/TypeSelectView';

// Fisher-Yates Shuffle
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export interface QuestionStat {
  t: number; // Total attempts
  w: number; // Wrong attempts
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('HOME');
  // returnView tracks where to go back to after exiting the QuizView
  const [returnView, setReturnView] = useState<AppView>('HOME');
  
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  // Replaces mistakeCounts with detailed stats
  const [stats, setStats] = useState<Record<string, QuestionStat>>({});
  
  const [resolvedMistakeIds, setResolvedMistakeIds] = useState<string[]>([]); // Temporary mistakes book
  const [answeredIds, setAnsweredIds] = useState<string[]>([]); // Track progress
  const [disputedIds, setDisputedIds] = useState<string[]>([]); // Track disputed questions
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]); // Track favorites
  const [quizQueue, setQuizQueue] = useState<Question[]>([]); // Current quiz session
  const [isQuizSession, setIsQuizSession] = useState(false); // True for main quiz, false for review

  // Load data from local storage on mount
  useEffect(() => {
    try {
      const savedMistakes = localStorage.getItem('aero_mistakes');
      if (savedMistakes) setMistakeIds(JSON.parse(savedMistakes));

      // Migration: If old mistake counts exist but new stats don't, try to migrate roughly
      const savedStats = localStorage.getItem('aero_stats');
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      } else {
        const oldCounts = localStorage.getItem('aero_mistake_counts');
        if (oldCounts) {
           const parsedOld = JSON.parse(oldCounts);
           const migratedStats: Record<string, QuestionStat> = {};
           Object.entries(parsedOld).forEach(([id, count]) => {
             // Assume worst case for migration: all attempts were wrong
             migratedStats[id] = { t: Number(count), w: Number(count) };
           });
           setStats(migratedStats);
        }
      }

      const savedAnswered = localStorage.getItem('aero_answered');
      if (savedAnswered) setAnsweredIds(JSON.parse(savedAnswered));
      
      const savedDisputes = localStorage.getItem('aero_disputes');
      if (savedDisputes) setDisputedIds(JSON.parse(savedDisputes));

      const savedFavorites = localStorage.getItem('aero_favorites');
      if (savedFavorites) setFavoriteIds(JSON.parse(savedFavorites));
      
    } catch (e) {
      console.error("Failed to load data", e);
    }
  }, []);

  // Persistence
  useEffect(() => {
    localStorage.setItem('aero_mistakes', JSON.stringify(mistakeIds));
  }, [mistakeIds]);

  useEffect(() => {
    localStorage.setItem('aero_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('aero_answered', JSON.stringify(answeredIds));
  }, [answeredIds]);

  useEffect(() => {
    localStorage.setItem('aero_disputes', JSON.stringify(disputedIds));
  }, [disputedIds]);

  useEffect(() => {
    localStorage.setItem('aero_favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // Unified handler for attempts
  const handleAttempt = (questionId: string, isCorrect: boolean) => {
    // 1. Update Stats
    setStats(prev => {
      const current = prev[questionId] || { t: 0, w: 0 };
      return {
        ...prev,
        [questionId]: {
          t: current.t + 1,
          w: isCorrect ? current.w : current.w + 1
        }
      };
    });

    // 2. Handle Progress (Unique answered IDs)
    if (!answeredIds.includes(questionId)) {
      setAnsweredIds(prev => [...prev, questionId]);
    }

    // 3. Handle Mistakes Book logic
    if (!isCorrect) {
       setMistakeIds(prev => {
        if (!prev.includes(questionId)) {
          return [...prev, questionId];
        }
        return prev;
      });
    }
  };

  const deleteMistake = (questionId: string) => {
    setMistakeIds(prev => prev.filter(id => id !== questionId));
    // Note: We don't delete stats when deleting from mistake book, 
    // so historical accuracy remains accurate.
  };

  const markAsResolved = (questionId: string) => {
    // Move from mistakeIds to resolvedMistakeIds
    setMistakeIds(prev => prev.filter(id => id !== questionId));
    setResolvedMistakeIds(prev => [...prev, questionId]);
  };

  const startQuiz = (mode: 'ALL' | 'NEW') => {
    let pool = [...QUESTIONS];
    if (mode === 'NEW') {
      pool = pool.filter(q => !answeredIds.includes(q.id));
      // If no new questions, fallback to all (or alert)
      if (pool.length === 0) {
        alert("恭喜！您已刷完所有新题。将为您开启随机复习模式。");
        pool = [...QUESTIONS];
      }
    }
    
    setQuizQueue(shuffleArray(pool));
    setIsQuizSession(true);
    setReturnView('HOME');
    setCurrentView('QUIZ');
  };

  const startChapterQuiz = (chapterId: string) => {
    const pool = QUESTIONS.filter(q => getQuestionChapter(q.id) === chapterId);
    // Sort roughly by index
    const sorted = sortQuestions(pool);
    setQuizQueue(sorted);
    setIsQuizSession(true);
    setReturnView('CHAPTER_SELECT');
    setCurrentView('QUIZ');
  };

  const startTypeQuiz = (type: QuestionType) => {
      const pool = QUESTIONS.filter(q => q.type === type);
      setQuizQueue(shuffleArray(pool));
      setIsQuizSession(true);
      setReturnView('TYPE_SELECT');
      setCurrentView('QUIZ');
  };

  const startHighFreqMistakeQuiz = () => {
    const pool = QUESTIONS.filter(q => mistakeIds.includes(q.id));
    
    if (pool.length === 0) {
        alert("暂无错题记录，请先进行练习。");
        return;
    }

    // Sort by Wrong count descending (High Frequency Mistakes)
    // We could also sort by Accuracy Ascending, but "Frequency" implies count.
    pool.sort((a, b) => {
        const statA = stats[a.id] || { t: 0, w: 0 };
        const statB = stats[b.id] || { t: 0, w: 0 };
        return statB.w - statA.w;
    });

    setQuizQueue(pool);
    setIsQuizSession(true);
    setReturnView('HOME');
    setCurrentView('QUIZ');
  };

  const startReviewSingle = (questionId: string, fromView: AppView) => {
      const q = QUESTIONS.find(x => x.id === questionId);
      if (q) {
          setQuizQueue([q]);
          setIsQuizSession(false);
          setReturnView(fromView);
          setCurrentView('QUIZ');
      }
  };

  const startAllFavorites = () => {
      const pool = QUESTIONS.filter(q => favoriteIds.includes(q.id));
      if (pool.length === 0) return;
      setQuizQueue(shuffleArray(pool));
      setIsQuizSession(true);
      setReturnView('FAVORITES');
      setCurrentView('QUIZ');
  };

  const resetProgress = () => {
    if (confirm('确定要重置所有学习进度吗？错题本和收藏将保留。')) {
      setAnsweredIds([]);
      localStorage.removeItem('aero_answered');
      // We don't clear stats to preserve accuracy history, or we could.
      // Let's keep stats for long-term data.
    }
  };

  const toggleDispute = (id: string) => {
      setDisputedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleFavorite = (id: string) => {
      setFavoriteIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const clearMistakes = () => {
      if (confirm('确定要清空错题本吗？')) {
          setMistakeIds([]);
          setResolvedMistakeIds([]);
      }
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return (
          <HomeView 
            onStartQuiz={startQuiz}
            onStartChapterSelect={() => setCurrentView('CHAPTER_SELECT')}
            onStartTypeSelect={() => setCurrentView('TYPE_SELECT')}
            onStartSearch={() => setCurrentView('SEARCH')}
            onOpenMistakes={() => setCurrentView('MISTAKES')}
            onStartHighFreqMistakes={startHighFreqMistakeQuiz}
            onOpenFavorites={() => setCurrentView('FAVORITES')}
            onResetProgress={resetProgress}
            mistakeCount={mistakeIds.length}
            favoritesCount={favoriteIds.length}
            totalQuestions={QUESTIONS.length}
            answeredCount={answeredIds.length}
          />
        );
      case 'QUIZ':
        return (
          <QuizView 
            questions={quizQueue}
            onExit={() => setCurrentView(returnView)}
            onAttempt={handleAttempt}
            disputedIds={disputedIds}
            onToggleDispute={toggleDispute}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            stats={stats}
          />
        );
      case 'CHAPTER_SELECT':
        return (
          <ChapterSelectView 
            questions={QUESTIONS}
            answeredIds={answeredIds}
            onSelectChapter={startChapterQuiz}
            onExit={() => setCurrentView('HOME')}
          />
        );
      case 'TYPE_SELECT':
        return (
            <TypeSelectView 
                questions={QUESTIONS}
                answeredIds={answeredIds}
                onSelectType={startTypeQuiz}
                onExit={() => setCurrentView('HOME')}
            />
        );
      case 'MISTAKES':
        return (
          <MistakesView 
            questions={QUESTIONS}
            mistakeIds={mistakeIds}
            stats={stats}
            resolvedMistakeIds={resolvedMistakeIds}
            onExit={() => setCurrentView('HOME')}
            onMistakeResolved={markAsResolved}
            onDelete={deleteMistake}
            onClearAll={clearMistakes}
            onReview={(id) => startReviewSingle(id, 'MISTAKES')}
            onAttempt={handleAttempt}
          />
        );
      case 'FAVORITES':
          return (
              <FavoritesView 
                  questions={QUESTIONS}
                  favoriteIds={favoriteIds}
                  onExit={() => setCurrentView('HOME')}
                  onToggleFavorite={toggleFavorite}
                  onReview={(id) => startReviewSingle(id, 'FAVORITES')}
                  onStartAll={startAllFavorites}
              />
          );
      case 'SEARCH':
        return (
          <SearchView 
            questions={QUESTIONS}
            onExit={() => setCurrentView('HOME')}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            onReview={(id) => startReviewSingle(id, 'SEARCH')}
          />
        );
      default:
        return <div>Unknown View</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {renderView()}
    </div>
  );
}
