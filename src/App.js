import Checkout from './screens/Checkout';
import Order from './screens/Order'
import GlobalStyle from './styles/GlobalStyle'
import Typography from './styles/Typography'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle/>
      <Typography/>
      <Router>
        <Switch>
          <Route exact path="/" component={Order} >
          </Route>
          <Route path="/checkout" component={Checkout}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;