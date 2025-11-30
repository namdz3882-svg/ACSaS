
import React from 'react';
import { ArrowLeft, CheckCircle, Layers, CheckSquare, Type, AlignLeft, ToggleLeft, FileText } from 'lucide-react';
import { Question, QuestionType } from '../types';

interface TypeSelectViewProps {
  questions: Question[];
  answeredIds: string[];
  onSelectType: (type: QuestionType) => void;
  onExit: () => void;
}

const TypeSelectView: React.FC<TypeSelectViewProps> = ({
  questions,
  answeredIds,
  onSelectType,
  onExit
}) => {
  // Calculate stats for each type
  const typeStats = React.useMemo(() => {
    const stats: Record<string, { total: number; answered: number }> = {};
    
    // Initialize
    Object.values(QuestionType).forEach(type => {
      stats[type] = { total: 0, answered: 0 };
    });

    questions.forEach(q => {
      if (!stats[q.type]) stats[q.type] = { total: 0, answered: 0 };
      
      stats[q.type].total++;
      if (answeredIds.includes(q.id)) {
        stats[q.type].answered++;
      }
    });

    return stats;
  }, [questions, answeredIds]);

  const getTypeIcon = (type: QuestionType) => {
    switch (type) {
        case QuestionType.Single: return <CheckCircle className="w-5 h-5" />;
        case QuestionType.Multi: return <CheckSquare className="w-5 h-5" />;
        case QuestionType.Judge: return <ToggleLeft className="w-5 h-5" />;
        case QuestionType.Fill: return <Type className="w-5 h-5" />;
        case QuestionType.Short: return <FileText className="w-5 h-5" />;
        default: return <AlignLeft className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: QuestionType) => {
    switch (type) {
        case QuestionType.Single: return 'text-sky-600 bg-sky-100';
        case QuestionType.Multi: return 'text-orange-600 bg-orange-100';
        case QuestionType.Judge: return 'text-purple-600 bg-purple-100';
        case QuestionType.Fill: return 'text-yellow-600 bg-yellow-100';
        case QuestionType.Short: return 'text-emerald-600 bg-emerald-100';
        default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getGradient = (type: QuestionType) => {
      switch (type) {
        case QuestionType.Single: return 'from-sky-500 to-sky-600';
        case QuestionType.Multi: return 'from-orange-500 to-orange-600';
        case QuestionType.Judge: return 'from-purple-500 to-purple-600';
        case QuestionType.Fill: return 'from-yellow-500 to-yellow-600';
        case QuestionType.Short: return 'from-emerald-500 to-emerald-600';
        default: return 'from-slate-500 to-slate-600';
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto bg-white sm:rounded-2xl sm:shadow-xl overflow-hidden sm:my-8 sm:h-[85vh] border border-indigo-100">
      <div className="bg-white border-b border-slate-100 p-4 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 text-indigo-600">
            <div className="bg-indigo-50 p-1.5 rounded-lg">
               <Layers className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-lg text-slate-800">专项练习</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider pl-1 mb-2">选择题型进行突破</div>
        
        {Object.values(QuestionType).map((type) => {
          const stat = typeStats[type] || { total: 0, answered: 0 };
          const progress = stat.total > 0 ? Math.round((stat.answered / stat.total) * 100) : 0;
          
          if (stat.total === 0) return null;

          return (
            <button
              key={type}
              onClick={() => onSelectType(type)}
              className="w-full bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all text-left group relative overflow-hidden active:scale-[0.98]"
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${getTypeColor(type)}`}>
                    {getTypeIcon(type)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{type}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">针对性强化训练</p>
                  </div>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">{stat.answered}</span>
                    <span className="text-xs text-slate-400 font-bold block">/ {stat.total}</span>
                </div>
              </div>

              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${getGradient(type)}`}
                    style={{ width: `${progress}%` }}
                  />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeSelectView;
