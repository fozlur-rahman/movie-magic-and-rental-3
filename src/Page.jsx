import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoviesList from "./cine/MoviesList";
import { DarkModeContext } from "./context";

function Page() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`w-full h-full ${darkMode ? "dark" : " "} `}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MoviesList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Page;
