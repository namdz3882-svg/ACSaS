
import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, HelpCircle, AlertTriangle, BookOpen, MapPin, Star, Eye, ThumbsUp, ThumbsDown, BarChart2 } from 'lucide-react';
import { formatQuestionLabel } from '../utils';
import { QuestionStat } from '../App';

interface QuizViewProps {
  questions: Question[];
  onExit: () => void;
  onAttempt: (questionId: string, isCorrect: boolean) => void;
  disputedIds: string[];
  onToggleDispute: (questionId: string) => void;
  favoriteIds: string[];
  onToggleFavorite: (questionId: string) => void;
  stats: Record<string, QuestionStat>;
}

const QuizView: React.FC<QuizViewProps> = ({ 
  questions, 
  onExit, 
  onAttempt, 
  disputedIds,
  onToggleDispute,
  favoriteIds,
  onToggleFavorite,
  stats
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | string[]>>({});
  const [textAnswer, setTextAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isDisputed = currentQuestion ? disputedIds.includes(currentQuestion.id) : false;
  const isFavorite = currentQuestion ? favoriteIds.includes(currentQuestion.id) : false;
  
  // Calculate accuracy
  const stat = currentQuestion && stats[currentQuestion.id];
  const totalAttempts = stat?.t || 0;
  const accuracy = totalAttempts > 0 
    ? Math.round(((totalAttempts - stat!.w) / totalAttempts) * 100) 
    : 0;

  useEffect(() => {
    const element = document.getElementById('quiz-content');
    if (element) element.scrollTo(0, 0);
    setTextAnswer('');
  }, [currentIndex]);

  if (!currentQuestion) {
     return (
         <div className="flex flex-col items-center justify-center h-screen text-slate-800 bg-[#f0f9ff]">
             <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center max-w-sm w-full mx-4 border border-white">
                 <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                 </div>
                 <h2 className="text-2xl font-black mb-2 text-slate-900">练习完成！</h2>
                 <p className="text-slate-500 mb-8 font-medium">您已完成该模块的所有题目。</p>
                 <button 
                    onClick={onExit} 
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl shadow-lg shadow-sky-200 font-bold hover:shadow-xl transition-all active:scale-95"
                 >
                    返回首页
                 </button>
             </div>
         </div>
     )
  }

  const isCorrect = (q: Question, userAns: string | string[]) => {
    if (q.type === QuestionType.Short || q.type === QuestionType.Fill) return true; // Self-graded
    if (!userAns) return false;
    
    if (q.type === QuestionType.Multi) {
      const correct = q.answer as string[];
      const user = userAns as string[];
      if (correct.length !== user.length) return false;
      return correct.sort().join('') === user.sort().join('');
    }
    return q.answer === userAns;
  };

  const handleCorrectAnswer = () => {
    if (!isAutoAdvancing) {
        setIsAutoAdvancing(true);
        setTimeout(() => {
            nextQuestion();
            setIsAutoAdvancing(false);
        }, 1200);
    }
  };

  const handleOptionClick = (optLabel: string) => {
    if (showAnswer[currentQuestion.id] || isAutoAdvancing) return;

    if (currentQuestion.type === QuestionType.Multi) {
      const currentSelected = (selectedAnswers[currentQuestion.id] as string[]) || [];
      let newSelected;
      if (currentSelected.includes(optLabel)) {
        newSelected = currentSelected.filter(l => l !== optLabel);
      } else {
        newSelected = [...currentSelected, optLabel];
      }
      setSelectedAnswers({ ...selectedAnswers, [currentQuestion.id]: newSelected });
    } else {
      const newAns = optLabel;
      setSelectedAnswers({ ...selectedAnswers, [currentQuestion.id]: newAns });
      setShowAnswer({ ...showAnswer, [currentQuestion.id]: true });
      
      const correct = isCorrect(currentQuestion, newAns);
      onAttempt(currentQuestion.id, correct);

      if (correct) {
        handleCorrectAnswer();
      }
    }
  };

  const handleSubmit = () => {
    let userAns: string | string[] = selectedAnswers[currentQuestion.id];
    
    if (!userAns || (Array.isArray(userAns) && userAns.length === 0)) return;
    
    setShowAnswer({ ...showAnswer, [currentQuestion.id]: true });

    const correct = isCorrect(currentQuestion, userAns);
    onAttempt(currentQuestion.id, correct);

    if (correct) {
      handleCorrectAnswer();
    }
  };

  // Special handler for Self-grading (Short Answer & Fill)
  const handleSelfGrade = (isUserCorrect: boolean) => {
      onAttempt(currentQuestion.id, isUserCorrect);
      if (!isUserCorrect) {
          nextQuestion(); 
      } else {
          handleCorrectAnswer();
      }
  };

  const handleShowAnswer = () => {
    if (showAnswer[currentQuestion.id]) return;
    
    // For Short/Fill answers, we just reveal, we don't mark wrong yet
    if (currentQuestion.type === QuestionType.Short || currentQuestion.type === QuestionType.Fill) {
        setShowAnswer({ ...showAnswer, [currentQuestion.id]: true });
        return;
    }

    // For others, showing answer counts as wrong
    onAttempt(currentQuestion.id, false);
    setShowAnswer({ ...showAnswer, [currentQuestion.id]: true });
  };

  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
        onExit();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderOptions = () => {
    const isRevealed = showAnswer[currentQuestion.id];

    if (currentQuestion.type === QuestionType.Short || currentQuestion.type === QuestionType.Fill) {
        return (
            <div className="mt-8 space-y-6">
                <div className="relative">
                  <textarea
                      value={textAnswer}
                      onChange={(e) => setTextAnswer(e.target.value)}
                      disabled={isRevealed}
                      placeholder={currentQuestion.type === QuestionType.Fill ? "在此输入您的答案..." : "在此输入您的思考或关键词（可选）..."}
                      className="w-full p-5 rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 bg-emerald-50/30 focus:bg-white outline-none transition-all min-h-[140px] text-lg resize-none"
                  />
                </div>
                
                {!isRevealed && (
                    <button 
                        onClick={handleShowAnswer}
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 active:scale-95 flex items-center justify-center gap-2"
                    >
                        <Eye className="w-5 h-5" />
                        查看参考答案
                    </button>
                )}

                {isRevealed && (
                    <div className="animate-fade-in space-y-4">
                        <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                            <h4 className="font-bold text-emerald-800 mb-2 text-sm uppercase">参考答案</h4>
                            <div className="text-slate-800 font-medium leading-relaxed">
                                {currentQuestion.answer}
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleSelfGrade(false)}
                                className="flex-1 py-4 bg-rose-100 text-rose-700 rounded-2xl font-bold hover:bg-rose-200 transition-colors flex items-center justify-center gap-2 active:scale-95"
                            >
                                <ThumbsDown className="w-5 h-5" />
                                回答错误 (加入错题)
                            </button>
                            <button
                                onClick={() => handleSelfGrade(true)}
                                className="flex-1 py-4 bg-green-100 text-green-700 rounded-2xl font-bold hover:bg-green-200 transition-colors flex items-center justify-center gap-2 active:scale-95"
                            >
                                <ThumbsUp className="w-5 h-5" />
                                回答正确 (下一题)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    if (currentQuestion.type === QuestionType.Judge) {
      return (
        <div className="grid grid-cols-2 gap-4 mt-8">
          {['Y', 'N'].map((opt) => {
            const isSelected = selectedAnswers[currentQuestion.id] === opt;
            const isCorrectOpt = currentQuestion.answer === opt;
            
            let btnClass = "p-6 rounded-3xl border-2 font-bold text-lg transition-all flex flex-col items-center gap-3 shadow-sm active:scale-95 ";
            if (isRevealed) {
              if (isCorrectOpt) btnClass += "bg-green-100 border-green-500 text-green-700 ";
              else if (isSelected) btnClass += "bg-red-100 border-red-500 text-red-700 ";
              else btnClass += "bg-white border-slate-100 text-slate-400 opacity-60 ";
            } else {
              if (isSelected) btnClass += "bg-sky-600 border-sky-600 text-white shadow-md ring-4 ring-sky-100 ";
              else btnClass += "bg-white border-slate-100 text-slate-600 hover:border-sky-200 hover:bg-sky-50 ";
            }

            return (
              <button
                key={opt}
                onClick={() => handleOptionClick(opt)}
                className={btnClass}
                disabled={isRevealed}
              >
                {opt === 'Y' ? <CheckCircle className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
                <span>{opt === 'Y' ? '正确' : '错误'}</span>
              </button>
            );
          })}
        </div>
      );
    }

    // Single or Multi
    return (
      <div className="space-y-3 mt-6">
        {currentQuestion.options?.map((optText, idx) => {
          const label = String.fromCharCode(65 + idx);
          
          let isSelected = false;
          if (currentQuestion.type === QuestionType.Multi) {
             isSelected = ((selectedAnswers[currentQuestion.id] as string[]) || []).includes(label);
          } else {
             isSelected = selectedAnswers[currentQuestion.id] === label;
          }

          let isCorrectOpt = false;
          if (currentQuestion.type === QuestionType.Multi) {
            isCorrectOpt = (currentQuestion.answer as string[]).includes(label);
          } else {
            isCorrectOpt = currentQuestion.answer === label;
          }

          let containerClass = "w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 group relative overflow-hidden ";
          
          if (isRevealed) {
             if (isCorrectOpt) {
                containerClass += "bg-green-50/80 border-green-500 shadow-sm z-10 ";
             } else if (isSelected && !isCorrectOpt) {
                containerClass += "bg-red-50/80 border-red-500 shadow-sm z-10 ";
             } else {
                containerClass += "bg-white border-slate-100 text-slate-400 ";
             }
          } else {
             if (isSelected) {
                containerClass += "bg-sky-50 border-sky-500 shadow-md z-10 ";
             } else {
                containerClass += "bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 hover:shadow-md ";
             }
          }

          return (
            <button
              key={label}
              onClick={() => handleOptionClick(label)}
              disabled={isRevealed && currentQuestion.type !== QuestionType.Multi}
              className={containerClass + (isRevealed ? " cursor-default" : " cursor-pointer active:scale-[0.98]")}
              style={{pointerEvents: isRevealed ? 'none' : 'auto'}}
            >
              <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-sm font-black shadow-sm transition-all duration-300 ${
                 isRevealed 
                  ? (isCorrectOpt ? 'bg-green-500 text-white scale-110' : (isSelected ? 'bg-red-500 text-white scale-110' : 'bg-slate-100 text-slate-400'))
                  : (isSelected ? 'bg-sky-600 text-white scale-110' : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-600')
              }`}>
                {label}
              </span>
              <span className={`pt-0.5 text-[15px] leading-relaxed font-medium ${isRevealed && !isCorrectOpt && !isSelected ? 'text-slate-400' : 'text-slate-800'}`}>
                {optText}
              </span>
              {isRevealed && isCorrectOpt && <CheckCircle className="ml-auto w-6 h-6 text-green-500 flex-shrink-0 animate-bounce-short" />}
              {isRevealed && isSelected && !isCorrectOpt && <XCircle className="ml-auto w-6 h-6 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
        
        {currentQuestion.type === QuestionType.Multi && !isRevealed && (
           <button 
             onClick={handleSubmit}
             className="w-full mt-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-2xl font-bold hover:shadow-xl transition-all shadow-lg shadow-sky-200 active:scale-95"
           >
             提交答案
           </button>
        )}
      </div>
    );
  };

  const getAccuracyColor = (rate: number) => {
      if (rate >= 85) return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      if (rate >= 60) return 'bg-amber-50 text-amber-600 border-amber-100';
      return 'bg-rose-50 text-rose-600 border-rose-100';
  };

  return (
    <div className="flex flex-col h-full w-full max-w-2xl mx-auto bg-white sm:rounded-[2rem] sm:shadow-2xl overflow-hidden sm:my-6 sm:h-[90vh] border border-slate-100 relative">
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md px-5 py-4 flex items-center justify-between sticky top-0 z-30 border-b border-slate-100">
        <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors active:bg-slate-200">
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <button 
             onClick={() => onToggleFavorite(currentQuestion.id)}
             className={`p-2.5 rounded-full transition-all active:scale-90 ${isFavorite ? 'text-yellow-500 bg-yellow-50 ring-2 ring-yellow-100' : 'text-slate-300 hover:text-yellow-400 hover:bg-slate-50'}`}
          >
             <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={() => onToggleDispute(currentQuestion.id)}
            className={`p-2.5 rounded-full transition-colors ${isDisputed ? 'text-amber-500 bg-amber-50 ring-2 ring-amber-100' : 'text-slate-300 hover:text-amber-500 hover:bg-slate-50'}`}
          >
             <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
          className="bg-sky-500 h-full transition-all duration-500 ease-out rounded-r-full shadow-[0_0_8px_rgba(14,165,233,0.5)]"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Content */}
      <div id="quiz-content" className="flex-1 overflow-y-auto px-6 py-6 pb-32 scroll-smooth bg-white">
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
               <span className="text-xs font-black text-slate-300 font-mono tracking-widest">
                  Q.{currentIndex + 1} <span className="text-slate-200 font-medium">/ {totalQuestions}</span>
               </span>
               <span className={`px-3 py-1 text-[10px] font-black rounded-full border shadow-sm tracking-wide uppercase ${
                    currentQuestion.type === QuestionType.Fill ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                    currentQuestion.type === QuestionType.Multi ? 'bg-orange-50 text-orange-700 border-orange-200' :
                    currentQuestion.type === QuestionType.Judge ? 'bg-purple-50 text-purple-700 border-purple-200' :
                    currentQuestion.type === QuestionType.Short ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    'bg-sky-50 text-sky-700 border-sky-200'
                }`}>
                  {currentQuestion.type}
                </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed tracking-wide select-none">
              {currentQuestion.content}
            </h3>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-lg border border-slate-100">
                <MapPin className="w-3 h-3" />
                {formatQuestionLabel(currentQuestion)}
              </span>
              {totalAttempts > 0 && (
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-lg border ${getAccuracyColor(accuracy)}`}>
                    <BarChart2 className="w-3 h-3" />
                    正确率 {accuracy}%
                  </span>
              )}
              {isDisputed && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-lg border border-amber-100">
                    <AlertTriangle className="w-3 h-3" />
                    争议题目
                  </span>
               )}
            </div>
        </div>

        {renderOptions()}

        {/* Explanation / Result Box for non-self-graded questions */}
        {showAnswer[currentQuestion.id] && currentQuestion.type !== QuestionType.Short && currentQuestion.type !== QuestionType.Fill && (
          <div className="mt-8 animate-fade-in pb-4">
             <div className={`rounded-3xl p-6 border-2 space-y-4 ${isCorrect(currentQuestion, selectedAnswers[currentQuestion.id]) ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
                
                <div className="flex items-center justify-between pb-4 border-b border-black/5">
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Correct Answer</div>
                      <div className="font-black text-slate-900 text-2xl tracking-tight">
                          {Array.isArray(currentQuestion.answer) 
                          ? currentQuestion.answer.join('') 
                          : (currentQuestion.answer === 'Y' ? '正确' : currentQuestion.answer === 'N' ? '错误' : currentQuestion.answer)
                          }
                      </div>
                    </div>
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full shadow-sm ${isCorrect(currentQuestion, selectedAnswers[currentQuestion.id]) ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {isCorrect(currentQuestion, selectedAnswers[currentQuestion.id]) ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                    </div>
                </div>

                <div className="pt-1">
                    <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold text-sm">
                        <BookOpen className="w-4 h-4 text-sky-500" />
                        <span>知识点解析</span>
                    </div>
                    <div className="text-slate-600 text-sm leading-7 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        {currentQuestion.explanation || "暂无详细解析，请参考正确答案记忆。"}
                    </div>
                </div>
             </div>
          </div>
        )}
        
        {/* Specific explanation block for Short Answer & Fill (shown inside renderOptions for better flow, but can be here too) */}
        {showAnswer[currentQuestion.id] && (currentQuestion.type === QuestionType.Short || currentQuestion.type === QuestionType.Fill) && (
             <div className="mt-6 pt-1 animate-fade-in pb-4">
                <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold text-sm">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                    <span>知识点解析</span>
                </div>
                <div className="text-slate-600 text-sm leading-7 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    {currentQuestion.explanation || "请参考上方参考答案进行记忆。"}
                </div>
            </div>
        )}
      </div>

      {/* Footer Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-100 p-4 px-6 flex items-center justify-between z-20">
         <button 
           onClick={prevQuestion}
           disabled={currentIndex === 0}
           className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-colors ${
             currentIndex === 0 ? 'text-slate-200 bg-slate-50 cursor-not-allowed' : 'text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-95'
           }`}
         >
           <ArrowLeft className="w-5 h-5" />
         </button>
        
        <div className="flex items-center gap-3 ml-auto">
            {/* Show Answer Button - Hidden for Short/Fill as it's inline, and hidden if already revealed */}
            {!showAnswer[currentQuestion.id] && currentQuestion.type !== QuestionType.Short && currentQuestion.type !== QuestionType.Fill && (
                <button
                    onClick={handleShowAnswer}
                    className="flex items-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-100 transition-colors active:scale-95"
                >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">看答案</span>
                </button>
            )}

            {/* Next button - For Short/Fill, we hide the main Next button if answer is revealed because we have the Thumbs Up/Down */}
            {!((currentQuestion.type === QuestionType.Short || currentQuestion.type === QuestionType.Fill) && showAnswer[currentQuestion.id]) && (
                <button 
                onClick={nextQuestion}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-sky-200 transition-all bg-sky-600 text-white hover:bg-sky-700 active:scale-95 hover:shadow-xl"
                >
                {currentIndex === totalQuestions - 1 ? '完成练习' : '下一题'}
                <ArrowRight className="w-5 h-5" />
                </button>
            )}
         </div>
      </div>
    </div>
  );
};

export default QuizView;
