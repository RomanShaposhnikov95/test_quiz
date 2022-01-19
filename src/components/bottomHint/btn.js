import './bottomHint.scss';
import {useDispatch} from "react-redux";
import {nextStep} from "../../redux/dataSlice";



export const Btn = ({ title, disabled, stepsEnum }) => {
    const dispatch = useDispatch();

    const nextStepHandler = () => {
        dispatch(nextStep(stepsEnum))
        window.scrollTo(0, 0)
    }

    return (
        <button onClick={nextStepHandler} className="bottomHint-btn" disabled={disabled}>
            {title}
        </button>
    )
}