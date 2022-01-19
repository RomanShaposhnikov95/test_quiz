import './depositPage.scss';
import {ProgressBar} from "../progressBar/progressBar";
import {Title} from "../title/title";
import {BottomHint} from "../bottomHint/bottomHint";
import cards from '../../resources/img/pay-logos 1.png'
import {useEffect, useState} from "react";
import {StepsEnum} from "../../redux/GameEnum";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/dataSlice";
import {motion} from "framer-motion";



export const DepositPage = () => {
    const { translation } = useSelector(state => state.translation);
    const {currency} = useSelector(state => state.data)
    const { TITLE_STEP_5, INFO_STEP_5, BTN_SET} = translation;
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    },[])

    const onChangeHandler = (e) => {
        setCount(e.target.value)
    }

    const changeCurrency = () => {
        if(currency && currency.length > 0) {
            return currency.map(el => (
               <option key={el.id}>{el.value}</option>
            ))
        }
    }


    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.3}}>
            <div className="depositPage">
                <ProgressBar/>
                <div className="depositPage-title">
                    <Title title={TITLE_STEP_5}/>
                </div>

                <div className="depositPage-container">
                    <div className="depositPage-container-info">
                        Deposit Limit Per month
                    </div>
                    <div className="depositPage-container-filter">
                        <button onClick={() => setCount(100)} className="depositPage-container-filter-btn">MAX</button>
                        <input value={count} onChange={(e) => onChangeHandler(e)} type="range"/>
                        <button onClick={() => setCount(0)}  className="depositPage-container-filter-btn">MIN</button>
                    </div>
                    <div className="depositPage-container-count">
                        <input value={count} onChange={(e) => onChangeHandler(e)} type="number" min="0" max="100"/>
                        <select>
                            {
                                changeCurrency()
                            }
                        </select>
                    </div>
                    <div className="depositPage-container-cards">
                        <img src={cards} alt=""/>
                    </div>
                </div>

                <BottomHint
                    text={INFO_STEP_5}
                    buttonProps={{
                        title: BTN_SET,
                        stepsEnum: StepsEnum.STEP_END
                    }}
                />
            </div>
        </motion.div>

    )
}