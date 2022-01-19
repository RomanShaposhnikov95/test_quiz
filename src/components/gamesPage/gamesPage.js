import './gamesPage.scss';
import {useDispatch, useSelector} from "react-redux";
import {ProgressBar} from "../progressBar/progressBar";
import {BottomHint} from "../bottomHint/bottomHint";
import {Title} from "../title/title";
import {addGames, removeGames} from "../../redux/gamesSlice";
import {Preloader} from "../Preloader/Preloader";
import {motion} from "framer-motion";



export const GamesPage = ({translation}) => {
    const { title, text, btn, stepsEnum, games , error} = translation;
    const activeGames = useSelector(state => state.games.activeGames)
    const dispatch = useDispatch();

    const addGameHandler = (game) => {
        if(activeGames.includes(game)) {
            dispatch(removeGames(game.id))
        } else {
            dispatch(addGames(game))
        }
    }

    const renderGames = () => {
        if(error) {
            return error
        }

        return games && games.length > 0 ? games.map(el => (
            <div key={el.id}
                 onClick={() => addGameHandler(el)}
                 className='gamesPage-wrapper-wrap'
            >
                <div className={`gamesPage-wrapper-wrap-item ${activeGames.includes(el) ? 'active' : null}`}>
                    <img src={el.img} alt=""/>
                </div>
            </div>
        )) : <Preloader/>

    }

    return (

        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
            <div className="gamesPage">

                <ProgressBar/>
                <Title title={title}/>
                <div className="gamesPage-promo">
                    pick up favorite providers
                </div>
                <div className="gamesPage-wrapper">
                    {
                        renderGames()
                    }
                </div>
                <BottomHint
                    text={text}
                    buttonProps={{
                        title: btn,
                        stepsEnum: stepsEnum,
                        disabled: activeGames.length < 3
                    }}
                />
            </div>
        </motion.div>
    )
}