import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from '../pages/dashboard'
import Evidence from '../pages/evidence'
import Incidents from '../pages/incidents'
import Profile from '../pages/profile'
import Reports from '../pages/reports'
import Staff from '../pages/staff'
import Services from '../pages/services'
import Login from '../pages/login'
import PageNotFound from "../pages/404";
import Bookings from "../pages/bookings";
import Reviews from "../pages/Reviews";
function Routes() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/services">
            <Reports />
          </Route>
          <Route exact path="/evidence">
            <Evidence />
          </Route>
          <Route exact path="/incidents">
            <Incidents />
          </Route>
          <Route exact path="/myservices">
            <Services />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/bookings">
            <Bookings />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route exact path="/staff">
            <Staff />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route  >
            <PageNotFound />
          </Route>

        </Switch>

      </Router>


    </>
  );
}

export default Routes;
