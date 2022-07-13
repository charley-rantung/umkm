import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, ContactUs } from "../pages";

const Router = () => {
  return (
    // <BrowserRouter>
    // Use HashRouter if you didn't use server
    <HashRouter hashType="noslash">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<ContactUs />} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default Router;
