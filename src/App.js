// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import DevHistory from './pages/DevHistory';
import MissionVision from './pages/MissionVission';
import Map from './pages/Map';
import StudyEnviroment from './pages/StudyEnviroment';

import TSNews from './pages/TSNews';
import Content from './pages/Content';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/gioi-thieu" component={Introduce} />
        <Route exact path="/gioi-thieu/lich-su-phat-trien" component={DevHistory} />
        <Route exact path="/gioi-thieu/su-mang-tam-nhin/" component={MissionVision} />
        <Route exact path="/gioi-thieu/so-do-den-truong/" component={Map} />
        <Route exact path="/gioi-thieu/moi-truong-hoc-tap/" component={StudyEnviroment} />

        <Route exact path="/category/tuyen-sinh/" component={TSNews} />

        <Route exact path="/lich-thi-ket-thuc-hoc-phan-thang-7-2023" component={Content} />
      </BrowserRouter>
    </>
  );
}

export default App;
