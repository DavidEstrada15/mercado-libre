import React from 'react'
import Auth from '../components/Auth.jsx'
import { Link } from 'react-router-dom'
import mercadolibre from "../assets/mercado-libre-logo-fondo.jpg"
function SignIn() {
  return (
    <>
    <main className='h-screen flex flex-col place-content-center'>
      <article className='h-[40%] bg-yellow-300'>

      </article>
      <Link to={'/'}>
      <div className='flex  absolute top-0 lg:bg-yellow-300 bg-yellow-200 w-screen'>
        <img className='rounded-3xl  w-15' src={mercadolibre} alt="" />
        <h2 className='lg:flex hidden text-blue-900 font-bold text-2xl'>mercado  <br /> libre</h2>
      </div></Link>
      <article className='h-[60%]  bg-white'></article>
      <h2 className='absolute top-20 text-center lg:top-15 text-2xl lg:text-3xl place-self-center'>Ingresa desde Google y compra con envios gratis</h2>
      <form onSubmit={e => e.preventDefault()} className='bg-white  py-35 lg:py-50 px-5 bottom-15 lg:bottom-5  border-[0.5px] rounded-2xl absolute place-self-center' action="">
<Auth></Auth>
      </form>
    </main>
    
    </>
  )
}

export default SignIn