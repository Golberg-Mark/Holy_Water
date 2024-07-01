export enum AnswerType {
  SINGLE = 'SINGLE',
  SINGLE_CARD = 'SINGLE_CARD',
  CHECKBOX = 'CHECKBOX',
  ROUNDED = 'ROUNDED',
}

export interface IQuizAnswer {
  answer: string;
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
