function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center justify-between">
                <img width={40} height={40} src="/img/logo.png" />
                <div>
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Shop of the best shoes</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>0.005 $</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
