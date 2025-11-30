
import React, { useState } from 'react';
import { Question, QuestionType } from '../types';
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, CheckSquare, BookOpen, Trash2, RefreshCcw, ChevronDown, ChevronUp, Eye, ThumbsUp, BarChart2 } from 'lucide-react';
import { formatQuestionLabel } from '../utils';
import { QuestionStat } from '../App';

interface MistakesViewProps {
  questions: Question[];
  mistakeIds: string[];
  stats: Record<string, QuestionStat>;
  resolvedMistakeIds: string[];
  onExit: () => void;
  onMistakeResolved: (id: string) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
  onReview: (id: string) => void;
  onAttempt: (id: string, isCorrect: boolean) => void;
}

const MistakeCard: React.FC<{ 
  question: Question; 
  stats: Record<string, QuestionStat>;
  onResolved: () => void;
  onDelete: () => void;
  onAttempt: (isCorrect: boolean) => void;
}> = ({ question, stats, onResolved, onDelete, onAttempt }) => {
  const [selected, setSelected] = useState<string | string[] | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);

  const stat = stats[question.id] || { t: 0, w: 0 };
  const accuracy = stat.t > 0 ? Math.round(((stat.t - stat.w) / stat.t) * 100) : 0;

  const getAccuracyColor = (rate: number) => {
      if (rate >= 85) return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      if (rate >= 60) return 'text-amber-600 bg-amber-50 border-amber-100';
      return 'text-rose-600 bg-rose-50 border-rose-100';
  };

  const handleAnswer = (val: string) => {
    if (isRevealed) return;
    
    if (question.type === QuestionType.Multi) {
      const current = (selected as string[]) || [];
      if (current.includes(val)) setSelected(current.filter(v => v !== val));
      else setSelected([...current, val]);
    } else {
      setSelected(val);
      setIsRevealed(true);
      
      const correct = val === question.answer;
      onAttempt(correct);
      
      if (correct) {
        setTimeout(onResolved, 1500);
      }
    }
  };

  const submitMulti = () => {
    setIsRevealed(true);
    const correctAns = question.answer as string[];
    const user = (selected as string[]) || [];
    const isCorrect = correctAns.length === user.length && correctAns.sort().join('') === user.sort().join('');
    
    onAttempt(isCorrect);
    
    if (isCorrect) {
      setTimeout(onResolved, 1500);
    }
  };

  const submitFill = () => {
      setIsRevealed(true);
      const correctAns = (question.answer as string).replace(/\s+/g, '').toLowerCase();
      const user = textInput.replace(/\s+/g, '').toLowerCase();
      const isCorrect = correctAns === user;
      
      onAttempt(isCorrect);

      if (isCorrect) {
          setTimeout(onResolved, 1500);
      }
  }

  const getOptionLabel = (i: number) => String.fromCharCode(65 + i);

  if (question.type === QuestionType.Short) {
      return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-xs font-bold border-b border-l flex items-center gap-1 z-20 ${getAccuracyColor(accuracy)}`}>
                <BarChart2 className="w-3 h-3" />
                正确率 {accuracy}%
            </div>
            
            <button 
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="absolute top-0 right-32 mt-2 p-2 text-slate-300 hover:text-rose-400 transition-colors z-20"
                title="删除此题"
            >
                <Trash2 className="w-4 h-4" />
            </button>
            
            <div className="flex items-start justify-between gap-2 mb-4 pr-32 relative z-10">
                <div className="flex gap-2 items-center flex-wrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-500 tracking-wide">
                    {formatQuestionLabel(question)}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                    {question.type}
                    </span>
                </div>
            </div>

            <div className="text-slate-900 font-bold text-lg mb-6 leading-relaxed relative z-10">{question.content}</div>

            <textarea 
                className="w-full border-2 border-slate-100 p-4 rounded-xl mb-4 text-lg bg-slate-50 focus:bg-white focus:border-emerald-300 outline-none transition-all"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="思考关键词..."
                disabled={isRevealed}
                rows={2}
            />

            {!isRevealed ? (
                <button onClick={() => setIsRevealed(true)} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" /> 查看答案
                </button>
            ) : (
                <div className="space-y-4 animate-fade-in">
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <div className="text-xs font-bold text-emerald-700 mb-1 uppercase">参考答案</div>
                        <div className="text-slate-800 font-medium">{question.answer}</div>
                        {question.explanation && (
                           <div className="mt-3 pt-3 border-t border-emerald-200/50">
                             <div className="flex items-center gap-1 font-bold text-xs uppercase text-emerald-700 mb-1">
                               <BookOpen className="w-3 h-3" />
                               解析
                             </div>
                             <div className="text-slate-600 text-sm leading-relaxed">{question.explanation}</div>
                           </div>
                        )}
                    </div>
                    <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs" onClick={() => { setIsRevealed(false); onAttempt(false); }}>
                            <RefreshCcw className="w-3 h-3 inline mr-1" /> 重练 (记错)
                        </button>
                        <button onClick={() => { onAttempt(true); onResolved(); }} className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-xs shadow-md">
                            <ThumbsUp className="w-3 h-3 inline mr-1" /> 我已掌握
                        </button>
                    </div>
                </div>
            )}
        </div>
      );
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100/50 hover:shadow-lg transition-all relative overflow-hidden group">
       <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-xs font-bold border-b border-l flex items-center gap-1 z-20 ${getAccuracyColor(accuracy)}`}>
         <BarChart2 className="w-3 h-3" />
         正确率 {accuracy}%
       </div>
       
       <button 
         onClick={(e) => { e.stopPropagation(); onDelete(); }}
         className="absolute top-0 right-32 mt-2 p-2 text-slate-300 hover:text-rose-400 transition-colors z-20"
         title="删除此题"
       >
         <Trash2 className="w-4 h-4" />
       </button>

      <div className="flex items-start justify-between gap-2 mb-4 pr-32 relative z-10">
        <div className="flex gap-2 items-center flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-500 tracking-wide">
              {formatQuestionLabel(question)}
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${
              question.type === QuestionType.Judge ? 'bg-purple-100 text-purple-800' :
              question.type === QuestionType.Multi ? 'bg-orange-100 text-orange-800' :
              question.type === QuestionType.Fill ? 'bg-yellow-100 text-yellow-800' :
              'bg-sky-100 text-sky-800'
            }`}>
              {question.type}
            </span>
        </div>
      </div>
      
      <div className="text-slate-900 font-bold text-lg mb-6 leading-relaxed relative z-10">{question.content}</div>
      
      <div className="space-y-3 relative z-10">
        {question.type === QuestionType.Fill ? (
            <div>
                <textarea 
                    className={`w-full border-2 p-4 rounded-xl mb-3 text-lg transition-all ${
                        isRevealed 
                        ? ((question.answer as string).replace(/\s+/g, '').toLowerCase() === textInput.replace(/\s+/g, '').toLowerCase() 
                            ? 'bg-green-50 border-green-500 text-green-900' 
                            : 'bg-red-50 border-red-500 text-red-900')
                        : 'bg-white border-slate-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-50 outline-none'
                    }`}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    disabled={isRevealed}
                    placeholder="请输入答案..."
                    rows={2}
                />
                {!isRevealed && (
                    <button onClick={submitFill} className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-rose-700 transition-colors shadow-lg shadow-rose-100">提交</button>
                )}
            </div>
        ) : question.type === QuestionType.Judge ? (
           <div className="grid grid-cols-2 gap-3">
             {['Y', 'N'].map(opt => {
               const isSelected = selected === opt;
               const isCorrect = question.answer === opt;
               let bgClass = "bg-white hover:bg-slate-50 border-slate-200 text-slate-600";
               
               if (isRevealed) {
                 if (isCorrect) bgClass = "bg-green-100 border-green-500 text-green-800 ring-2 ring-green-200";
                 else if (isSelected) bgClass = "bg-red-100 border-red-500 text-red-800 ring-2 ring-red-200";
                 else bgClass = "opacity-40";
               } else if (isSelected) {
                 bgClass = "bg-rose-600 border-rose-600 text-white shadow-md";
               }

               return (
                 <button
                   key={opt}
                   onClick={() => handleAnswer(opt)}
                   disabled={isRevealed}
                   className={`py-4 rounded-xl border-2 font-bold transition-all active:scale-95 ${bgClass}`}
                 >
                   {opt === 'Y' ? '正确' : '错误'}
                 </button>
               )
             })}
           </div>
        ) : (
           <div className="grid gap-2">
             {question.options?.map((opt, idx) => {
               const label = getOptionLabel(idx);
               let isSelected = false;
               if (question.type === QuestionType.Multi) isSelected = ((selected as string[]) || []).includes(label);
               else isSelected = selected === label;

               const isCorrect = Array.isArray(question.answer) ? question.answer.includes(label) : question.answer === label;
               
               let itemClass = "p-3.5 rounded-xl border-2 text-left flex gap-3 items-center transition-all ";
               if (isRevealed) {
                  if (isCorrect) itemClass += "bg-green-50 border-green-500 text-green-900 ring-1 ring-green-200";
                  else if (isSelected) itemClass += "bg-red-50 border-red-500 text-red-900 ring-1 ring-red-200";
                  else itemClass += "bg-white border-slate-100 text-slate-400";
               } else {
                  if (isSelected) itemClass += "bg-rose-600 border-rose-600 text-white shadow-md";
                  else itemClass += "bg-white border-slate-200 hover:bg-slate-50 hover:border-rose-200 text-slate-700";
               }

               return (
                 <button
                   key={idx}
                   onClick={() => handleAnswer(label)}
                   disabled={isRevealed && question.type !== QuestionType.Multi}
                   className={itemClass + (isRevealed ? "" : " active:scale-[0.98]")}
                 >
                   <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-black ${
                       isRevealed 
                       ? 'bg-transparent' 
                       : (isSelected ? 'bg-white text-rose-600' : 'bg-slate-100 text-slate-500')
                   }`}>{label}</span>
                   <span className="font-medium">{opt}</span>
                 </button>
               )
             })}
             {question.type === QuestionType.Multi && !isRevealed && (
               <button onClick={submitMulti} className="mt-4 w-full bg-rose-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-rose-200 hover:bg-rose-700 active:scale-95 transition-all">确认提交</button>
             )}
           </div>
        )}
      </div>

      {isRevealed && (
        <div className={`mt-6 p-5 rounded-2xl text-sm border-2 animate-fade-in ${
           (question.type === QuestionType.Multi ? 
             (JSON.stringify((selected as string[]).sort()) === JSON.stringify((question.answer as string[]).sort())) : 
             (question.type === QuestionType.Fill ? 
                (question.answer as string).replace(/\s+/g, '').toLowerCase() === textInput.replace(/\s+/g, '').toLowerCase() : 
                selected === question.answer
             )
           ) ? 'bg-green-50/50 border-green-100 text-green-900' : 'bg-red-50/50 border-red-100 text-red-900'
        }`}>
           <div className="font-black text-lg flex items-center gap-2 mb-2">
             {(question.type === QuestionType.Multi ? 
               (JSON.stringify((selected as string[]).sort()) === JSON.stringify((question.answer as string[]).sort())) : 
                (question.type === QuestionType.Fill ? 
                    (question.answer as string).replace(/\s+/g, '').toLowerCase() === textInput.replace(/\s+/g, '').toLowerCase() : 
                    selected === question.answer
                )
             ) ? (
               <><CheckCircle className="w-5 h-5"/> 回答正确</>
             ) : (
               <><XCircle className="w-5 h-5"/> 仍然错误</>
             )}
           </div>
           
           <div className="mb-4">
             <span className="text-xs font-black uppercase opacity-60 mr-2">Correct Answer</span> 
             <span className="font-bold text-lg">{Array.isArray(question.answer) ? question.answer.join('') : question.answer}</span>
           </div>
           
           {question.explanation && (
             <div className="pt-3 border-t border-black/5">
               <div className="flex items-center gap-1 font-bold text-xs uppercase opacity-60 mb-1">
                 <BookOpen className="w-3 h-3" />
                 解析
               </div>
               <div className="opacity-90 leading-relaxed">{question.explanation}</div>
             </div>
           )}
        </div>
      )}
    </div>
  );
}

// New component for Resolved Items
const ResolvedMistakeItem: React.FC<{
    question: Question;
    onReview: () => void;
}> = ({ question, onReview }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`bg-white rounded-3xl shadow-sm border transition-all cursor-pointer overflow-hidden ${
                isOpen ? 'border-green-200 shadow-md' : 'border-slate-200 hover:border-green-200 hover:shadow-md opacity-70 hover:opacity-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-1 rounded-md uppercase">Solved</span>
                        <span className="text-xs font-bold text-slate-400">{formatQuestionLabel(question)}</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
                <div className="text-slate-800 font-medium mb-3">{question.content}</div>
                
                <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500 bg-slate-50 p-2 px-3 rounded-xl border border-slate-100 inline-block">
                        答案: <span className="font-bold text-green-600 ml-1">
                            {Array.isArray(question.answer) ? question.answer.join('') : (
                                question.type === QuestionType.Short ? '查看详情' : question.answer
                            )}
                        </span>
                    </div>
                    
                    {isOpen && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); onReview(); }}
                            className="text-xs font-bold text-rose-500 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                        >
                            再次练习 <ArrowLeft className="w-3 h-3 rotate-180" />
                        </button>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="bg-green-50/30 p-6 border-t border-green-50 animate-fade-in">
                    <div className="flex items-center gap-2 mb-2 text-green-800 font-bold text-xs uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" />
                        知识点解析
                    </div>
                    <div className="text-slate-600 text-sm leading-7 bg-white/80 p-4 rounded-2xl border border-green-100 shadow-sm">
                        {question.explanation || (question.type === QuestionType.Short ? question.answer : "暂无详细解析，请参考正确答案记忆。")}
                    </div>
                </div>
            )}
        </div>
    );
};

const MistakesView: React.FC<MistakesViewProps> = ({ questions, mistakeIds, stats, resolvedMistakeIds, onExit, onMistakeResolved, onDelete, onClearAll, onReview, onAttempt }) => {
  const [activeTab, setActiveTab] = useState<'PENDING' | 'RESOLVED'>('PENDING');
  
  const pendingQuestions = questions.filter(q => mistakeIds.includes(q.id));
  const resolvedQuestions = questions.filter(q => resolvedMistakeIds.includes(q.id));

  const displayQuestions = activeTab === 'PENDING' ? pendingQuestions : resolvedQuestions;

  return (
    <div className="flex flex-col h-full w-full max-w-3xl mx-auto bg-white sm:rounded-2xl sm:shadow-xl overflow-hidden sm:my-8 sm:h-[90vh] border border-slate-200">
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-100 p-5 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rose-500 fill-rose-50" />
                错题本
              </h2>
            </div>
            {activeTab === 'PENDING' && pendingQuestions.length > 0 && (
              <button 
                onClick={onClearAll}
                className="text-xs text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-2 rounded-lg transition-colors font-bold flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                清空
              </button>
            )}
        </div>

        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
           <button 
             onClick={() => setActiveTab('PENDING')}
             className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
               activeTab === 'PENDING' ? 'bg-white text-rose-600' : 'text-slate-500 hover:text-slate-700 shadow-none'
             }`}
           >
             待复习 ({pendingQuestions.length})
           </button>
           <button 
             onClick={() => setActiveTab('RESOLVED')}
             className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
               activeTab === 'RESOLVED' ? 'bg-white text-green-600' : 'text-slate-500 hover:text-slate-700 shadow-none'
             }`}
           >
             本次已解决 ({resolvedQuestions.length})
           </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-5 space-y-5 scroll-smooth">
        {displayQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-slate-400">
            <div className={`p-6 rounded-[2rem] mb-4 shadow-sm ${activeTab === 'PENDING' ? 'bg-green-50' : 'bg-slate-200'}`}>
                {activeTab === 'PENDING' ? <CheckCircle className="w-12 h-12 text-green-500" /> : <CheckSquare className="w-12 h-12 text-slate-400" />}
            </div>
            <p className="text-xl font-bold text-slate-700 mb-1">
              {activeTab === 'PENDING' ? '太棒了！' : '空空如也'}
            </p>
            <p className="text-sm font-medium">
              {activeTab === 'PENDING' ? '暂时没有待复习的错题' : '还没有解决任何错题'}
            </p>
          </div>
        ) : (
          displayQuestions.map((q) => (
            activeTab === 'PENDING' ? (
               <MistakeCard 
                 key={q.id} 
                 question={q} 
                 stats={stats}
                 onResolved={() => onMistakeResolved(q.id)} 
                 onDelete={() => onDelete(q.id)}
                 onAttempt={(isCorrect) => onAttempt(q.id, isCorrect)}
               />
            ) : (
               <ResolvedMistakeItem 
                 key={q.id}
                 question={q}
                 onReview={() => onReview(q.id)}
               />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default MistakesView;
