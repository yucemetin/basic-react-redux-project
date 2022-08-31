import Navi from "../navi/Navi.js"
import Dashboard from "./Dashboard"
import {Container} from "reactstrap"

function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Dashboard/>
      </Container>
      
    </div>
  );
}

export default App;
