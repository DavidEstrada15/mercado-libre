import React, { useEffect, useState } from 'react'
import { supabase } from '../supaBaseclient'
import useLoginCheck from '../components/Logincheck'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
function Yourproducts() {

  useEffect(() =>{
handleproducts()
  })

  useEffect(() =>{
    if (loading != true){
     user 
    }
    
  })

  let {user, loading}= useLoginCheck()

  let [productos, setProductos] = useState([])
  
  const handleproducts= async () =>{
const {data, error}= await supabase.from("productos").select("*").eq("usuario_nombre", user.user_metadata.name)
setProductos(data)

if (error) {
  console.log(error)
}


  }
  const handleErase = async (e) => {
let respuesta = confirm("Deseas eliminar " + e.nombre + "?")
if (respuesta) {
  const {data,error} = await supabase.from("productos").delete().eq("id", e.id)
  setProductos(data)
}
  
}
  return (
    <><Header></Header>
    <div className='p-5'>
    <h1 className='text-3xl text-center'>Tus productos:</h1>
    <section className='grid lg:grid-cols-2 gap-5'>
    {
      productos.map(producto =>(
        <article className='place-items-center max-w-[50vw] flex flex-col gap-5 p-5 bg-white place-self-center'>  <div className='w-[50vw]  lg:w-[20vw] object-cover h-[20vh] lg:h-[30vh] place-items-center ' > 
          <img className='w-[60%] h-full' src={producto.imagenes} alt={producto.imagenes} /></div>
        <h2 className='max-w-50 capitalize line-clamp-1'>{producto.nombre}</h2>
        <div className='flex gap-20 place-items-center'><Link to={'/Updateproduct'} state={producto}><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-200 cursor-pointer" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg></button></Link>
<button onClick={() => handleErase(producto)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-200 cursor-pointer" viewBox="0 0 16 16">
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
</svg></button>
</div>
        
        </article>
       
      ))
    }</section></div>
    </>
  )
}

export default Yourproducts