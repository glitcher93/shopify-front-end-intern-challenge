import './Responses.scss';
import { useSelector } from 'react-redux';
import { IAiResponse, postPromptPending, selectResponses } from './responsesSlice';
import Response from '../../components/Response/Response';

const Responses = () => {

    let responses = useSelector(selectResponses);

    const responsePending = useSelector(postPromptPending);

    responses = [...responses].sort((a: IAiResponse, b: IAiResponse) => {
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
          { responsePending && 
            <div
            className='responses__loading-container'
            >
              <h3 
              className='responses__loading'
              >
                Loading
                <span
                className='responses__loading--dot'
                >
                  .
                </span>
                <span
                className='responses__loading--dot'
                >
                  .
                </span>
                <span
                className='responses__loading--dot'
                >
                  .
                </span>
              </h3>
            </div>
          }
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