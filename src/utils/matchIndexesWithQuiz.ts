import LocalStorageQuiz from '@/utils/localStorageQuiz.ts';
import getQuizArray from '@/pages/Quiz/quizArray.ts';
import { AnswerType } from '@/interfaces/quiz.ts';

interface IMatchedAnswersWithQuiz {
  order: number;
  title: string;
  type: AnswerType | string;
  answer: string;
}

const matchIndexesWithAnswers = (): IMatchedAnswersWithQuiz[] | undefined => {
  const answers = LocalStorageQuiz.getQuizAnswers();

  if (answers) {
    const quizArray = getQuizArray();

    return Object.keys(answers).map(key => {
      const order = parseInt(key);
      const quizItem = quizArray.find((el) => el.order === order)!;
      const matchedAnswers = answers[order].map(index => quizItem.answers[index].answer).join('; ');

      return {
        order: quizItem.order,
        title: quizItem.question,
        type: quizItem.answerType,
        answer: matchedAnswers
      };
    });
  }
};

export default matchIndexesWithAnswers;
