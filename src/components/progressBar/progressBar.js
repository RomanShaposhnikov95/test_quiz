import './progressBar.scss';
import {useSelector} from "react-redux";
import {StepsEnum} from "../../redux/GameEnum";
import {StartPage} from "../startPage/startPage";
import {StepGame1} from "../StepGame1/StepGame1";
import {StepQuiz} from "../StepQuiz/StepQuiz";
import {BonusPage} from "../bonusPage/bonusPage";
import {DepositPage} from "../depositPage/depositPage";
import {FinishPage} from "../finishPage/finishPage";



export const ProgressBar = () => {
    const {currentStep} = useSelector(state => state.data);

    const getProgress = () => {
        switch (currentStep) {
            case StepsEnum.STEP_START:
                return null
            case StepsEnum.STEP_GAME_1:
                return 1
            case StepsEnum.STEP_GAME_2:
                return 1
            case StepsEnum.STEP_QUIZ_1:
                return  2
            case StepsEnum.STEP_QUIZ_2:
                return 4
            case StepsEnum.STEP_BONUS:
                return 3
            case StepsEnum.STEP_DEPOSIT:
                return 5
            case StepsEnum.STEP_END:
                return null
        }
    }

    const step = getProgress()

    return (
        <div className="progressBar">
            <div className="progressBar-count">
                QUESTION <span>{step}</span>/<span>5</span>
            </div>
            <div className="progressBar-progress">
                <Line color={step > 0}/>
                <Line color={step > 1}/>
                <Line color={step > 2}/>
                <Line color={step > 3}/>
                <Line color={step > 4}/>
            </div>
        </div>
    )
}

const Line = (props) => {
    return props.color ? <div className="progressBar-progress_block activeStep"></div> : <div className="progressBar-progress_block"></div>
}