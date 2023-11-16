import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import {
Route , 
createBrowserRouter , 
createRoutesFromElements,
RouterProvider
} from 'react-router-dom'
import SignUpLayout from './Layouts/SignUpLayout'
import SignUpPlan from './components/sign-up/SignUpPlan'
import SignUpPlanForm from './components/sign-up/SignUpPlanform'
import PaymentPicker from './components/sign-up/PaymentPicker'
import CreditOption from './components/sign-up/CreditOption'
import Error from './pages/Error'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} errorElement={<Error />} />
      <Route path='/login' element={<Login />} />
      <Route path='sign-up' element={<SignUpLayout />}>
        <Route index element={<SignUpPlan />} />
        <Route path='planform' element={<SignUpPlanForm />} />
        <Route path='paymentPicker' element={<PaymentPicker />} />
        <Route path='creditoption' element={<CreditOption />} />
      </Route>
    </>
  
  ))
  return (
    <RouterProvider router={router} />      
  );
}

export default App
