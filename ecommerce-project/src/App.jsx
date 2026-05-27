import { Routes, Route} from 'react-router'
import './App.css';
import HomePage from './pages/HomePage.jsx';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<div>test</div>}/>
    </Routes>
  )
}

export default App
