import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import "./Routes.css";

import PlantList from "../PlantList/PlantList";
import Header from "../Header/Header";
import Test from "../Test/Test";
import PageNotFound from "../PageNotFound/PageNotFound";
import ApiOpenFoodFact from "../ApiOpenFoodFact/ApiOpenFoodFact";
export const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <div className="home_content">
      <Router history={history}>
        <Header />

        <Switch>
          <Route path="/" component={PlantList} exact={true} />
          <Route path="/test" component={Test} exact={true} />
          <Route
            path="/api-openfoodfact/:id"
            component={ApiOpenFoodFact}
            exact={true}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
