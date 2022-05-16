import './AiForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { postPromptForResponse } from '../responses/responsesSlice';
import { selectPrompt, selectEngine, selectPreset, changePrompt, changeEngine, changePreset, togglePrompt, toggleEngine, promptRequired, engineRequired, resetForm } from './aiFormSlice';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import { AppDispatch } from '../../app/store';


const AiForm = () => {

    const dispatch = useDispatch<AppDispatch>();

    const prompt = useSelector(selectPrompt);
    const engine = useSelector(selectEngine);
    const preset = useSelector(selectPreset);
    const isPromptFalse = useSelector(promptRequired);
    const isEngineFalse = useSelector(engineRequired);

    useEffect(() => {
        dispatch(resetForm());
    }, [dispatch])
    
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "prompt":
                dispatch(changePrompt(value));
                break;
            case "engine":
                dispatch(changeEngine(value));
                break;
            case "preset":
                dispatch(changePreset(value));
                break;
            default:
                return;
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!prompt) {
            dispatch(togglePrompt());
        }
        
        if (!engine) {
            dispatch(toggleEngine());
        }
        
        if (!prompt || !engine) return;

        dispatch(postPromptForResponse({engine, prompt}));

        dispatch(resetForm());
    }


    return (
        <form
        className='ai-form'
        onSubmit={handleSubmit}
        method="POST"
        >
            <div
            className='ai-form__group ai-form__group--select'
            >
                <select 
                className={`ai-form__select ai-form__select--engine ${isEngineFalse ? "ai-form__select--invalid" : ""}`}
                name="engine" 
                id="engine"
                onChange={handleOnChange}
                value={engine}
                >
                    <option 
                    value=""
                    disabled
                    >
                        Choose an engine
                    </option>
                    <option 
                    value="text-curie-001"
                    >
                        Curie
                    </option>
                    <option 
                    value="text-babbage-001"
                    >
                        Babbage
                    </option>
                    <option 
                    value="text-ada-001"
                    >
                        Ada
                    </option>
                    <option 
                    value="text-davinci-002"
                    >
                        Da Vinci
                    </option>
                </select>
            </div>
            <div
            className='ai-form__group ai-form__group--select'
            >
                <select 
                className="ai-form__select ai-form__select--preset"
                name="preset" 
                id="preset"
                onChange={handleOnChange}
                value={preset}
                >
                    <option 
                    value=""
                    disabled
                    >
                        Choose a preset (optional)
                    </option>
                    <option 
                    value="Tell a joke"
                    >
                        Tell a joke
                    </option>
                    <option 
                    value="Give me a good recipe"
                    >
                        Give me a good recipe
                    </option>
                    <option 
                    value="Explain quantum physics"
                    >
                        Explain quantum physics
                    </option>
                </select>
            </div>
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
                className={`ai-form__textarea ${isPromptFalse ? "ai-form__textarea--invalid" : ""}`}
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