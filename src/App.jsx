import { Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Recipes from './components/pages/Recipes'
import Orders from './components/pages/Orders'
import Error from './components/pages/Error'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import OrderDetails from './components/pages/OrderDetails'
import {ThemeProvider} from './contexts/themeContext'

function App() {

  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/recipes' element={<Recipes />}/>
        <Route exact path='/orders' element={<Orders />}/>
        <Route exact path='/order-details/:orderId' element={<OrderDetails />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
