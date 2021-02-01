import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Plans from "../pages/Plans";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/plans" component={Plans} />
    </Switch>
  );
};

export default Routes;
