import { Route, Routes, Navigate } from 'react-router-dom';
import QuizPage from '@/pages/Quiz/QuizPage.tsx';
import EmailPage from '@/pages/Email/EmailPage.tsx';
import ThankYouPage from '@/pages/ThankYou/ThankYouPage.tsx';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to='/quiz/1' />}
      />

      <Route
        path="/quiz/:questionNumber"
        element={<QuizPage />}
      />

      <Route
        path="/email"
        element={<EmailPage />}
      />

      <Route
        path="/thank-you"
        element={<ThankYouPage />}
      />
    </Routes>
  )
};

export default App
