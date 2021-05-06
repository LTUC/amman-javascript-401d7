import './app.scss';
import Header from './components/header'; // this will only import index.js file
import Main from './components/main';
import Footer from './components/footer';
function App() {
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
