import Home from './pages/Home';
import Footer from './components/Footer'
import Header from './components/Header';

function App(){
    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </> //deve ter um component pai, para ter o Home e Footer dentro, para nao dar erro.
    )
}
export default App;