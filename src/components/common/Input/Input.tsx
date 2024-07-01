import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  withError: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({
  withError,
  isError,
  errorMessage,
  ...props
}, ref ) => {
  return withError ? (
    <Wrapper>
      <InputStyled
        {...props}
        ref={ref}
        $isError={isError}
      />
      <Error>
        {isError && errorMessage ? errorMessage : ''}
      </Error>
    </Wrapper>
  ) : (
    <InputStyled
      {...props}
      ref={ref}
    />
  );
});

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
    width: 100%;
`;

const InputStyled = styled.input<{ $isError?: boolean }>`
    border: 1px solid ${({ $isError }) => $isError ? '#CB4335' : 'rgb(54, 23, 61)'};
    border-radius: 16px;
    padding: 20px;
    max-width: var(--max-item-width);
    width: 100%;
    height: 76px;
    font-size: 17px;
    color: #fff;
    background-color: rgb(54, 23, 61);
    
    &:focus, &:focus-visible {
        outline: none;
        border-color: rgb(228, 34, 156) !important;
    }
    
    &::placeholder {
        font-size: 17px;
        color: rgba(196, 200, 204, 0.5);
    }
`;

const Error = styled.p`
    height: 18px;
    font-size: 12px;
    color: #CB4335;
`;

export default Input;
