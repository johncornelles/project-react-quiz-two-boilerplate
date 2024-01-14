import './App.css';
import Quiz from './components/Quiz';
import questions from '../resources/quizQuestion.json';

function App() {
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
}

export default App;