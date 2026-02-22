import React from 'react'
import { supabase } from '../supaBaseclient'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import mercadolibre from "../assets/mercado-libre-logo-fondo.jpg"
import { useState, useEffect } from 'react'
function Updateproduct() {
    const [productocambio, setProductocambio] = useState({
          precio: "",
          stock: 0,
          descuento: 0
    
        })
    const handleChange = (e) =>{
      setProductocambio({
        ...productocambio,
        [e.target.name]: e.target.value
        
    })
    }
    const redireccion= () => {
    
    navigate('/CartShopping', {replace:true})
   }

    const location= useLocation()

    const producto = location.state
    

    const handleSubmit=  async (e) =>{
          e.preventDefault()
        const {data,error}= await supabase
                .from("productos").update({
                  precio: productocambio.precio,
                  stock: productocambio.stock,
                  descuento: productocambio.descuento
                }).eq("id", producto.id)


                redireccion
        if (error) {
          console.log(error)
        }
        }
  return (
    <>
        <Link to={'/'}>
      <div className='flex  top-0 lg:bg-yellow-300 bg-yellow-200 w-full'>
        <img className='rounded-3xl  w-15' src={mercadolibre} alt="" />
        <h2 className='lg:flex hidden text-blue-900 font-bold text-2xl'>mercado  <br /> libre</h2>
      </div></Link>
    <form onSubmit={handleSubmit} className='  gap-5 py-5 h-screen flex flex-col text-center bg-white place-self-center'>
      <h2>Actualizar {producto.nombre}</h2>
      <div className=' grid-cols-1 lg:grid-cols-3 p-5 grid h-screen gap-5'>
      <input min={1} onChange={handleChange}  placeholder='precio' className='p-2 bg-white place-self-center border-b-2' type="number" name='precio' />

      <input min={1} placeholder='stock del producto:' onChange={handleChange} className='p-2 bg-white place-self-center border-b-2' type="number" name='stock' />
      
      <input min={0} placeholder='descuento:' onChange={handleChange} className='p-2 bg-white place-self-center border-b-2' type="number" name='descuento' />
      
       
      </div> 
      <button className='place-self-center bg-white cursor-pointer px-2 py-5 ' type='submit'>Actualizar producto</button>
    </form>
    </>
  )
}

export default Updateproduct