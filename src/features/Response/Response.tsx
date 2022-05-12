

const Response = ({ prompt, response }: {prompt: string, response: string}) => {
    return (
        <article
        className='responses__response'
        >
            <div
            className='responses__container'
            >
            <h3
            className='responses__heading'
            >
                Prompt:
            </h3>
            <p
            className='responses__paragraph'
            >
                {prompt}
            </p>
            </div>
            <div
            className='responses__container'
            >
            <h3
            className='responses__heading'
            >
                Response:
            </h3>
            <p
            className='responses__paragraph'
            >
                {response}
            </p>
            </div>
        </article>
    )

}

export default Response;