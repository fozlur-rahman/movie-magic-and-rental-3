import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MoviesList from "./cine/MoviesList";
import { getAllMovies } from "./data/movies";
import "./output.css";

function App() {
    const data = getAllMovies();
    console.log(data);
    return (
        <>
            {/*===== header ==== */}
            <Header />
            {/* ===main === */}
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MoviesList />
                </div>
            </main>
            {/*==== footer ======= */}
            <Footer />
        </>
    );
}

export default App;
