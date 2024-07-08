import { ScrollRequest } from './axios';

export interface QuestionHistory {
  date: string;
  count: number;
}

export interface QuestionListRequest extends ScrollRequest {
  subjectId: number;
}

export interface Question {
  id: number;
  question: string;
  questionType: QuestionType;
}

export type QuestionType = 'CHOICE' | 'DESCRIPTIVE';

export interface QuestionAddRequest {
  subjectId: number;
  question: string;
  questionType: QuestionType;
  answers: Answer[];
}

export interface QuestionAddResponse {
  questionId: number;
}

export interface Answer {
  answer: string;
  isAnswer: boolean;
}
