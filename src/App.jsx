import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoviesList from "./cine/MoviesList";
import { MovieContext } from "./context";
import "./output.css";

function App() {
    const [cartData, setCartData] = useState([]);
    return (
        <>
            <MovieContext.Provider value={{ cartData, setCartData }}>
                <Header />
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar />
                        <MoviesList />
                    </div>
                </main>
                <Footer />
            </MovieContext.Provider>
        </>
    );
}

export default App;
