import React from 'react'
import mercadolibre from "../assets/mercado-libre-logo-fondo.jpg"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function PQRpage() {
  window.scrollTo({top:0, behavior: 'smooth'})
  let [pagina, setPagina] = useState("")
  let [categoriavariable, setCategoriavariable] = useState("")
  let location = useLocation()
  let categoria= location.state
  
  let handlePage = (seccion) =>{
setPagina(seccion)
  }
  useEffect(() => {
   if (categoriavariable != null ) {
    
    handlePage(categoriavariable)
  } 
  }, [categoriavariable])
  useEffect(() =>{
if (categoria != null) {
  setCategoriavariable(categoria)
  handlePage(categoria)
}
  }, [])
   
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
        <article onClick={() => setCategoriavariable("Ventas")} className='flex hover:bg-gray-200 transition-all duration-100 w-full py-5 cursor-pointer'>
          <h2 className='ml-5' >Ventas</h2>

        </article></div><div className='flex flex-col'><hr className='lg:w-full' />
        <article onClick={() => setCategoriavariable("Compras")} className='flex hover:bg-gray-200 transition-all duration-100 w-full py-5 cursor-pointer'>
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
      <div className='py-20 text-3xl  w-full text-center bg-gray-100 place-content-center'>
        <h2>¿Como funcionan nuestras ventas?</h2></div>
      <section className='bg-white place-self-center lg:max-w-1/2  p-20 gap-5 flex flex-col'>
       <svg onClick={() => setCategoriavariable("")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
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
      <div className='py-20 text-3xl  w-full text-center bg-gray-100 place-content-center'>
        <h2>¿Como funcionan nuestras compras?</h2></div>
      <section className='bg-white place-self-center  lg:max-w-1/2 p-20 gap-5 flex flex-col'>
       <svg onClick={() =>setCategoriavariable("")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
        <h2>Compras</h2>
        <p>Las compras se realizan en el carrito de compras, para agregar productos al carrito solo tienes que estar logeado y darle al boton de Agregar al carrito en el producto que te interese.</p>

        <p>Si el producto que estabas comprando tuvo alguna actualizacion, se tendra que volver a agregar para garantizar los terminos en ambas partes.</p>
      </section><Footer></Footer>
    </main> 
  ) 
  }
 
}

export default PQRpage