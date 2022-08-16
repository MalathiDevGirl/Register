import RegisterPage from './page/Register-Signin-Page/RegisterPage';
import SigninPage from './page/Register-Signin-Page/SigninPage';
import appStyles from './app.module.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Welcome from './page/Welcome';
function App() {
  return (
    <div className={appStyles.contents}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SigninPage/>}></Route>
        <Route exact path='/register' element={<RegisterPage/>}></Route>
        <Route exact path='/home' element={<Welcome/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
