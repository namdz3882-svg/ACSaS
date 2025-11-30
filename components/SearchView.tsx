
import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { ArrowLeft, Search, Star, ChevronRight, BookOpen } from 'lucide-react';
import { formatQuestionLabel } from '../utils';

interface SearchViewProps {
  questions: Question[];
  onExit: () => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onReview: (id: string) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ questions, onExit, favoriteIds, onToggleFavorite, onReview }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<QuestionType | 'ALL'>('ALL');

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.content.toLowerCase().includes(searchTerm.toLowerCase()) || q.id.includes(searchTerm);
    const matchesType = filterType === 'ALL' || q.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex flex-col h-full w-full max-w-3xl mx-auto bg-white sm:rounded-2xl sm:shadow-xl overflow-hidden sm:my-8 sm:h-[90vh] border border-slate-200">
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-100 p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
            <input
              type="text"
              placeholder="搜索题目、编号或内容..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-transparent focus:bg-white focus:border-sky-500 focus:ring-4 focus:ring-sky-50 rounded-2xl outline-none transition-all font-medium"
            />
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pl-1">
          <button
            onClick={() => setFilterType('ALL')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filterType === 'ALL' ? 'bg-slate-800 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
            }`}
          >
            全部 ({questions.length})
          </button>
          {Object.values(QuestionType).map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                filterType === type ? 'bg-sky-600 text-white shadow-md shadow-sky-100' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-3 scroll-smooth">
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <Search className="w-12 h-12 mb-2 opacity-20" />
            <p className="text-sm font-medium">未找到相关题目</p>
          </div>
        ) : (
          filteredQuestions.slice(0, 100).map((q) => {
             const isFav = favoriteIds.includes(q.id);
             return (
              <div 
                key={q.id}
                onClick={() => onReview(q.id)}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all cursor-pointer group active:scale-[0.98]"
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{formatQuestionLabel(q)}</span>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded uppercase ${
                        q.type === QuestionType.Judge ? 'bg-purple-50 text-purple-700' :
                        q.type === QuestionType.Multi ? 'bg-orange-50 text-orange-700' :
                        q.type === QuestionType.Fill ? 'bg-yellow-50 text-yellow-700' :
                        'bg-sky-50 text-sky-700'
                    }`}>
                      {q.type}
                    </span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleFavorite(q.id); }}
                    className={`p-1.5 rounded-full transition-colors ${
                        isFav ? 'text-yellow-400 bg-yellow-50' : 'text-slate-200 hover:text-yellow-400 hover:bg-slate-50'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <h3 className="text-slate-800 font-bold text-sm line-clamp-2 mb-3 group-hover:text-sky-700 transition-colors">
                  {q.content}
                </h3>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                   <div className="text-xs text-slate-400 font-medium truncate max-w-[80%]">
                      Answer: <span className="font-bold text-slate-600">{Array.isArray(q.answer) ? q.answer.join('') : q.answer}</span>
                   </div>
                   <div className="text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            );
          })
        )}
        {filteredQuestions.length > 100 && (
          <div className="text-center py-4 text-xs text-slate-400 font-medium">
            仅显示前 100 条结果，请尝试更精确的搜索词
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
