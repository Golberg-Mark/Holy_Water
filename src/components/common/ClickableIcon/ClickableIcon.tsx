import styled from 'styled-components';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';

type ClickableIconProps = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

const ClickableIcon: FC<ClickableIconProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

const Button = styled.button`
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: default;
    
    &:focus {
        outline: none;
    }
`;

export default ClickableIcon;
