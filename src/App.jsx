import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Root from './pages/Root';
import './index.css'
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
        <Route path="/" element={<Root />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
