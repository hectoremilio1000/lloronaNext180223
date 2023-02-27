import "../styles/main.css";
import "../styles/global.css"
import LayoutFinal from "../components/layout";
import 'antd/dist/antd';


export default function MyApp({ Component, pageProps }) {
  return (
    <LayoutFinal>
      <Component {...pageProps} />
    </LayoutFinal>
  )
}
