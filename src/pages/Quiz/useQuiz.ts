import { Params, useNavigate, useParams } from 'react-router-dom';
import { IQuiz } from '@/interfaces/quiz.ts';
import getQuizArray from '@/pages/Quiz/quizArray.ts';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type QuizReturnType = [IQuiz, number];

const useQuiz = (): QuizReturnType => {
  const { i18n } = useTranslation();
  const [quizArray, setQuizArray] = useState<IQuiz[]>(getQuizArray());
  const { questionNumber } = useParams<Params<'questionNumber'>>();
  const navigate = useNavigate();

  useEffect(() => {
    i18n.on('languageChanged', () => {
      setQuizArray(getQuizArray());
    });
  }, []);

  if (!questionNumber || typeof +questionNumber !== 'number') {
    navigate('/quiz/1');
    return {} as QuizReturnType;
  }

  if (quizArray[+questionNumber - 1]) {
    return [quizArray[+questionNumber - 1], quizArray.length];
  }

  navigate('/quiz/1');
  return {} as QuizReturnType;
};

export default useQuiz;
