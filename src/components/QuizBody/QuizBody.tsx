import { AnswerType, IQuiz } from '@/interfaces/quiz.ts';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import AnswersTypeCollection from '@components/common/AnswersTypeCollection/AnswersTypeCollection.tsx';
import LocalStorageQuiz from '@/utils/localStorageQuiz.ts';
import { Params, useNavigate, useParams } from 'react-router-dom';
import wait from '@/utils/wait.ts';
import Question from '@components/common/Question/Question.tsx';

interface Props {
  quiz: IQuiz;
  pagesLimit: number;
}

export type OnAnswerClick = (answerIndex: number, isActive: boolean) => void;

export const singleAnswerAnimationDuration = 1000;

const QuizBody: FC<Props> = ({ quiz, pagesLimit }) => {
  const currentPage = +useParams<Params<'questionNumber'>>().questionNumber!;
  const [activeAnswers, setActiveAnswer] = useState(LocalStorageQuiz.getQuizAnswerByOrder(quiz.order));

  const navigate = useNavigate();

  const onAnswerClick: OnAnswerClick = async (answerIndex, isActive) => {
    if (quiz.answerType === AnswerType.CHECKBOX || quiz.answerType === AnswerType.ROUNDED) {
      let currentIndexes = LocalStorageQuiz.getQuizAnswerByOrder(quiz.order);

      if (isActive) {
        currentIndexes = currentIndexes.filter((el) => el !== answerIndex);
      }
      else {
        currentIndexes.push(answerIndex);
      }

      LocalStorageQuiz.setAnswerArray(quiz.order, currentIndexes);
      setActiveAnswer(currentIndexes);
    }

    if (quiz.answerType === AnswerType.SINGLE || quiz.answerType === AnswerType.SINGLE_CARD) {
      const value = LocalStorageQuiz.setAnswer(quiz.order, answerIndex);
      setActiveAnswer(value);

      if (!isActive) await wait(singleAnswerAnimationDuration + 50);

      navigate(`/quiz/${currentPage + 1}`);
    }
  };

  useEffect(() => {
    setActiveAnswer(LocalStorageQuiz.getQuizAnswerByOrder(quiz.order));
  }, [quiz.order])

  return (
    <Quiz>
      <QuestionWrapper>
        <Question
          question={quiz.question}
          highlightedWord={quiz.highlightedQuestionWord}
        />
        {quiz.questionDescription && (
          <QuestionDescription>
            {quiz.questionDescription}
          </QuestionDescription>
        )}
      </QuestionWrapper>

      <AnswersTypeCollection
        type={quiz.answerType}
        activeAnswers={activeAnswers}
        answers={quiz.answers}
        onAnswerClick={onAnswerClick}
        nextPage={currentPage < pagesLimit
          ? `/quiz/${currentPage + 1}`
          : '/email'}
      />
    </Quiz>
  );
};

const Quiz = styled.section`
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
`;

const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
`;

const QuestionDescription = styled.p`
    font-size: 18px;
    color: rgb(196, 200, 204);
    text-align: center;
`;

export default QuizBody;
