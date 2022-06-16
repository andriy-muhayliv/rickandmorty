import "./App.css";
import { Container } from "@mui/system";

import { Link, Outlet, Route, Routes } from "react-router-dom";
import Person from "./components/person/Person";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/:slug" element={<Person />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
