import { useContext, useState } from "react";
import mon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import logo from "./assets/logo.svg";
import ringIcon from "./assets/ring.svg";
import cartIcon from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { DarkModeContext, MovieContext } from "./context";
function Header() {
    const [showCart, setShowCart] = useState(false);
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const handleShowtCart = () => {
        setShowCart(true);
    };
    const { state } = useContext(MovieContext);
    let totalAdded;
    if (state.cartData) {
        totalAdded = state.cartData.length;
    }
    return (
        <>
            {showCart && <CartDetails setShowCart={setShowCart}></CartDetails>}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={logo} width="139" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                            >
                                <img
                                    src={ringIcon}
                                    width="24"
                                    height="24"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                {darkMode ? (
                                    <img
                                        src={sun}
                                        width="24"
                                        height="24"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src={mon}
                                        width="24"
                                        height="24"
                                        alt=""
                                    />
                                )}
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                                onClick={handleShowtCart}
                            >
                                <div>
                                    <img
                                        src={cartIcon}
                                        width="24"
                                        height="24"
                                        alt=""
                                    />
                                    <span className=" absolute top-[-15px] right-[-15px] w-[25px] text-center rounded-full text-white bg-green-500">
                                        {totalAdded}
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
