import './AiForm.scss';
import { useDispatch } from 'react-redux';
import { postPromptForResponse } from '../../features/responses/responsesSlice';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AppDispatch } from '../../app/store';

const AiForm = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [prompt, setPrompt] = useState("");
    const [required, setRequired] = useState(false)

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "prompt":
                setPrompt(value);
                setRequired(false);
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!prompt) {
            setRequired(true);
            return;
        }

        dispatch(postPromptForResponse(prompt));

        setPrompt("");
    }


    return (
        <form
        className='ai-form'
        onSubmit={handleSubmit}
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
                className={`ai-form__textarea ${required ? "ai-form__textarea--invalid" : ""}`}
                value={prompt}
                onChange={handleOnChange}
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