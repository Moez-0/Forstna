import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import NoPage from './pages/NoPage.jsx'
import Deals from './pages/Deals.jsx';
import SignUp from './pages/Signup.jsx';
import LogIn from './pages/Signin.jsx';
import BusinessDirectory from './pages/BusinessDirectory.jsx';
import AddYourBusiness from './pages/AddYourBusiness.jsx';
import FAQGeneralQuestions from './pages/faq/General';
import FAQAccountProblems from './pages/faq/Account';
import FAQBilling from './pages/faq/Billing.jsx';
import FAQTechnicalSupport from './pages/faq/Technical.jsx';
import AdminLogin from './pages/admin/Login.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';



function App() {


  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="deals" element={<Deals />} />
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<LogIn />} />
          <Route path="business-directory" element={<BusinessDirectory />} />
          <Route path="add-business" element={<AddYourBusiness />} />
          <Route path="faq/general" element={<FAQGeneralQuestions />} />
          <Route path="faq/account" element={<FAQAccountProblems />} />
          <Route path="faq/billing" element={<FAQBilling />} />
          <Route path="faq/technical" element={<FAQTechnicalSupport />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
