import Menu from "../../components/header/Menu.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

function RootLayout({}) {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer/>
        </>
    );
}

export default RootLayout;