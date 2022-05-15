import './AiForm.scss';

const AiForm = () => {
    return (
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
    )
}

export default AiForm;