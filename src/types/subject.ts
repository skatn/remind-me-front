import { ScrollRequest, ScrollResponse } from './axios';

export interface SubjectFormData {
  title: string;
  color: string;
  visibility: 'PUBLIC' | 'PRIVATE';
  tags: string[];
}

export interface SubjectAddResponse {
  subjectId: number;
}

export interface SubjectListGetRequest extends ScrollRequest {
  title?: string;
}

export interface SubjectListGetResponse extends ScrollResponse<Subject> {}

export interface Subject {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  questionCount: number;
  tags: string[];
  author: Author;
}

export interface SubjectDetails {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  isEnableNotification: boolean;
  visibility: 'PUBLIC' | 'PRIVATE';
  questionCount: number;
  tags: string[];
  author: Author;
}

export interface Author {
  id: number;
  name: string;
}

export interface NotificationUpdateRequest {
  enable: boolean;
}

export interface NotificationGetResponse {
  isEnable: boolean;
}

export type SubjectRecentList = Subject[];
