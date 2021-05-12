import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/menu/Navbar";
import Home from "./components/Pages/Home/Home";
import SignUp from "./components/menu/SignUp";
import Footer from "./components/Footer/Footer";
import Mentor from "./components/Pages/Learning/Mentor";
import TuitionProvider from "./components/Pages/Learning/TuitionProvider";
import AuthorizedPartnership from "./components/Pages/Learning/AuthorizedPartnership";
import OurLearningModel from "./components/Pages/Learning/OurLearningModel";
import CareerDevWorkExperiences from "./components/Pages/About/CareerDevWorkExperiences";
import CenturySkills21 from "./components/Pages/About/CenturySkills21";
import BecomeStudent from "./components/Pages/BecomeStudent";
import ExamsCertification from "./components/Pages/ExamsCertification";
import DiplomaInEnglish from "./components/Pages/DiplomaInEnglish";
import Login from "./components/menu/Login";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Pages/Cart/Cart";
import { UserProvider } from "./Context/UserContext";
import Payment from "./components/Pages/Payment/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPass from "./components/Pages/Authentication/ForgotPass/ForgotPass";
import ResetPass from "./components/Pages/Authentication/ResetPass/ResetPass";
import SideBar from "./components/SideBar/SideBar";
import UserDashBoard from "./components/User/UserDashBoard/UserDashBoard";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/mentor" exact component={Mentor} />
            <Route path="/tuition-provider" exact component={TuitionProvider} />
            <Route
              path="/authorized-partner"
              exact
              component={AuthorizedPartnership}
            />
            <Route
              path="/our-learning-model"
              exact
              component={OurLearningModel}
            />
            <Route path="/skills" exact component={CenturySkills21} />
            <Route
              path="/career-dev"
              exact
              component={CareerDevWorkExperiences}
            />
            <Route path="/become-student" exact component={BecomeStudent} />
            <Route
              path="/exams&Certifications"
              exact
              component={ExamsCertification}
            />
            <Route
              path="/diploma-in-english"
              exact
              component={DiplomaInEnglish}
            />
            <Route path="/cart" exact component={Cart} />
            <Route path="/forgot-password" exact component={ForgotPass} />
            <Route path="/reset-password/:token" exact component={ResetPass} />

            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/userDashboard">
              <UserDashBoard></UserDashBoard>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
