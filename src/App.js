import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";


function App() {
    const nextHandler = () =>{
      console.log("next")
    }
    const prevHandler = () => {
      console.log("prev")
    }

      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home></Home>} ></Route>
            </Routes>
          </BrowserRouter>
        </>
      );
}

export default App;
