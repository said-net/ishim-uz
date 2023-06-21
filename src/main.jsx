import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home";
import SignIn from "./components/signin";
function Main() {
    return (
        <>
            <Navbar />
            <SignIn/>
            <Routes>
                <Route path="*" element={<Home />} />
            </Routes>
            <ToastContainer autoClose={1500} closeButton={false} position="top-center" style={{ zIndex: '99999999999' }} />
        </>
    );
}

export default Main;