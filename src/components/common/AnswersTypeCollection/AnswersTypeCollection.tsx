import { AnswerType, IQuizAnswer } from '@/interfaces/quiz.ts';
import { FC } from 'react';
import SingleAnswer from '@components/common/AnswerCards/SingleAnswer/SingleAnswer.tsx';
import { OnAnswerClick } from '@components/QuizBody/QuizBody.tsx';
import SingleAnswerCard from '@components/common/AnswerCards/SingleAnswerCard/SingleAnswerCard.tsx';
import styled from 'styled-components';
import AnswerWithCheckbox from '@components/common/AnswerCards/AnswerWithCheckbox/AnswerWithCheckbox.tsx';
import Button from '@components/common/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import RoundedAnswer from '@components/common/AnswerCards/RoundedAnswer/RoundedAnswer.tsx';
import { useTranslation } from 'react-i18next';

interface Props {
  type: AnswerType;
  nextPage: string;
  activeAnswers: number[];
  answers: IQuizAnswer[];
  onAnswerClick: OnAnswerClick;
}

const AnswersTypeCollection: FC<Props> = ({
  type,
  nextPage,
  activeAnswers,
  answers,
  onAnswerClick,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (type === AnswerType.ROUNDED) {
    const isValidated = !!activeAnswers?.length;

    const goNext = () => {
      if (activeAnswers.length) {
        navigate(nextPage);
      }
    };

    return (
      <WithButton>
        <RoundedContainer>
          {answers.map((answer, i) => {
            const isActive = activeAnswers && activeAnswers.includes(i);

            return (
              <RoundedAnswer
                key={`${answer.answer}_${i}`}
                answer={answer.answer}
                isActive={isActive}
                onClick={() => onAnswerClick(i, isActive)}
              />
            );
          })}
        </RoundedContainer>
        <Button
          disabled={!isValidated}
          onClick={goNext}
        >
          {t('Next')}
        </Button>
      </WithButton>
    );
  }

  if (type === AnswerType.CHECKBOX) {
    const isValidated = !!activeAnswers?.length;

    const goNext = () => {
      if (activeAnswers.length) {
        navigate(nextPage);
      }
    };

    return (
      <WithButton>
        <ContainerBase>
          {answers.map((answer, i) => {
            const isActive = activeAnswers && activeAnswers.includes(i);

            return (
              <AnswerWithCheckbox
                key={`${answer.answer}_${i}`}
                answer={answer.answer}
                isActive={isActive}
                onClick={() => onAnswerClick(i, isActive)}
              />
            );
          })}
        </ContainerBase>
        <Button
          disabled={!isValidated}
          onClick={goNext}
        >
          Next
        </Button>
      </WithButton>
    );
  }

  if (type === AnswerType.SINGLE_CARD) {
    return (
      <SingleAnswerCardContainer>
        {answers.map((answer, i) => (
          <SingleAnswerCard
            key={`${answer.answer}_${i}`}
            answer={answer.answer}
            isActive={activeAnswers && i === activeAnswers[0]}
            onClick={() => onAnswerClick(i, activeAnswers && i === activeAnswers[0])}
          />
        ))}
      </SingleAnswerCardContainer>
    );
  }

  return (
    <ContainerBase>
      {answers.map((answer, i) => (
        <SingleAnswer
          key={`${answer.answer}_${i}`}
          answer={answer.answer}
          isActive={activeAnswers && i === activeAnswers[0]}
          onClick={() => onAnswerClick(i, activeAnswers && i === activeAnswers[0])}
        />
      ))}
    </ContainerBase>
  );
};

const WithButton = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
`;

const ContainerBase = styled.div`
    display: grid;
    grid-gap: 12px;
`;

const SingleAnswerCardContainer = styled(ContainerBase)`
    grid-template-columns: repeat(3, 1fr);
`;

const RoundedContainer = styled(ContainerBase)`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
`;

export default AnswersTypeCollection;
