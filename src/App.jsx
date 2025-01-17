import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Root from "./pages/Root";
import "./index.css";
import Home from "./pages/Home";
import CreateReport from "./pages/CreateReport";
import ViewReport from "./pages/ViewReport";
import Login from "./pages/Login";
import AngelConversation from "./pages/AngelConversation";
import DevilConversation from "./pages/DevilConversation";
import Doors from "./pages/Doors";
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Pretendard',sans-serif;
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar{
        width: 0px;
    }
  }
`;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="home" element={<Home />} />
          <Route path="createreport" element={<CreateReport />} />
          <Route path="login" element={<Login />} />
          <Route path="viewreport" element={<ViewReport />} />
          <Route path="doors" element={<Doors />} />
          <Route path="angelconversation" element={<AngelConversation />} />
          <Route path="devilconversation" element={<DevilConversation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
