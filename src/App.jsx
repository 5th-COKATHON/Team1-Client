import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Root from "./pages/Root";
import "./index.css";
import Home from "./pages/Home";
import CreateReport from "./pages/CreateReport";
import SignUp from "./pages/SignUp";
import ViewReport from "./pages/ViewReport";
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
          <Route path="signup" element={<SignUp />} />
          <Route path="viewreport" element={<ViewReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
