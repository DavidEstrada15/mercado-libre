import React from 'react'
import mercadolibre from "../assets/mercado-libre-logo-fondo.jpg"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function PQRpage() {
  let [pagina, setPagina] = useState("")
  let location = useLocation()
  let categoria= location.state
 console.log(categoria)
  
  let handlePage = (seccion) =>{
setPagina(seccion)
  }
  useEffect(() => {
   if (categoria != null ) {
    handlePage(categoria)
  } 
  })
   
  if (pagina == "") {
   return (
   <main className='h-screen flex flex-col gap-5 w-full '>

      <Link to={'/'}>
      <div className='flex  absolute top-0 lg:bg-yellow-300  bg-yellow-200 w-full'>
        <img className='rounded-3xl  w-15' src={mercadolibre} alt="" />
        <h2 className='lg:flex hidden text-blue-900 font-bold text-2xl'>mercado  <br /> libre</h2>
      </div></Link>
      <div className='py-20 text-3xl w-full text-center bg-gray-100 place-content-center'><h2>¿Con que té ayudamos?</h2></div>
      <section className='bg-white place-self-center  lg:w-2/4   flex flex-col'>
        <h2 className='text-2xl font-bold py-5 ml-5'>Explora las preguntas frecuentes</h2>
        <div className='flex flex-col'>
        <hr className='lg:w-full' />
        <article onClick={() => handlePage("Ventas")} className='flex hover:bg-gray-200 transition-all duration-100 w-full py-5 cursor-pointer'>
          <h2 className='ml-5' >Ventas</h2>

        </article></div><div className='flex flex-col'><hr className='lg:w-full' />
        <article onClick={() => handlePage("Compras")} className='flex hover:bg-gray-200 transition-all duration-100 w-full py-5 cursor-pointer'>
          <h2 className='ml-5' >Compras</h2>
        </article></div>
      </section><Footer></Footer>
    </main>
  ) 
  }

  if (pagina == "Ventas") {
      return (
   <main className='h-screen flex flex-col gap-5  w-full '>

      <Link to={'/'}>
      <div className='flex  absolute top-0 lg:bg-yellow-300  bg-yellow-200  w-full'>
        <img className='rounded-3xl  w-15' src={mercadolibre} alt="" />
        <h2 className='lg:flex hidden text-blue-900 font-bold text-2xl'>mercado  <br /> libre</h2>
      </div></Link>
      <div className='py-20 text-3xl  w-full text-center bg-gray-100 place-content-center'><h2>¿Como funcionan nuestras ventas?</h2></div>
      <section className='bg-white place-self-center lg:max-w-1/2  p-20 gap-5 flex flex-col'>
        <h2>Ventas</h2>
        <p>Al tener una cuenta de mercado libre, puedes publicar tus productos libremente rellenando un formulario donde ingresaras los datos de tu producto.</p>

        <p>Ademas de eso, en caso de que llegue mas stock o quieras poner una promocion temporal o permanente, puedes actualizar tus productos en la seccion de tus productos debajo de tu perfil.</p>
      </section><Footer></Footer>
    </main>
  ) 
  }

  if (pagina == "Compras") {
      return (
   <main className='h-screen flex flex-col gap-5  w-full '>

      <Link to={'/'}>
      <div className='flex  absolute top-0 lg:bg-yellow-300  bg-yellow-200   w-full'>
        <img className='rounded-3xl  w-15' src={mercadolibre} alt="" />
        <h2 className='lg:flex hidden text-blue-900 font-bold text-2xl'>mercado  <br /> libre</h2>
      </div></Link>
      <div className='py-20 text-3xl  w-full text-center bg-gray-100 place-content-center'><h2>¿Como funcionan nuestras compras?</h2></div>
      <section className='bg-white place-self-center  lg:max-w-1/2 p-20 gap-5 flex flex-col'>
        <h2>Compras</h2>
        <p>Las compras se realizan en el carrito de compras, para agregar productos al carrito solo tienes que estar logeado y darle al boton de Agregar al carrito en el producto que te interese.</p>

        <p>Si el producto que estabas comprando tuvo alguna actualizacion, se tendra que volver a agregar para garantizar los terminos en ambas partes.</p>
      </section><Footer></Footer>
    </main> 
  ) 
  }
 
}

export default PQRpage