import { useState } from 'react';
import Response from '../features/Response/Response';
import './App.scss';

function App() {

  const [articles, setArticle] = useState([{
    id: "1",
    prompt: "write a poem",
    response: "Roses are red, Violets are blue, I don't believe in love, Fuck off"
  }]);

  return (
    <main
    className='main'
    >
      <h1
      className='main__title'
      >
        Fun With AI
      </h1>
      <form
      className='ai-form'
      >
        <div
        className='ai-form__group'
        >
          <label 
          htmlFor="prompt"
          className='ai-form__label'
          >
            Enter prompt
          </label>
          <textarea 
          name="prompt" 
          id="prompt"
          className='ai-form__textarea'
          ></textarea>
        </div>
        <div
        className='ai-form__button-container'
        >
          <button
          type='submit'
          className='ai-form__button'
          >
            Submit
          </button>
        </div>
      </form>
      <section
      className='responses'
      >
        <h2
        className='responses__title'
        >
          Responses
        </h2>
        { articles.map(article => {
          return (
            <Response
            key={article.id} 
            prompt={article.prompt}
            response={article.response}
            />
          )
        }) }
      </section>
    </main>
  )
}

export default App
