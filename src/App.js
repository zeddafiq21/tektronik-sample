
import './App.css';

import { NavBar } from './components/NavBar';
import { TentangKami } from './components/TentangKami';
import { Banner } from './components/Banner';
import { Members } from './components/Members';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <div className="App">
    <NavBar />
    <Banner/>
    <TentangKami/>
    <Projects/>
    <Members/>
    <Contact/>
    <Footer/>
    
    </div>
  );
}

export default App;
