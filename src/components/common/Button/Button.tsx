import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type ClickableIconProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

const Button: FC<ClickableIconProps> = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
    border-radius: 100px;
    width: 100%;
    height: 56px;
    background-color: rgb(228, 34, 156);
    transition: background-color .1s ease-in-out;
    
    @media (hover: hover) {
        &:hover {
            background-color: rgba(228, 34, 156, .8);
        }
    }
    
    @media (hover: none) {
        &:active {
            background-color: rgba(228, 34, 156, .8);
        }
    }
    
    &:disabled {
        background-color: rgba(228, 34, 156, .4);
        cursor: not-allowed;
    }
`;

export default Button;
