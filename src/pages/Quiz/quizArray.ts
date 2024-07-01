import { AnswerType, IQuiz } from '@/interfaces/quiz.ts';
import t from '@/i18n.ts';

const quizArray: IQuiz[] = [
  {
    order: 1,
    question: t('firstQuestion'),
    questionDescription: t('firstQuestionDescription'),
    answerType: AnswerType.SINGLE,
    answers: [
      {
        answer: t('firstQuestionAnswerFirst'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('firstQuestionAnswerSecond'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('firstQuestionAnswerThird'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('firstQuestionAnswerFourth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
    ]
  },
  {
    order: 2,
    question: t('secondQuestion'),
    questionDescription: t('secondQuestionDescription'),
    answerType: AnswerType.SINGLE_CARD,
    answers: [
      {
        answer: t('secondQuestionAnswerFirst'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('secondQuestionAnswerSecond'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('secondQuestionAnswerThird'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
    ]
  },
  {
    order: 3,
    question: t('thirdQuestion'),
    answerType: AnswerType.SINGLE,
    answers: [
      {
        answer: t('thirdQuestionAnswerFirst'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('thirdQuestionAnswerSecond'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('thirdQuestionAnswerThird'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('thirdQuestionAnswerFourth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
    ]
  },
  {
    order: 4,
    question: t('fourthQuestion'),
    highlightedQuestionWord: t('fourthQuestionHighlightedWord'),
    answerType: AnswerType.CHECKBOX,
    answers: [
      {
        answer: t('fourthQuestionAnswerFirst'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fourthQuestionAnswerSecond'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fourthQuestionAnswerThird'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fourthQuestionAnswerFourth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
    ]
  },
  {
    order: 5,
    question: t('fifthQuestion'),
    highlightedQuestionWord: t('fifthQuestionDescription'),
    answerType: AnswerType.ROUNDED,
    answers: [
      {
        answer: t('fifthQuestionAnswerFirst'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerSecond'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerThird'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerFourth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerFifth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerSixth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerSeventh'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerEighth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerNinth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
      {
        answer: t('fifthQuestionAnswerTenth'),
        coefs: [
          {
            forQuestionOrder: 5,
            smth: []
          }
        ]
      },
    ]
  }
];

export default quizArray;
