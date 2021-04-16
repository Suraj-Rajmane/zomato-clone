import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Localities from './components/Localities/Localities';
import GetZomatoApp from './components/GetZomatoApp/GetZomatoApp';


let locations = ["Baner", "Viman Nagar", "Hinjawadi", "Koregaon Park",
"Wakad", "Kothrud", "Kalyani Nagar", "Kharadi", "Mundhawa", "Pimpale Saudagar", "Aundh", "FC Road", "Hadapsar",
"Senapati Bapat Road", "Magarpatta"];


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <Localities locations={locations}/>
      <GetZomatoApp/>
    </div>
  );
}

export default App;
