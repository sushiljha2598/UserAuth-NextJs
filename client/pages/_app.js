import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';

export default function MyApp({Component, pageProps}) {
    return(
        <>
        <Nav />
        <Component {...pageProps} />
        </>
    )
}