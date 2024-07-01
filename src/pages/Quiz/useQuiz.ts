import { Params, useNavigate, useParams } from 'react-router-dom';
import { IQuiz } from '@/interfaces/quiz.ts';
import quizArray from '@/pages/Quiz/quizArray.ts';

type QuizReturnType = [IQuiz, number];

const useQuiz = (): QuizReturnType => {
  const { questionNumber } = useParams<Params<'questionNumber'>>();
  const navigate = useNavigate();

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
