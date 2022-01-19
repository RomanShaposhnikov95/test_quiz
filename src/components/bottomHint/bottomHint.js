import './bottomHint.scss';
import {Btn} from "./btn";



export const BottomHint = (props) => {
    const {text, type = "descr", buttonProps={}} = props;
    const {disabled = false, title, stepsEnum} = buttonProps;

    return (
        <div className="bottomHint">
            <p className={`bottomHint-${type}`}>{text}</p>
            <Btn title={title} disabled={disabled} stepsEnum={stepsEnum}/>
        </div>
    )

}