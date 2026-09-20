
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import type { Technology } from './Components/Types/technology'
import Technologies from './Components/Technologies/Technologies'
import { Bounce, ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'

const TechnologyFetch = async (): Promise<Technology[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {

  const [technologiesPromise] = useState<Promise<Technology[]>>(TechnologyFetch())

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer></Footer>   
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
