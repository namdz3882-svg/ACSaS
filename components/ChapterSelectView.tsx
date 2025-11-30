import React from 'react';
import { ArrowLeft, CheckCircle, ListOrdered } from 'lucide-react';
import { CHAPTER_NAMES, getQuestionChapter } from '../utils';
import { Question } from '../types';

interface ChapterSelectViewProps {
  questions: Question[];
  answeredIds: string[];
  onSelectChapter: (chapterId: string) => void;
  onExit: () => void;
}

const ChapterSelectView: React.FC<ChapterSelectViewProps> = ({
  questions,
  answeredIds,
  onSelectChapter,
  onExit
}) => {
  // Group stats
  const chapterStats = React.useMemo(() => {
    const stats: Record<string, { total: number; answered: number }> = {};
    
    // Initialize known chapters
    Object.keys(CHAPTER_NAMES).forEach(key => {
      stats[key] = { total: 0, answered: 0 };
    });

    questions.forEach(q => {
      const chapId = getQuestionChapter(q.id);
      if (!stats[chapId]) stats[chapId] = { total: 0, answered: 0 };
      
      stats[chapId].total++;
      if (answeredIds.includes(q.id)) {
        stats[chapId].answered++;
      }
    });

    return stats;
  }, [questions, answeredIds]);

  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto bg-white sm:rounded-2xl sm:shadow-xl overflow-hidden sm:my-8 sm:h-[85vh] border border-slate-200">
      <div className="bg-white border-b border-slate-100 p-4 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 text-slate-700">
            <div className="bg-slate-100 p-1.5 rounded-lg">
               <ListOrdered className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-lg text-slate-800">章节练习</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
        {Object.entries(CHAPTER_NAMES).map(([id, name]) => {
          const stat = chapterStats[id] || { total: 0, answered: 0 };
          if (stat.total === 0) return null; // Skip empty chapters

          const progress = Math.round((stat.answered / stat.total) * 100);
          const isComplete = stat.answered > 0 && stat.answered === stat.total;

          return (
            <button
              key={id}
              onClick={() => onSelectChapter(id)}
              className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all text-left group relative overflow-hidden active:scale-[0.98]"
            >
              {isComplete && (
                <div className="absolute top-2 right-2 text-green-500 opacity-20 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-6 h-6" />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-1 rounded">
                    {`第${id}章`}
                  </span>
                  <h3 className="font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{name.split(' ').slice(1).join(' ')}</h3>
                </div>
              </div>

              <div className="space-y-1 relative z-10">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>进度</span>
                  <span>{stat.answered} / {stat.total}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isComplete ? 'bg-green-500' : 'bg-sky-500'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterSelectView;