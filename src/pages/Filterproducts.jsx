import React from 'react'
import Header from '../components/Header'
import { useLocation, Link } from 'react-router-dom'
import { supabase } from '../supaBaseclient'
import { useState, useEffect } from 'react'
function Filterproducts() {
    const location= useLocation()
 const categoria= location.state
 let [productos, setProductos] = useState([])
     useEffect(() =>{
      setProductos([])
         handleProducts()
     }, [categoria])
 
     const handleProducts =  async () => {
       const {data, error} = await supabase
             .from("productos")
             .select("*").like('categoria',`%${categoria}%`)
             if (error) {
               console.log(error)
             }else{
             setProductos(data)
             }
           
     }
  return (
    
    <><Header></Header>
    <h2 className='text-3xl bg-blue-900 p-5 text-center text-white capitalize'>{categoria}</h2>
    <section  className=' grid grid-cols-1 lg:grid-cols-4  gap-5 place-self-center h-full p-5'>

   {
   
   productos.map(producto => (<Link key={producto.id} state={{producto}} to="/Productsingle">
      <article  className='  h-full px-10 bg-white  gap-2 py-10 flex flex-col lg:gap-5'>
         <div className='w-[80vw]  lg:w-[20vw] object-cover h-[30vh] place-items-center  ' > 
          <img className='w-[60%] h-full' src={producto.imagenes} alt={producto.imagenes} /></div>
        <p className='line-clamp-2 text-3xl place-self-start capitalize'>{producto.nombre}</p>
        <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
        <h4 className=' lg:text-3xl place-self-start'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
        <h2 className='lg:text-2xl text-green-500 place-self-start'>{producto.envio == "internacional" ? <span className='flex gap-2 text-red-800'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-50 place-self-center" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
</svg>internacional</span> : "Envio Gratis"}</h2>
      </article></Link>
    ))}</section>
    </>
  )
}

export default Filterproducts