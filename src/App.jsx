import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";


function App() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);


        return () => {
            clearTimeout(timer);
        };

    }, []);


    return (

        <BrowserRouter>
            <ScrollToTop />
            <AnimatePresence mode="wait">

                {loading && (
                    <LoadingScreen />
                )}

            </AnimatePresence>


            <CustomCursor />

            <Navbar />


            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects"
                    element={<ProjectsPage />}
                />

            </Routes>

        </BrowserRouter>

    );
}


export default App;