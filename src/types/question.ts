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
  questionImage: string;
  questionType: QuestionType;
  answers: Answer[];
  explanation: string;
}

export interface QuestionAddResponse {
  questionId: number;
}

export interface Answer {
  id?: number;
  answer: string;
  isAnswer: boolean;
}

export interface QuestionSubmitRequest {
  questionId: number;
  submittedAnswer: string;
}

export interface QuestionSubmitResponse {
  correct: boolean;
}

export interface QuestionGetResponse {
  id: number;
  question: string;
  questionImage: string;
  questionType: QuestionType;
  explanation: string;
  answers: Answer[];
}

export interface QuestionNavigation {
  index: number;
  hasNext: boolean;
  hasPrev: boolean;
}
