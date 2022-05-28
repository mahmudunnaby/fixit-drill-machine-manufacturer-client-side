import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Products from './components/Products/Products';
import BusinessSummery from './components/BusinessSummery/BusinessSummery';
import Footer from './components/Shared/Footer/Footer';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPassword from './components/Login/ResetPassword/ResetPassword';
import Purchase from './components/Purchase/Purchase';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App ">


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/businesssummery' element={<BusinessSummery></BusinessSummery>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/products/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
