import Header from './Components/Header/Header';
import MainPage from './Pages/MainPage';
import './App.scss'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <main className='page'>
      <Header />
      <MainPage />
      <Footer />
    </main>
  );
}

export default App;
