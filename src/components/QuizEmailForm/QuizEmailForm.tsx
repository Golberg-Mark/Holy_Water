import styled from 'styled-components';
import Button from '@components/common/Button/Button.tsx';
import { useTranslation } from 'react-i18next';
import Dots from '@assets/icons/dots.tsx';
import Input from '@components/common/Input/Input.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailSchema, EmailSchema } from '@/interfaces/email.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const QuizEmailForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    }
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<EmailSchema> = (data) => {
    if (isValid) {
      localStorage.setItem('email', data.email);
      navigate('/thank-you');
    }
  };

  return (
    <Page onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <Dots />
      </Header>
      <Content>
        <ContentIntro>
          <Title>
            {t('Email')}
          </Title>
          <AdditionalText>
            {t('EmailAdditionalText')}
          </AdditionalText>
        </ContentIntro>
        <Input
          autoFocus
          withError
          isError={!!errors.email?.message}
          errorMessage={errors.email?.message}
          type='email'
          placeholder={t('EmailInputPlaceholder')}
          {...register('email')}
        />
        <PrivacyAndTerms>
          {t('By continuing I agree with')}
          <StyledLink to='#'>
            {t('Privacy policy')}
          </StyledLink>
          {t('and')}
          <StyledLink to='#'>
            {t('Terms of use')}
          </StyledLink>
        </PrivacyAndTerms>
      </Content>
      <ButtonWrapper>
        <Button
          type='submit'
          disabled={!isValid}
        >
          {t('Next')}
        </Button>
      </ButtonWrapper>
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
    grid-gap: 40px;
    width: 100%;
    max-width: var(--max-item-width);
`;

const ContentIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 12px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 800;
    color: #fff;
    text-align: center;
`;

const AdditionalText = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: rgb(196, 200, 204);
`;

const PrivacyAndTerms = styled.p`
    max-width: 80%;
    font-size: 12px;
    font-weight: 500;
    color: rgb(182, 184, 195);
    text-align: center;
`;

const StyledLink = styled(Link)`
    font-size: 12px;
    font-weight: 500;
    color: rgb(235, 47, 154);
    transition: .1s ease-in-out;
    
    &:hover {
        color: rgba(235, 47, 154, .6);
    }
`;

const ButtonWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-item-width);
`;

export default QuizEmailForm;
