import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Empati from './Components/Empati'
import Empati2 from './Components/Empati2'
import Empati3 from './Components/Empati3'
import Empati4 from './Components/Empati4'
import Kutu from './Components/Kutu'
import Kutu2 from './Components/Kutu2'
import Kutu3 from './Components/Kutu3'
import Kutu4 from './Components/Kutu4'
import Animasyon1 from './Components/Animasyon1';
import Animasyon2 from './Components/Animasyon2';
import Animasyon3 from './Components/Animasyon3';
import Animasyon4 from './Components/Animasyon4';
import Duygu1 from './Components/Duygu1';
import Duygu2 from './Components/Duygu2';
import Duygu3 from './Components/Duygu3';
import Duygu4 from './Components/Duygu4';
import Tanıma from './Components/Tanıma';
import Tanıma2 from './Components/Tanıma2';
import Tanıma3 from './Components/Tanıma3';
import Tanıma4 from './Components/Tanıma4';
import Mutluluk from './Components/Mutluluk';
import Kızgın from './Components/Kızgın';
import Uzgun from './Components/Uzgun';
import Korku from './Components/Korku';


const App = () => {
  return (
    <>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/Empati" component={Empati} />
			<Route exact path="/Empati2" component={Empati2} />
			<Route exact path="/Empati3" component={Empati3} />
			<Route exact path="/Empati4" component={Empati4} />
			<Route exact path="/Kutu" component={Kutu} />
			<Route exact path="/Kutu2" component={Kutu2} />
			<Route exact path="/Kutu3" component={Kutu3} />
			<Route exact path="/Kutu4" component={Kutu4} />
			<Route exact path="/Animasyon1" component={Animasyon1} />
			<Route exact path="/Animasyon2" component={Animasyon2} />
			<Route exact path="/Animasyon3" component={Animasyon3} />
			<Route exact path="/Animasyon4" component={Animasyon4} />
			<Route exact path="/Duygu1" component={Duygu1} />
			<Route exact path="/Duygu2" component={Duygu2} />
			<Route exact path="/Duygu3" component={Duygu3} />
			<Route exact path="/Duygu4" component={Duygu4} />
			<Route exact path="/Tanıma" component={Tanıma} />
			<Route exact path="/Tanıma2" component={Tanıma2} />
			<Route exact path="/Tanıma3" component={Tanıma3} />
			<Route exact path="/Tanıma4" component={Tanıma4} />
			<Route exact path="/Mutluluk" component={Mutluluk} />
			<Route exact path="/Kızgın" component={Kızgın} />
			<Route exact path="/Uzgun" component={Uzgun} />
			<Route exact path="/Korku" component={Korku} />
			<Redirect to="/" />
		</Switch>
    </>
  )
}

export default App
