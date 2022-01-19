import './header.scss';
import logo from "../../resources/img/logo.png";



export const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}