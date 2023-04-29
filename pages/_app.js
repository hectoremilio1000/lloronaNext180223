import "../styles/main.css";
import "../styles/global.css"
import "../components/Navbar/navBar.css"
import LayoutFinal from "../components/layout";
import { useState } from "react";
import AppContextProvider from "../components/context/Context";


export default function MyApp({ Component, pageProps }) {


  return (<> 
    <AppContextProvider>
    <LayoutFinal >
      <Component {...pageProps} />
      </LayoutFinal> 
    </AppContextProvider>
    </>
  )
}
