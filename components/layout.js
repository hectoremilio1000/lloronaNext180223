import NavBar from "./Navbar";
import FooterFinal from './FooterFinal';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
           
            <main>{children}</main>
            <FooterFinal />
        </>
    )
}