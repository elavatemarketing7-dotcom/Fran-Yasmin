
export enum AppState {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
}
