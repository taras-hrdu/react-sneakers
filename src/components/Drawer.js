function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            {/* <div className="overlay"> */}
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Cart
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
                            className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Man sneakers Nike Blazer Mid Suede</p>
                            <b>12 999 uah.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
                            className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Man sneakers Nike Blazer Mid Suede</p>
                            <b>12 999 uah.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>12 999 uah.</b>
                        </li>
                        <li>
                            <span>Comission 5%:</span>
                            <div></div>
                            <b>1 032 uah.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Make an order <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
