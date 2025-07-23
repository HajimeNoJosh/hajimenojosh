import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';

export default function Main() {

  return (
    <div className={`app-container}`}>
      <Navbar />
      <main>
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
}