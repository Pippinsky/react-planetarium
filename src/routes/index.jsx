import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ItemList from "../components/ItemList";

const ROUTES = [
  {
    path: "/",
    component: ItemList,
  },
];

const ApplicationRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
