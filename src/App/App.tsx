import AiForm from '../components/AiForm/AiForm';
import Responses from '../features/responses/Responses';
import './App.scss';

function App() {

  return (
    <main
    className='main'
    >
      <div 
      className="main__wrapper"
      >
        <h1
        className='main__title'
        >
          Fun With AI
        </h1>
        <AiForm />
        <Responses />
      </div>
    </main>
  )
}

export default App
