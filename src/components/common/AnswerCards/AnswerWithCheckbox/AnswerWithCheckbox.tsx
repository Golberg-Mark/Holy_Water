import { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { SingleAnswerBaseStyles } from '@components/common/AnswerCards/SingleAnswerBaseStyles.ts';
import Checkbox from '@assets/icons/checkbox.tsx';

interface Props {
  answer: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const AnswerWithCheckbox: FC<Props> = ({ answer, isActive, onClick }) => {
  return (
    <Button
      type='button'
      $isActive={isActive}
      onClick={onClick}
    >
      {answer}
      <Checkbox isActive={isActive} />
    </Button>
  );
};

const Button = styled(SingleAnswerBaseStyles)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    
    ${({ $isActive }) => $isActive && css`
        border: 1px solid rgb(228, 34, 155);
        background-color: rgba(228, 34, 155, 0.2);
    `}
`;

export default AnswerWithCheckbox;
