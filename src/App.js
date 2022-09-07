import { useState } from 'react';
import './index.scss';




class Question {
  constructor(title, variants, correct) {
    this.title = title
    this.variants = variants
    this.correct = 0
    
  }
}

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result( {correct} ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
      
    </div>
  );
}

function Game( {step, question, onClickVariant} ) {
  const percentage = Math.round((step / questions.length) * 100)
  
  

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{ question.title }</h1>
      <ul>
        {question.variants.map((variant, i) => {return <li key={variant} onClick={() => onClickVariant(i)}>{variant}</li>})}
        
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  

  const curQuestion  = questions[step]
  console.log(curQuestion)

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1)
    if (curQuestion.correct === index) 
      setCorrect(correct + 1) 
    
    

  }

  return (
    <div className="App">
      {
        step < questions.length ? (
          <Game step={step} question={curQuestion} onClickVariant={onClickVariant}  />
        ) : (<Result correct={correct}/>)
      }
      
      
    </div>
  );
}

export default App;
