import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

export default function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
}
