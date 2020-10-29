import logo from '../img/logo.svg';
import '../css/header.css';
import Clock from './Clock';

function Header() {
    let date = new Date();

    setInterval(() => {
        date = new Date();
    }, 1000);

    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <Clock date={date} />
        </div>
    );
}

export default Header;