import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoviesList from "./cine/MoviesList";
import { DarkModeContext, MovieContext } from "./context";
import "./output.css";

function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <MovieContext.Provider value={{ cartData, setCartData }}>
                    {/* ========================================== */}
                    <div
                        className={`w-full h-full ${darkMode ? "dark" : " "} `}
                    >
                        <Header />
                        <main>
                            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                                <Sidebar />
                                <MoviesList />
                            </div>
                        </main>
                        <Footer />
                    </div>
                    {/* ========================================== */}
                </MovieContext.Provider>
            </DarkModeContext.Provider>
        </>
    );
}

export default App;
