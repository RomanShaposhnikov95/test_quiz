import './testItem.scss';
import {useDispatch} from "react-redux";
import {changeErrorStatus} from "../../../redux/dataSlice";




export const TestItem = ({result, id, value, setCurrent, current, error}) => {
    const dispatch = useDispatch();

    const onClickHandler = (value) => {
        setCurrent(id)
        dispatch(changeErrorStatus(value))
    }

    const getClass = () => {
        let answerType = ''

        if (id === current) {
            if (error) {
                answerType = 'right'
            } else {
                answerType = 'wrong'
            }
        }

        return answerType
    }


    return (
        <div onClick={() => onClickHandler(value)} className={`testItem ${getClass()}`}>
            {result}
        </div>
    )
}