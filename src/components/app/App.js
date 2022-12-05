import Header from "../header/Header";
import Home from "../home/Home";
import {Container} from "react-bootstrap";
function App() {
  return (
 <>
     <div className="container-fluid header">
         <Header/>
     </div>
     <Container className="pt-3 home">
         <Home/>
     </Container>
 </>
  );
}

export default App;
