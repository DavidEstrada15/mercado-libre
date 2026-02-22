import React, { useEffect, useState } from 'react'
import { supabase } from '../supaBaseclient'
import { Link } from 'react-router-dom'
function Products({titulo, categoria, norepetir}) {
    let [productos, setProductos] = useState([])
    useEffect(() =>{
        handleProducts()
    })
    const handleProducts =  async () => {
      const {data, error} = await supabase
            .from("productos")
            .select("*")
            .eq("categoria", categoria).limit(5)
            if (error) {
              console.log(error)
            }else{
            setProductos(data)
            }
          
    }
     if (norepetir != undefined) { 
      let productosfiltrados= productos.filter(producto => producto.id != norepetir)
       return (
    <section className=' flex flex-col gap-5 max-w-7xl overflow-x-scroll mx-auto lg:px-0 lg:py-0 px-12 py-20 bg-white w-[90%] '>
      <h2 className='text-2xl'>{titulo}</h2><div className='flex flex-col  lg:flex-row lg:gap-10 '>
        
      {
      
      productosfiltrados.map(producto => (
     
    producto.stock > 0 ?
        <Link key={producto.id} state={{producto}} to="/Productsingle">
      <article key={producto.id} className='  lg:flex px-10 lg:px-0 lg:py-0  py-10 flex flex-col gap-10 place-items-center'>
        <div className='w-[50vw]  lg:w-[20vw] object-cover lg:h-[30vh] place-items-center ' > 
          <img className='w-[60%] h-full' src={producto.imagenes} alt={producto.imagenes} /></div>
       
        <div className=' flex flex-col lg:gap-2 gap-5 max-w-48 text-center'>
        <p className='line-clamp-2 text-2xl lg:text-3xl place-self-start capitalize'>{producto.nombre}</p>
        <p className=' line-through text-gray-500 '> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
        <h4 className=' lg:text-3xl place-self-start'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
        <h2 className='lg:text-2xl text-green-500 place-self-start'>{producto.envio == "internacional" ? <span className='flex gap-2 text-red-800'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-50 place-self-center" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
</svg>internacional</span> : "Envio Gratis"}</h2></div>
      </article></Link>: ""
      
))}</div></section>
  )
    }else{
       return (

  
      
   
    <section className=' flex flex-col lg:gap-2 gap-5 max-w-7xl overflow-x-scroll mx-auto lg:px-5 lg:py-10 px-12 py-20 bg-white w-[90%] '>
      <h2 className='text-2xl sticky left-0'>{titulo}</h2><div className='flex flex-col gap-10  lg:flex-row lg:gap-10 w-full text-center '>
        
      {
      productos.map(producto => (producto.stock > 0 ? <Link key={producto.id} state={{producto}} to="/Productsingle">
      <article key={producto.id} className='  lg:flex lg:px-0 lg:py-0 px-10  py-10 flex flex-col gap-10 place-items-center'>
        <div className='w-[80vw]  lg:w-[20vw] object-cover h-[30vh] place-items-center ' > 
          <img className='w-[60%] h-full' src={producto.imagenes} alt={producto.imagenes} /></div>
       
        <div className=' flex flex-col gap-5 max-w-48 text-center'>
        <p className='line-clamp-2 text-2xl lg:text-3xl place-self-start capitalize'>{producto.nombre}</p>
        <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
        <h4 className=' lg:text-3xl place-self-start'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
        <h2 className='lg:text-2xl text-green-500 place-self-start'>{producto.envio == "internacional" ? <span className='flex gap-2 text-red-800'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-50 place-self-center" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
</svg>internacional</span> : "Envio Gratis"}</h2></div>
      </article></Link> : ""
    ))}</div></section>
  )
    }
 
}

export default Products