import { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { SingleAnswerWithAnimation } from '@components/common/AnswerCards/SingleAnswerBaseStyles.ts';

interface Props {
  answer: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SingleAnswer: FC<Props> = ({ answer, isActive, onClick }) => {
  return (
    <SingleAnswerWithAnimation
      type='button'
      $isActive={isActive}
      onClick={onClick}
    >
      <Text>
        {answer}
      </Text>
    </SingleAnswerWithAnimation>
  );
};

const Text = styled.span`
    position: relative;
    z-index: 1;
`;

export default SingleAnswer;
