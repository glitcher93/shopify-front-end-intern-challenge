import './Responses.scss';
import { useSelector } from 'react-redux';
import { IAiResponse, selectResponses } from './responsesSlice';
import Response from '../../components/Response/Response';

const Responses = () => {

    const responses = useSelector(selectResponses);

    responses.sort((a: IAiResponse, b: IAiResponse) => {
      return b.createdAt - a.createdAt;
    })

    return (
        <section
        className='responses'
        >
          <h2
          className='responses__title'
          >
            Responses
          </h2>
          { responses.map((response: IAiResponse) => {
            return (
              <Response
              key={response.id} 
              responseItem={response}
              />
            )
          }) }
        </section>
    )
}

export default Responses;