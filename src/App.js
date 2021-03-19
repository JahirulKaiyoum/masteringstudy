import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/menu/Navbar';
import Home from './components/Pages/Home/Home';
import SignUp from './components/menu/SignUp';
import SignIn from './components/menu/SignIn';
import Footer from './components/Footer/Footer';
import Mentor from './components/Pages/Learning/Mentor';
import TuitionProvider from './components/Pages/Learning/TuitionProvider';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/mentor' exact component={Mentor} />
        <Route path='/tuition-provider' exact component={TuitionProvider} />

        
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
