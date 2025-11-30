
export enum QuestionType {
  Single = '单选题',
  Multi = '多选题',
  Judge = '判断题',
  Fill = '填空题',
  Short = '简答题'
}

export interface Question {
  id: string;
  type: QuestionType;
  chapter: string; // Added to explicitly track source chapter
  content: string;
  options?: string[]; // For A, B, C, D. If judge, usually undefined or implied.
  answer: string | string[]; // 'A', 'Y', 'N', or ['A', 'C'] or text for fill/short
  explanation?: string;
  score?: number;
}

export type AppView = 'HOME' | 'QUIZ' | 'SEARCH' | 'MISTAKES' | 'CHAPTER_SELECT' | 'FAVORITES' | 'TYPE_SELECT';

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<string, string | string[]>; // questionId -> answer
  score: number;
  isFinished: boolean;
}
