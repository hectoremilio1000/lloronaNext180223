import NavBar from './Navbar';
import FooterFinal from './FooterFinal';

// import '@aws-amplify/ui-react/styles.css';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterFinal />
    </>
  );
}
