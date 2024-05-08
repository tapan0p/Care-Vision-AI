import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import HeroSection from './components/heroSection.jsx'
import Footer from './components/footer.jsx'
import DiagnosisForm from './components/diagnosisForm.jsx'
import Devloper from './components/devloper.jsx'


function App() {
  return (
    <div className='bg-sky-200'>
      <Header></Header>
      <HeroSection></HeroSection>
      <DiagnosisForm></DiagnosisForm>
      <Devloper></Devloper>
      <Footer></Footer>
    </div>
  )
}

export default App
