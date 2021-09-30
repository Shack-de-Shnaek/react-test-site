import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import AboutSite from './components/AboutSite';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/abt-me'>
        <AboutMe />
      </Route>
      <Route exact path='/abt-site'>
        <AboutSite />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Switch>
    </Router>
  );
}