
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import City  from './components/City'
import Home from './pages/Home'
import Cities from './components/Cities'
import CityDetails from './components/CityDetails'
import SignUp from './components/signUp'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import SignIn from './components/signIn'





function App() {
  
  return (
    <Provider store={store}>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/Cities' element={<Cities />} />
            <Route path='/city/:id' element={<CityDetails />}/>
            <Route path='/SignUp' element={ <SignUp />}/>
            <Route path='/SignIn' element={ <SignIn /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
     
  
  )
  
}


export default App
