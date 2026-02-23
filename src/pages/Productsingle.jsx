import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Products from '../components/Products'
import { useEffect, useState } from 'react'
import { supabase } from '../supaBaseclient'
import useLoginCheck from '../components/Logincheck'
function Productsingle() {
   window.scrollTo({top:0, behavior: 'smooth'})
  const [productoscart,setProductoscart]= useState([])
  const location= useLocation()
  const {producto} = location.state
  producto.idcompra= (Math.random() * 500 - Math.random() * 500)
let {user, loading}= useLoginCheck()

  const navigate= useNavigate()
  const redireccion= () => {
    
    navigate('/CartShopping', {replace:true})
   }
  const handleSubmitproduct=  async () =>{
if (user != null) {
  let productos= [...productoscart, producto]
      await supabase.from("usuarios").update({
        Cartshopping: JSON.stringify(productos)
      }).eq("id_usuario", user.id)
      redireccion()
}
      


    }
  
  

  const handleCharge = async () =>{
    if (user !=null) {
      const {data, error} = await supabase.from("usuarios").select("*").eq("id_usuario", user.id).single()
    setProductoscart(JSON.parse(data.Cartshopping))
    if (error) {
      console.log(error)
    }
if (data.categoriasfavoritas.includes(producto.categoria) != true) {
  if (JSON.parse(data.categoriasfavoritas).length < 4) {
    let categorianueva= [...JSON.parse(data.categoriasfavoritas),producto.categoria]
   console.log(categorianueva)
    await supabase.from("usuarios").update({
        categoriasfavoritas: JSON.stringify(categorianueva)
      }).eq("id_usuario", user.id)
  }else{
    let categoriasfiltradas=  JSON.parse(data.categoriasfavoritas)
     categoriasfiltradas.shift()
      let categorianueva= [...categoriasfiltradas,producto.categoria]
    await supabase.from("usuarios").update({
        categoriasfavoritas: JSON.stringify(categorianueva)
      }).eq("id_usuario", user.id)
  }
    }
    
 
  }
}
   const handleredirect = () =>{
navigate('/Signin', {replace:true})
   }

  useEffect( () =>{
    if (loading != true) {
       handleCharge()
    }
   
  }, [loading] )
  return (
    <>
    <Header></Header>
    <main >
      <div className='flex lg:hidden flex-col gap-5 bg-gray-50'>
        
      <h2 className='text-2xl capitalize'> {producto.nombre}</h2>
      <img src={producto.imagenes} alt="" />
      <p className=' line-through text-gray-500 text-2xl'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
        <h4 className=' lg:text-3xl place-self-start text-3xl'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
       
      <p className='text-2xl'>{producto.stock} unidades disponibles</p>
      <button onClick={user != null ? handleSubmitproduct : handleredirect}  className='bg-blue-500 px-5 py-5 text-white rounded-2xl cursor-pointer'>Agregar al carrito</button>
      <div className='flex flex-col'>
        <h2>Producto subido por:</h2>
        <div className='flex gap-5 place-items-center'><img className='w-20 rounded-4xl' src={producto.usuario_foto} referrerPolicy='no policy' alt="" />
      <h2>{producto.usuario_nombre}</h2></div>
      </div>
    
      <Products norepetir={producto.id} titulo='Productos relacionados' categoria={producto.categoria}></Products></div> 
      <div className='hidden lg:flex flex-col gap-5 p-5 bg-gray-50 place-items-center '>
        <Link state={producto.categoria} to="/Filterproducts"><h2 className='text-2xl text-start text-blue-600'>{producto.categoria}</h2></Link> 
        <div className='flex gap-5 p-20'>  
         
          <img className='w-[50%]' src={producto.imagenes} alt="" />
        <div className='flex flex-col gap-5 p-20'>
          <h2 className='text-2xl capitalize'> {producto.nombre}</h2>
       <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
        <h4 className=' lg:text-3xl place-self-start'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
       
      <p className='text-2xl'>{producto.stock} unidades disponibles</p>
      <h2 className='text-2xl text-green-500 place-self-start'>{producto.envio == "internacional" ? <span className='flex gap-2 text-red-800'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-50 place-self-center" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
</svg>internacional</span> : "Envio Gratis"}</h2>
      <button onClick={user != null ? handleSubmitproduct : handleredirect} className='bg-blue-500 px-5 py-5 text-white rounded-2xl cursor-pointer'>Agregar al carrito</button>
      <div className='flex flex-col'>
        <h2>Producto subido por:</h2>
        <div className='flex gap-5 place-items-center'><img className='w-20 rounded-4xl' src={producto.usuario_foto} referrerPolicy='no policy' alt="" />
      <h2>{producto.usuario_nombre}</h2></div>
      </div>
        </div>
        
      </div>
      <div  className=' '>
      <Products norepetir={producto.id} titulo='Productos relacionados' categoria={producto.categoria}></Products></div>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Productsingle