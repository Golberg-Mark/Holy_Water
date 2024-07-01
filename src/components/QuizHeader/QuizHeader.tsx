import { FC } from 'react';
import styled from 'styled-components';
import HorizontalProgressBar from '@components/common/HorizontalProgressBar/HorizontalProgressBar.tsx';
import ClickableIcon from '@components/common/ClickableIcon/ClickableIcon.tsx';
import Back from '@assets/icons/back.tsx';
import { Params, useNavigate, useParams } from 'react-router-dom';
import Dots from '@assets/icons/dots.tsx';

interface Props {
  pagesLimit: number,
}

const QuizHeader: FC<Props> = ({ pagesLimit}) => {
  const currentPage = +useParams<Params<'questionNumber'>>().questionNumber!;
  const navigate = useNavigate();

  const goBack = () => {
    if (currentPage !== 1) {
      navigate(`/quiz/${currentPage - 1}`);
    }
  };

  return (
    <Header>
      <Top>
        <ClickableIcon onClick={goBack}>
          {currentPage !== 1 && (
            <Back/>
          )}
        </ClickableIcon>
        {`${currentPage}/${pagesLimit}`}
        <ClickableIcon>
          <Dots />
        </ClickableIcon>
      </Top>
      <HorizontalProgressBar
        currentPage={currentPage}
        pagesLimit={pagesLimit}
      />
    </Header>
  );
};

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 12px;
    padding: 8px 0;
    width: 100%;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 18px;
    font-weight: 800;
`;

export default QuizHeader;
