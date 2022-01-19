import {TestPage} from "../testPage/testPage";
import {StepsEnum} from "../../redux/GameEnum";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTest} from "../../redux/testSlice";
import {StartPage} from "../startPage/startPage";
import {motion} from "framer-motion";


export const StepQuiz = () => {
    const { translation } = useSelector(state => state.translation);
    const { currentStep } = useSelector(state => state.data);
    const { questions } = useSelector(state => state.test)
    const { TITLE_STEP_2, TITLE_STEP_4, BTN_NEXT, INFO_STEP_TEST } = translation;
    const { STEP_QUESTION_1, STEP_QUESTION_2 } = questions
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTest())
    },[])

    const getQuizParam = () => {
        if(currentStep === StepsEnum.STEP_QUIZ_1) {
            return {
                title: TITLE_STEP_2,
                text: INFO_STEP_TEST,
                btn: BTN_NEXT,
                stepsEnum: StepsEnum.STEP_BONUS,
                quiz: STEP_QUESTION_1
            }
        }
        if(currentStep === StepsEnum.STEP_QUIZ_2) {
            return {
                title: TITLE_STEP_4,
                text: INFO_STEP_TEST,
                btn: BTN_NEXT,
                stepsEnum: StepsEnum.STEP_DEPOSIT,
                quiz: STEP_QUESTION_2
            }
        }
    }

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
            <TestPage
                translation={getQuizParam()}
            />
        </motion.div>

    )
}