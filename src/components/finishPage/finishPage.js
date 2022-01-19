import './finishPage.scss';
import {Title} from "../title/title";
import {Btn} from "../bottomHint/btn";
import ReactConfetti from "react-confetti";
import {useWindowSize} from "@react-hook/window-size";
import {useSelector} from "react-redux";
import {StepsEnum} from "../../redux/GameEnum";
import {motion} from "framer-motion";


export const FinishPage = () => {
    const { translation } = useSelector(state => state.translation);
    const { TITLE_END, BTN_FINISH} = translation
    const [width, height] = useWindowSize()

    return (

            <div className="finishPage">
                <ReactConfetti numberOfPieces={1000} height={height} width={width}/>
                <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
                    <div className="finishPage-title">
                        <Title title={TITLE_END}/>
                    </div>
                    <div className="finishPage-spinsCount">
                        YOU HAVE EARNED<br/><span>50 FREE SPINS</span>
                    </div>

                    <div className="finishPage-bottom">
                        <Btn title={BTN_FINISH} stepsEnum={StepsEnum.STEP_START}/>
                    </div>
                </motion.div>
            </div>

    )
}