import useQuiz from '@/pages/Quiz/useQuiz.ts';
import QuizHeader from '@components/QuizHeader/QuizHeader.tsx';
import styled from 'styled-components';
import QuizBody from '@components/QuizBody/QuizBody.tsx';

const QuizPage = () => {
  const [quiz, pagesLimit] = useQuiz();

  return (
    <Page>
      <QuizHeader
        pagesLimit={pagesLimit}
      />
      <QuizBody
        quiz={quiz}
        pagesLimit={pagesLimit}
      />
    </Page>
  );
};

const Page = styled.main`
    display: flex;
    flex-direction: column;
    grid-gap: 48px;
    margin: 0 auto 24px auto;
    max-width: var(--max-item-width);
`;

export default QuizPage;
