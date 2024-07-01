export type QuizExtraData = Record<string, unknown>;

export enum AnswerType {
  SINGLE = 'SINGLE',
  SINGLE_CARD = 'SINGLE_CARD',
  CHECKBOX = 'CHECKBOX',
  ROUNDED = 'ROUNDED',
}

export interface IQuizAnswer {
  answer: string;
  extraData?: QuizExtraData;
  coefs: Array<any>;
}

export interface IQuiz {
  order: number;
  question: string;
  questionDescription?: string;
  highlightedQuestionWord?: string;
  answerType: AnswerType;
  answers: IQuizAnswer[];
}
