import Navi from "../navi/Navi.js"
import Dashboard from "./Dashboard"
import { Container } from "reactstrap"
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail.js";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct.js";
import NotFound from "../common/NotFound.js";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/products" exact component={Dashboard} />
        <Route path="/cart" exact component={CartDetail} />
        <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct} />
        <Route path="/saveproduct/" exact component={AddOrUpdateProduct} />
        <Route exact component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
