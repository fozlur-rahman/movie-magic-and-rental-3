import { useReducer, useState } from "react";
import "./App.css";
import Page from "./Page";
import { DarkModeContext, MovieContext } from "./context";
import "./output.css";
import { cartReducer, initialState } from "./reducer/cartReducer";

function App() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
                <MovieContext.Provider value={{ state, dispatch }}>
                    <Page></Page>
                </MovieContext.Provider>
            </DarkModeContext.Provider>
        </>
    );
}

export default App;
