import Signup from './pages/Signup';
import Signin from './pages/Signin';
import User from './pages/User';
import Admin from './pages/Admin';
import appStyles from './app.module.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className={appStyles.contents}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Signup/>}></Route>
        <Route exact path='/Signin' element={<Signin/>}></Route>
        <Route exact path='/user' element={<User/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
