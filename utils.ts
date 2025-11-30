
import { Question } from "./types";

export const CHAPTER_NAMES: Record<string, string> = {
  '1': '第一章 绪论',
  '2': '第二章 飞机飞行载荷与机体',
  '3': '第三章 飞机起落架系统',
  '4': '第四章 飞行操纵系统',
  '5': '第五章 飞机液压及气压传动系统',
  '6': '第六章 燃油系统',
  '7': '第七章 飞机防冰排雨系统',
  '8': '第八章 飞机氧气系统与灭火系统'
};

export const formatQuestionLabel = (question: Question): string => {
  if (!question) return '';
  
  const chapterName = CHAPTER_NAMES[question.chapter];
  if (chapterName) {
    // Returns "第一章 #Index" format
    const shortChapter = chapterName.split(' ')[0]; 
    const index = question.id.split('-').pop();
    return `${shortChapter} #${index}`;
  }

  return `题目 #${question.id}`;
};

export const getQuestionChapter = (id: string): string => {
  return id.split('-')[0];
};

export const sortQuestions = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => {
    const chapA = parseInt(a.chapter);
    const chapB = parseInt(b.chapter);
    
    if (chapA !== chapB) return chapA - chapB;

    // Sort by type: Single(1)/Multi(2) < Judge(3) < Fill(4) < Short(5)
    // This creates a logical flow within chapters
    const getTypePriority = (id: string) => {
        if (id.includes('-c-')) return 1;
        if (id.includes('-m-')) return 2;
        if (id.includes('-j-')) return 3;
        if (id.includes('-f-')) return 4;
        if (id.includes('-s-')) return 5;
        return 9;
    };

    const typeA = getTypePriority(a.id);
    const typeB = getTypePriority(b.id);
    
    if (typeA !== typeB) return typeA - typeB;

    // Sort by index
    const idxA = parseInt(a.id.split('-').pop() || '0');
    const idxB = parseInt(b.id.split('-').pop() || '0');
    return idxA - idxB;
  });
};
