import styled from 'styled-components';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  currentPage: number,
  pagesLimit: number,
}

const HorizontalProgressBar: FC<Props> = ({currentPage, pagesLimit}) => {
  const navigate = useNavigate();

  return (
    <Bar $currentPage={currentPage} $pagesLimit={pagesLimit} onClick={() => navigate('/quiz/2')}/>
  );
};

const Bar = styled.div<{ $currentPage: number; $pagesLimit: number }>`
    position: relative;
    border-radius: 100px;
    width: 100%;
    height: 4px;
    background-color: #fff;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 100px;
        width: ${({$currentPage, $pagesLimit}) => (
                `calc((100% / ${$pagesLimit + 1}) * ${$currentPage})`
        )};
        height: 4px;
        background-color: rgb(228, 34, 156);
        transition: width 0.6s ease-in-out;
    }
`;

export default HorizontalProgressBar;
