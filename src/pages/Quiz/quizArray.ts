import { AnswerType } from '@/interfaces/quiz.ts';
import i18n from '@/i18n.ts';

const getQuizArray = () => {
  return [
    {
      order: 1,
      question: i18n.t('firstQuestion'),
      questionDescription: i18n.t('firstQuestionDescription'),
      answerType: AnswerType.SINGLE,
      answers: [
        {
          answer: i18n.t('firstQuestionAnswerFirst'),
          extraData: {
            languageCode: 'en',
          },
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('firstQuestionAnswerSecond'),
          extraData: {
            languageCode: 'fr',
          },
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('firstQuestionAnswerThird'),
          extraData: {
            languageCode: 'de',
          },
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('firstQuestionAnswerFourth'),
          extraData: {
            languageCode: 'es',
          },
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
      question: i18n.t('secondQuestion'),
      questionDescription: i18n.t('secondQuestionDescription'),
      answerType: AnswerType.SINGLE_CARD,
      answers: [
        {
          answer: i18n.t('secondQuestionAnswerFirst'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('secondQuestionAnswerSecond'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('secondQuestionAnswerThird'),
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
      question: i18n.t('thirdQuestion'),
      answerType: AnswerType.SINGLE,
      answers: [
        {
          answer: i18n.t('thirdQuestionAnswerFirst'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('thirdQuestionAnswerSecond'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('thirdQuestionAnswerThird'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('thirdQuestionAnswerFourth'),
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
      question: i18n.t('fourthQuestion'),
      highlightedQuestionWord: i18n.t('fourthQuestionHighlightedWord'),
      answerType: AnswerType.CHECKBOX,
      answers: [
        {
          answer: i18n.t('fourthQuestionAnswerFirst'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fourthQuestionAnswerSecond'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fourthQuestionAnswerThird'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fourthQuestionAnswerFourth'),
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
      question: i18n.t('fifthQuestion'),
      highlightedQuestionWord: i18n.t('fifthQuestionDescription'),
      answerType: AnswerType.ROUNDED,
      answers: [
        {
          answer: i18n.t('fifthQuestionAnswerFirst'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerSecond'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerThird'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerFourth'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerFifth'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerSixth'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerSeventh'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerEighth'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerNinth'),
          coefs: [
            {
              forQuestionOrder: 5,
              smth: []
            }
          ]
        },
        {
          answer: i18n.t('fifthQuestionAnswerTenth'),
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
};

export default getQuizArray;
