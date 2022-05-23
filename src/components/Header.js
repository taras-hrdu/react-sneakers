import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center justify-between">
                    <img width={40} height={40} src="/img/logo.png" />
                    <div>
                        <h3 className="text-uppercase">React sneakers</h3>
                        <p className="opacity-5">Shop of the best shoes</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                    <span>0.005 $</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt="Heart" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
