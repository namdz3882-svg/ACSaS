
import React from 'react';
import { Question, QuestionType } from '../types';
import { ArrowLeft, Star, Play, Trash2, ChevronRight } from 'lucide-react';
import { formatQuestionLabel } from '../utils';

interface FavoritesViewProps {
  questions: Question[];
  favoriteIds: string[];
  onExit: () => void;
  onToggleFavorite: (id: string) => void;
  onReview: (id: string) => void;
  onStartAll: () => void;
}

const FavoritesView: React.FC<FavoritesViewProps> = ({ 
  questions, 
  favoriteIds, 
  onExit, 
  onToggleFavorite, 
  onReview,
  onStartAll
}) => {
  const favoriteQuestions = questions.filter(q => favoriteIds.includes(q.id));

  return (
    <div className="flex flex-col h-full w-full max-w-3xl mx-auto bg-white sm:rounded-2xl sm:shadow-xl overflow-hidden sm:my-8 sm:h-[90vh] border border-slate-200">
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 p-5 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
                    我的收藏
                </h2>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {favoriteQuestions.length} items
                </div>
              </div>
            </div>
            {favoriteQuestions.length > 0 && (
                <button 
                    onClick={onStartAll}
                    className="bg-sky-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all flex items-center gap-2 active:scale-95"
                >
                    <Play className="w-4 h-4 fill-current" />
                    练习全部
                </button>
            )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-5 space-y-4 scroll-smooth">
        {favoriteQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <div className="p-6 bg-yellow-50 rounded-[2rem] mb-6 shadow-inner ring-4 ring-white">
                <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-xl font-bold text-slate-800 mb-2">暂无收藏内容</p>
            <p className="text-sm text-slate-400 max-w-xs text-center leading-relaxed">
                遇到重点难点题目，点击星星图标即可添加到此处重点复习。
            </p>
          </div>
        ) : (
          favoriteQuestions.map((q) => (
            <div 
                key={q.id} 
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                
                <div className="flex items-start justify-between gap-2 mb-4 relative z-10">
                    <div className="flex gap-2 items-center">
                        <span className="text-xs text-slate-400 font-bold tracking-wider">{formatQuestionLabel(q)}</span>
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wide ${
                            q.type === QuestionType.Judge ? 'bg-purple-100 text-purple-700' :
                            q.type === QuestionType.Multi ? 'bg-orange-100 text-orange-700' :
                            q.type === QuestionType.Fill ? 'bg-yellow-100 text-yellow-700' :
                            'bg-sky-100 text-sky-700'
                        }`}>
                            {q.type}
                        </span>
                    </div>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onToggleFavorite(q.id); }}
                        className="p-2 text-yellow-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-20"
                        title="取消收藏"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="text-slate-900 font-bold text-lg mb-6 leading-relaxed relative z-10">
                    {q.content}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50 relative z-10">
                    <div className="text-sm text-slate-500 truncate max-w-[65%] flex flex-col">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Answer</span>
                        <span className="font-bold text-slate-800 bg-slate-50 px-2 py-1 rounded inline-block self-start">
                            {Array.isArray(q.answer) ? q.answer.join('') : (q.answer === 'Y' ? '正确' : q.answer === 'N' ? '错误' : q.answer)}
                        </span>
                    </div>
                    <button 
                        onClick={() => onReview(q.id)}
                        className="text-sm font-bold text-white bg-slate-900 hover:bg-sky-600 px-4 py-2 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-1 group-hover:pr-3"
                    >
                        去练习
                        <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesView;
