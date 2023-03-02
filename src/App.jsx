import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProduct from './Components/CreateProduct'
import Error from './Components/Error'
import ListProducts from './Components/ListProducts'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListProducts />}/>
          <Route path='/addproduct' element={<CreateProduct />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
