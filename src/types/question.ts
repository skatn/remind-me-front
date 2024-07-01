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
  questionType: 'CHOICE' | 'DESCRIPTIVE';
}
