import './Responses.scss';
import Response from '../../components/Response/Response';

const Responses = () => {
    return (
        <section
        className='responses'
        >
          <h2
          className='responses__title'
          >
            Responses
          </h2>
          {/* { articles.map((article: {id: number, prompt: string, response: string}) => {
            return (
              <Response
              key={article.id} 
              prompt={article.prompt}
              response={article.response}
              />
            )
          }) } */}
        </section>
    )
}

export default Responses;