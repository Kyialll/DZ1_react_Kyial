import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";
import Text from "./components/Text";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Text/>
      <Button/>
        <Info title={'Thank you'}/>
        <Info title={'for your attention.'}/>
        <Info title={'Goodbye!'}/>
        <Footer/>


    </div>
  );
}

export default App;
