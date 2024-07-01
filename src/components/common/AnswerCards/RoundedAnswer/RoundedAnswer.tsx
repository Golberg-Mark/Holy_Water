import styled, { css } from 'styled-components';
import { SingleAnswerBaseStyles, SmallEmoji } from '@components/common/AnswerCards/SingleAnswerBaseStyles.ts';
import { FC, MouseEventHandler } from 'react';

interface Props {
  answer: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RoundedAnswer: FC<Props> = ({ answer, isActive, onClick }) => {
  const [emoji, ...restText] = answer.split(' ');

  return (
    <Button
      type='button'
      $isActive={isActive}
      onClick={onClick}
    >
      <SmallEmoji>
        {emoji}
      </SmallEmoji>
      {restText.join(' ')}
    </Button>
  );
};

const Button = styled(SingleAnswerBaseStyles)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0 16px;
    font-size: 13px;
    text-align: center;
    aspect-ratio: 1/1;
    
    &:nth-child(3n + 2) {
        transform: translateY(20px);
    }
    
    ${({ $isActive }) => $isActive && css`
        border: 1px solid rgb(228, 34, 155);
        background-color: rgba(228, 34, 155, 0.2);
    `}
`;

export default RoundedAnswer;
