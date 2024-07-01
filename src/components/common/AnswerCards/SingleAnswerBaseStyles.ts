import styled, { css } from 'styled-components';
import { singleAnswerAnimationDuration } from '@components/QuizBody/QuizBody.tsx';

export const SingleAnswerBaseStyles = styled.button<{ $isActive: boolean }>`
    position: relative;
    border-radius: 16px;
    padding: 18px 20px;
    font-size: 17px;
    font-weight: 600;
    text-align: left;
    border: 1px solid rgb(54, 23, 61);
    background-color: rgb(54, 23, 61);
    transition: border .1s ease-in-out;
    overflow: hidden;
    
    &:focus {
        outline: none;
    }
    
    ${({ $isActive }) => !$isActive && css`
        @media (hover: hover) {
            &:hover {
                border: 1px solid rgb(228, 34, 156);
            }
        }

        @media (hover: none) {
            &:active {
                border: 1px solid rgb(228, 34, 156);
            }
        }
    `}
`;

export const SingleAnswerWithAnimation = styled(SingleAnswerBaseStyles)`
    ${({ $isActive }) => $isActive && css`
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 300%;
            height: 300%;
            background: linear-gradient(to bottom right, rgba(228, 34, 156, 0.8), rgba(54, 23, 61, 0.8));
            z-index: 0;
            animation: gradient ${singleAnswerAnimationDuration}ms ease-in-out forwards;
        }
        
        @keyframes gradient {
            0% {
                transform: translate(-100%, -100%);
            }
            100% {
                transform: translate(0, 0);
            }
        }
    `}
`;

export const Emoji = styled.span`
    display: block;
    font-size: 52px;
    text-align: center;
`;

export const SmallEmoji = styled(Emoji)`
    margin-top: -8px;
    font-size: 32px;
`;
