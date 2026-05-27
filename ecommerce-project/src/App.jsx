import { Routes, Route} from 'react-router'
import './App.css';
import HomePage from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { PageNotFound } from './pages/404Page.jsx';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element= {<TrackingPage/>}/>
      <Route path='*' element= {<PageNotFound/>}/>
    </Routes>
  )
}

export default App
