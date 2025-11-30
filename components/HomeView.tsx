
import React from 'react';
import { Search, Plane, AlertCircle, RotateCcw, Sparkles, Trash2, ListOrdered, Bookmark, Layers, Wrench, Flame } from 'lucide-react';

interface HomeViewProps {
  onStartQuiz: (mode: 'ALL' | 'NEW') => void;
  onStartChapterSelect: () => void;
  onStartTypeSelect: () => void;
  onStartSearch: () => void;
  onOpenMistakes: () => void;
  onStartHighFreqMistakes: () => void;
  onOpenFavorites: () => void;
  onResetProgress: () => void;
  mistakeCount: number;
  favoritesCount: number;
  totalQuestions: number;
  answeredCount: number;
}

const HomeView: React.FC<HomeViewProps> = ({ 
  onStartQuiz, 
  onStartChapterSelect,
  onStartTypeSelect,
  onStartSearch, 
  onOpenMistakes,
  onStartHighFreqMistakes,
  onOpenFavorites,
  onResetProgress,
  mistakeCount,
  favoritesCount,
  totalQuestions,
  answeredCount
}) => {
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100) || 0;

  return (
    <div className="flex flex-col items-center min-h-[90vh] px-5 py-8 max-w-md mx-auto w-full font-sans">
      
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8 w-full">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-sky-500 to-blue-700 p-4 rounded-3xl shadow-xl shadow-blue-200 ring-4 ring-white">
            <Plane className="w-10 h-10 text-white fill-current transform -rotate-45" />
          </div>
          <div className="absolute -bottom-3 bg-gradient-to-r from-slate-700 to-slate-800 text-sky-100 text-[10px] font-black px-3 py-1 rounded-full shadow-md tracking-wider border border-white whitespace-nowrap">
            ME/AVIONICS
          </div>
        </div>
        <div className="pt-2">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">飞机结构与系统题库</h1>
          <p className="text-xs font-medium text-slate-500 mt-2 opacity-90 max-w-[260px] mx-auto leading-relaxed">
            航空维修人员专业知识与技能考核。<br/>
            涵盖机体、起落架、液压、燃油及环控系统。
          </p>
        </div>
      </div>

      {/* Progress Card */}
      <div className="w-full bg-gradient-to-br from-white to-sky-50 p-6 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.15)] border border-sky-100 relative overflow-hidden mb-8 group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-100 to-transparent rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-60"></div>
        
        <div className="flex justify-between items-end mb-4 relative z-10">
          <div className="flex flex-col">
             <span className="text-xs font-bold text-sky-500 tracking-wider uppercase mb-1">学习进度</span>
             <span className="text-3xl font-black text-slate-800 flex items-baseline">
                {progressPercentage}
                <span className="text-sm text-slate-400 ml-1 font-bold">%</span>
             </span>
          </div>
          <div className="flex flex-col items-end">
             <div className="flex items-center gap-1 mb-1">
                <span className="text-sm font-bold text-slate-600">{answeredCount}</span>
                <span className="text-xs text-slate-400">/ {totalQuestions}</span>
             </div>
             <button 
               onClick={onResetProgress}
               className="text-[10px] text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1"
             >
               <Trash2 className="w-3 h-3" /> 重置
             </button>
          </div>
        </div>
        
        <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden shadow-inner relative z-10 ring-1 ring-slate-200/50">
          <div 
            className="bg-gradient-to-r from-sky-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_10px_rgba(14,165,233,0.4)]" 
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Main Actions Grid */}
      <div className="w-full space-y-6">
        
        {/* Primary Tasks */}
        <div>
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-1 flex items-center gap-2">
             <span className="w-1 h-4 bg-sky-500 rounded-full"></span>
             开始刷题
           </h3>
           
           <div className="grid grid-cols-2 gap-4">
            {/* 1. New Questions */}
            <button
              onClick={() => onStartQuiz('NEW')}
              className="relative overflow-hidden bg-gradient-to-br from-sky-500 to-blue-600 text-white p-5 rounded-3xl shadow-lg shadow-sky-200 transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col justify-between h-32 border-t border-sky-400 group"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:rotate-12">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
              <div className="bg-white/20 w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                 <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              </div>
              <div>
                <span className="block text-lg font-bold">攻克新题</span>
                <span className="text-[11px] text-sky-100 opacity-90 font-medium">推送未学内容</span>
              </div>
            </button>

            {/* 2. Chapter Practice */}
            <button
              onClick={onStartChapterSelect}
              className="relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 text-white p-5 rounded-3xl shadow-lg shadow-slate-300 transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col justify-between h-32 border-t border-slate-500 group"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:rotate-12">
                <ListOrdered className="w-16 h-16 text-white" />
              </div>
              <div className="bg-white/20 w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                 <ListOrdered className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold">章节练习</span>
                <span className="text-[11px] text-slate-300 opacity-90 font-medium">按系统分类复习</span>
              </div>
            </button>

            {/* 3. Type Practice */}
            <button
              onClick={onStartTypeSelect}
              className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-5 rounded-3xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col justify-between h-32 border-t border-indigo-400 group"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:rotate-12">
                <Layers className="w-16 h-16 text-white" />
              </div>
              <div className="bg-white/20 w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                 <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold">专项练习</span>
                <span className="text-[11px] text-indigo-100 opacity-90 font-medium">按题型分类突破</span>
              </div>
            </button>

            {/* 4. Random Review */}
            <button
              onClick={() => onStartQuiz('ALL')}
              className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-900 p-5 rounded-3xl shadow-sm border border-teal-100 transition-all transform hover:scale-[1.02] active:scale-95 flex flex-col justify-between h-32 hover:border-teal-200 hover:shadow-md group"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12">
                <RotateCcw className="w-16 h-16 text-teal-900" />
              </div>
              <div className="bg-white p-2.5 w-10 h-10 rounded-2xl shadow-sm text-teal-600 flex items-center justify-center ring-1 ring-teal-50">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg font-bold">随机复习</span>
                <span className="text-[11px] text-teal-600/70 font-medium">巩固记忆查漏</span>
              </div>
            </button>

          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-1 flex items-center gap-2">
             <span className="w-1 h-4 bg-orange-500 rounded-full"></span>
             常用工具
           </h3>
           
          <div className="grid grid-cols-2 gap-3">
            {/* 1. Mistakes Book */}
            <button
              onClick={onOpenMistakes}
              className="bg-rose-50 hover:bg-rose-100 text-rose-900 p-4 rounded-3xl shadow-sm border border-rose-100 transition-all active:scale-95 flex items-center gap-3 relative group"
            >
              <div className="p-2.5 bg-white rounded-2xl text-rose-500 group-hover:scale-110 transition-transform shadow-sm ring-1 ring-rose-100">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold flex-1 text-left">错题本</span>
              {mistakeCount > 0 && (
                <span className="bg-rose-500 text-white text-[10px] h-5 min-w-[1.25rem] px-1.5 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {mistakeCount}
                </span>
              )}
            </button>

            {/* 2. High Frequency Mistakes */}
            <button
              onClick={onStartHighFreqMistakes}
              className="bg-orange-50 hover:bg-orange-100 text-orange-900 p-4 rounded-3xl shadow-sm border border-orange-100 transition-all active:scale-95 flex items-center gap-3 group"
            >
              <div className="p-2.5 bg-white rounded-2xl text-orange-500 group-hover:scale-110 transition-transform shadow-sm ring-1 ring-orange-100">
                <Flame className="w-5 h-5 fill-orange-500" />
              </div>
              <span className="text-sm font-bold text-left">高频错题</span>
            </button>

            {/* 3. Favorites */}
            <button
              onClick={onOpenFavorites}
              className="bg-amber-50 hover:bg-amber-100 text-amber-900 p-4 rounded-3xl shadow-sm border border-amber-100 transition-all active:scale-95 flex items-center gap-3 relative group"
            >
              <div className="p-2.5 bg-white rounded-2xl text-amber-500 group-hover:scale-110 transition-transform shadow-sm ring-1 ring-amber-100">
                <Bookmark className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-bold flex-1 text-left">我的收藏</span>
              {favoritesCount > 0 && (
                <span className="bg-amber-500 text-white text-[10px] h-5 min-w-[1.25rem] px-1.5 flex items-center justify-center rounded-full font-bold shadow-sm">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* 4. Search */}
            <button
              onClick={onStartSearch}
              className="bg-slate-50 hover:bg-slate-100 text-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 transition-all active:scale-95 flex items-center gap-3 group"
            >
              <div className="p-2.5 bg-white rounded-2xl text-slate-500 group-hover:scale-110 transition-transform shadow-sm ring-1 ring-slate-100">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-left">搜索题目</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10 pb-4 text-center opacity-40">
        <div className="flex items-center justify-center gap-2 mb-1">
            <Wrench className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Aviation Knowledge Base</span>
        </div>
        <p className="text-[10px] text-slate-400 font-medium scale-90">Created by Xue</p>
      </div>
    </div>
  );
};

export default HomeView;
