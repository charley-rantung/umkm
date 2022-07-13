import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, ContactUs } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
