import {GamesPage} from "../gamesPage/gamesPage";
import {useDispatch, useSelector} from "react-redux";
import {StepsEnum} from "../../redux/GameEnum";
import {useEffect} from "react";
import {fetchGames} from "../../redux/gamesSlice";



export const StepGame1 = () => {
    const { translation } = useSelector(state => state.translation);
    const { currentStep } = useSelector(state => state.data);
    const { games} = useSelector(state => state.games)
    const { TITLE_STEP_1, INFO_STEP_1_1, INFO_STEP_1_2, BTN_PiCK_UP, BTN_NEXT } = translation;
    const { STEP_GAME_1, STEP_GAME_2}  = games
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames())
    },[])

    const getGamesParam = () => {
        if(currentStep === StepsEnum.STEP_GAME_1) {
            return {
                title: TITLE_STEP_1,
                text: INFO_STEP_1_1,
                btn: BTN_PiCK_UP,
                stepsEnum: StepsEnum.STEP_GAME_2,
                games: STEP_GAME_1
            }
        }
        if(currentStep === StepsEnum.STEP_GAME_2) {
            return {
                title: TITLE_STEP_1,
                text: INFO_STEP_1_2,
                btn: BTN_NEXT,
                stepsEnum: StepsEnum.STEP_QUIZ_1,
                games: STEP_GAME_2
            }
        }
    }

    return (
        <GamesPage
           translation={getGamesParam()}
        />
    )
}