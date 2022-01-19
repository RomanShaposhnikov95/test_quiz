import './testPage.scss';
import {TestItem} from "./testItem/testItem";
import {useSelector} from "react-redux";
import {Title} from "../title/title";
import {BottomHint} from "../bottomHint/bottomHint";
import {useState} from "react";
import {ProgressBar} from "../progressBar/progressBar";
import {Preloader} from "../Preloader/Preloader";



export const TestPage = ({translation}) => {
    const {title, text, btn, stepsEnum, quiz} = translation
    const error = useSelector(state => state.data.error)
    const [current, setCurrent] = useState(null)

    const getBottomHintType = () => {
        if (error) return 'rightText'
        if (error === null) return 'descr'

        return 'wrongText'
    }

    const getBottomHintMessage = () => {
        if (error) return 'You won 10 Free Spins!'
        if (error === null) return text

        return 'That’s not it, try again!'
    }

    return (
        <div className="testPage">
            <ProgressBar/>
            <Title title={title}/>
            <div className="testPage-wrap">
                {
                    quiz && quiz.length > 0 ? quiz.map(el =>
                        <TestItem
                            key={el.id}
                            current={current}
                            setCurrent={setCurrent}
                            error={error}
                            {...el}
                        />
                    ) :
                        <Preloader/>
                }
            </div>
            <BottomHint
                text={getBottomHintMessage()}
                type={getBottomHintType()}
                buttonProps={{
                    title: btn,
                    disabled: error !== true,
                    stepsEnum: stepsEnum
                }}
            />
        </div>
    )
}