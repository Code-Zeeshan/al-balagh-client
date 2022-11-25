import { Outlet } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout