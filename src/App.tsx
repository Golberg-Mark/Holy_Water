import { Route, Routes, Navigate } from 'react-router-dom';
import Quiz from '@/pages/Quiz.tsx';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to='/quiz/1' />}
      />

      <Route
        path="/quiz/:questionNumber"
        element={<Quiz />}
      />
    </Routes>
  )
}

export default App
