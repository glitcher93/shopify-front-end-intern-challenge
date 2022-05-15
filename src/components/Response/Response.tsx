import './Response.scss';

interface ResponseProps {
    prompt: string
    response: string
}

const Response = ({ prompt, response }: ResponseProps) => {
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