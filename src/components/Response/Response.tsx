import { ResponseProps } from '../../utils/interfaces';
import './Response.scss';

const Response = ({ responseItem }: ResponseProps) => {

    const { prompt, response } = responseItem;

    return (
        <article
        className='response'
        >
            <div
            className='response__container'
            >
                <h3
                className='response__heading'
                >
                    Prompt:
                </h3>
                <p
                className='response__paragraph'
                >
                    {prompt}
                </p>
            </div>
            <div
            className='response__container'
            >
                <h3
                className='response__heading'
                >
                    Response:
                </h3>
                <p
                className='response__paragraph'
                >
                    {response}
                </p>
            </div>
        </article>
    )

}

export default Response;