import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  question: string;
  highlightedWord?: string;
}

const Question: FC<Props> = ({ question, highlightedWord }) => {
  const parts = highlightedWord ? question.split(highlightedWord) : question;

  return (
    <QuestionStyled>
      {highlightedWord ? (
        <>
          {parts[0]}
          {parts[1] && (
            <>
              <HighlightedWord>
                {highlightedWord}
              </HighlightedWord>
              {parts[1]}
            </>
          )}
        </>
      ) : question}
    </QuestionStyled>
  );
};

const QuestionStyled = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    text-align: center;
`;

const HighlightedWord = styled.span`
    color: rgb(228, 34, 156);
`;

export default Question;
