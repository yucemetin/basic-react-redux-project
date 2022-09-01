import Navi from "../navi/Navi.js"
import Dashboard from "./Dashboard"
import { Container } from "reactstrap"
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail.js";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/cart" exact element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
