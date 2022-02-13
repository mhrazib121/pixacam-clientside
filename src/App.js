import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Error from './Pages/Error/Error';
import About from './Pages/About/About';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Products from './Pages/Products/Products';
import MyOrder from './Pages/Dashboard/UserDashboard/MyOrder/MyOrder';
import ManageOrder from './Pages/Dashboard/AdminDashboard/ManageOrder/ManageOrder';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddNewProduct from './Pages/Dashboard/AdminDashboard/AddProduct/AddNewProduct';
import ReviewProvide from './Pages/Dashboard/UserDashboard/ReviewProvide/ReviewProvide';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='placeorder/:id' element={<RequireAuth><PlaceOrder /></RequireAuth>} />
            <Route path='about' element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} >
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
              <Route path='/dashboard/dashboard/myorder' element={<MyOrder />} />
              <Route path='/dashboard/dashboard/reviewprovide' element={<ReviewProvide/>} />
              <Route path='/dashboard/dashboard/manageorder' element={<ManageOrder />} />
              <Route path='/dashboard/dashboard/addnewproduct' element={<AddNewProduct />} />
            </Route>

            <Route path='products' element={<Products />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
