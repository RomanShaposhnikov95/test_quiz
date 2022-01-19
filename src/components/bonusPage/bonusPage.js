import './bonusPage.scss';
import {Title} from "../title/title";
import {BottomHint} from "../bottomHint/bottomHint";
import {ProgressBar} from "../progressBar/progressBar";
import {useDispatch, useSelector} from "react-redux";
import {addBonus, fetchBonus, removeBonus} from "../../redux/bonusSlice";
import {useEffect} from "react";
import {Preloader} from "../Preloader/Preloader";
import {StepsEnum} from "../../redux/GameEnum";
import {motion} from "framer-motion";
import {ServerError} from "../serverError/serverError";



export const BonusPage = () => {
    const dispatch = useDispatch();
    const {bonus, activeBonus, bonusLoadingStatus} = useSelector(state => state.bonus);
    const { translation } = useSelector(state => state.translation);
    const { TITLE_STEP_3, INFO_STEP_3, BTN_NEXT } = translation

    useEffect(() => {
        dispatch(fetchBonus())
    },[])

    const addBonusHandler = (bonus) => {
        if(activeBonus.includes(bonus)) {
            dispatch(removeBonus(bonus.id))
        } else {
            dispatch(addBonus(bonus))
        }
    }

    const renderBonus = () => {
        if(bonusLoadingStatus === 'error') {
            return <ServerError/>
        }
        return bonus && bonus.length > 0 ? bonus.map(el => (
                <div onClick={() => addBonusHandler(el)}
                     key={el.id}
                     className={`bonusPage-container-item ${activeBonus.includes(el) ? 'activeBonus' : null}`}>
                    {el.bonus}
                </div>
            )) :
            <Preloader/>
    }

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
            <div className="bonusPage">
                <ProgressBar />
                <Title title={TITLE_STEP_3}/>
                <div className="bonusPage-container">
                    {
                        renderBonus()
                    }
                </div>
                <BottomHint
                    text={INFO_STEP_3}
                    buttonProps={{
                        title: BTN_NEXT,
                        stepsEnum: StepsEnum.STEP_QUIZ_2,
                        disabled: activeBonus.length < 3
                    }}
                />
            </div>
        </motion.div>
    )
}