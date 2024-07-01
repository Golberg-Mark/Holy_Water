import { AnimationEventHandler } from 'react';
import ScreenLoader from '@components/common/ScreenLoader.tsx';
import useToggle from '@/hooks/useToggle.ts';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import QuizEmailForm from '@components/QuizEmailForm/QuizEmailForm.tsx';

const EmailPage = () => {
  const { t } = useTranslation();
  const [isAnimating, toggleIsAnimating] = useToggle(true);

  const onAnimationEnd: AnimationEventHandler<HTMLOrSVGElement> = (evt) => {
    if (evt.animationName === 'opacity-animation') {
      console.log('Animation finished');
      toggleIsAnimating(false);
    }
  }

  return isAnimating ? (
    <CenteredPage>
      <ScreenLoader
        onAnimationEnd={onAnimationEnd}
        loaderText={t('Finding collections for you')}
      />
    </CenteredPage>
  ) : (
    <QuizEmailForm />
  );
};

const CenteredPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export default EmailPage;
