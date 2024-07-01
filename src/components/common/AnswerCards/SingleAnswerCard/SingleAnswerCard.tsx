import { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import {
  Emoji,
  SingleAnswerWithAnimation
} from '@components/common/AnswerCards/SingleAnswerBaseStyles.ts';

interface Props {
  answer: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SingleAnswerCard: FC<Props> = ({ answer, isActive, onClick }) => {
  const [emoji, ...restText] = answer.split(' ');

  return (
    <Button
      type='button'
      $isActive={isActive}
      onClick={onClick}
    >
      <Text>
        <Emoji>
          {emoji}
        </Emoji>
        {restText.join(' ')}
      </Text>
    </Button>
  );
};

const Button = styled(SingleAnswerWithAnimation)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
`;

const Text = styled.p`
    position: relative;
    font-size: 15px;
    text-align: center;
    z-index: 1;
`;

export default SingleAnswerCard;
