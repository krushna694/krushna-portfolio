import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import CustomCursor from "./components/CustomCursor";

function App() {
    return (
        <BrowserRouter>

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