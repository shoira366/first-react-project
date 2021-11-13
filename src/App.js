import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Info from './Components/Infosec/Info';
import Sevice from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import Logo from './Assets/Images/logo.svg'
import house from './Assets/Images/house.svg'
import email from './Assets/Images/mail.svg'
import shuffle from './Assets/Images/shuffle.svg'



import './App.css';

function App() {
  return (
    <>
      <Header logo={Logo} house={house} email={email} shuffle={shuffle}/>
      <Intro/>
      <Info/>
      <Sevice/>
      <Footer logo={Logo}/>
    </>
  );
}

export default App;
