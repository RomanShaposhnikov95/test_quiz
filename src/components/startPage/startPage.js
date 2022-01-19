import './startPage.scss';
import {BottomHint} from "../bottomHint/bottomHint";
import {Title} from "../title/title";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTranslations} from "../../redux/translationSlice";
import {StepsEnum} from "../../redux/GameEnum";
import {Preloader} from "../Preloader/Preloader";
import {clearAllGames} from "../../redux/gamesSlice";
import {clearAllBonus} from "../../redux/bonusSlice";
import {motion} from "framer-motion";



export const StartPage = () => {
    const {startPage} = useSelector(state => state.startPage)
    const { translation} = useSelector(state => state.translation);
    const { TITLE_START, INFO_START, BTN_START } = translation
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTranslations())
        dispatch(clearAllGames())
        dispatch(clearAllBonus())
    },[])

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
            <div className="startPage">
                <div className="startPage-title">
                    <Title title={TITLE_START}/>
                </div>
                <div className="startPage-container">
                    {
                        startPage && startPage.length > 0 ?
                            startPage.map((el,index) => (
                                <div key={index} className={`startPage-container-item ${startPage[startPage.length-1] === el ? 'yellow': null}`}>
                                    <div className="startPage-container-item-wrapper">
                                        <img src={el.img} alt=""/>
                                        <div className="startPage-container-item-wrapper-title">
                                            {el.title}
                                        </div>
                                    </div>
                                </div>
                            )) : <Preloader/>
                    }
                </div>
                <div className="startPage-bottom">
                    <BottomHint
                        text={INFO_START}
                        buttonProps={{
                            title: BTN_START,
                            stepsEnum: StepsEnum.STEP_GAME_1
                        }}
                    />
                </div>
                <div className="startPage-login">
                    Already a member? <a href="#">Login</a>
                </div>
            </div>
        </motion.div>
    )
}