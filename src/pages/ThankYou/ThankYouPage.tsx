import styled from 'styled-components';
import Dots from '@assets/icons/dots.tsx';
import { useTranslation } from 'react-i18next';
import Checkmark from '/Checkmark.png';
import Button from '@components/common/Button/Button.tsx';
import Download from '@assets/icons/download.tsx';
import { useNavigate } from 'react-router-dom';
import LocalStorageQuiz from '@/utils/localStorageQuiz.ts';
import matchIndexesWithQuiz from '@/utils/matchIndexesWithQuiz.ts';
import getCsvFile, { TSVGData } from '@/utils/getCsvFile.ts';

const ThankYouPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const downloadCsv = () => {
    const matchedAnswers = matchIndexesWithQuiz();
    const email = localStorage.getItem('email');

    if (matchedAnswers && email) {
      const lastElement = matchedAnswers.slice(-1)[0];

      matchedAnswers.push({
        order: lastElement.order + 1,
        title: t('Email'),
        type: t('Email').toLowerCase(),
        answer: email,
      });

      getCsvFile(matchedAnswers as unknown as TSVGData, 'Quiz_Answers')
    }
  }

  const retakeQuiz = () => {
    LocalStorageQuiz.clear();
    navigate('/quiz/1');
  }

  return (
    <Page>
      <Header>
        <Dots />
      </Header>
      <Content>
        <ContentText>
          <ThankYou>
            {t('ThankYou')}
          </ThankYou>
          {t('ForSupportingUs')}
        </ContentText>
        <CheckmarkImage src={Checkmark} alt="Checkmark" />
      </Content>
      <Footer>
        <DownloadAnswers
          type='button'
          onClick={downloadCsv}
        >
          <Download />
          {t('DownloadMyAnswers')}
        </DownloadAnswers>
        <Button
          type='button'
          onClick={retakeQuiz}
        >
          {t('RetakeQuiz')}
        </Button>
      </Footer>
    </Page>
  );
};

const Page = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-gap: 24px;
    padding: 0 0 20px;
    height: 100%;
    animation: fade-in .2s ease-in-out;
`;

const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 8px 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 48px;
    width: 100%;
    max-width: var(--max-item-width);
`;

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 4px;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
`;

const ThankYou = styled.h2`
    font-size: 36px;
    font-weight: 400;
    text-align: center;
`;

const CheckmarkImage = styled.img`
    width: 118px;
    height: 118px;
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    grid-gap: 32px;
    margin: 0 auto;
    max-width: var(--max-item-width);
    width: 100%;
`;

const DownloadAnswers = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 8px;
    padding: 0;
    background-color: transparent;
    color: #fff;
    transition: .1s ease-in-out;
    
    @media (hover: hover) {
        &:hover {
            color: rgb(228, 34, 156);

            & path {
                transition: .1s ease-in-out;
                fill: rgb(228, 34, 156);
            }
        }
    }
    
    @media (hover: none) {
        &:active {
            color: rgb(228, 34, 156);

            & path {
                transition: .1s ease-in-out;
                fill: rgb(228, 34, 156);
            }
        }
    }
    
    &:focus {
        outline: none;
    }
`;

export default ThankYouPage;
