import React from 'react'
import { useState,useEffect } from 'react'
import {supabase} from "../supaBaseclient.js"
import {Link, useNavigate} from "react-router-dom"
import mercadolibre from "../assets/mercado-libre-logo-fondo.jpg"
import useLoginCheck from '../components/Logincheck.jsx'
function Addproduct() {

  const [categoria, setCategoria] = useState([])
   const [producto, setProducto] = useState({
      nombre: "",
      precio: "",
      stock: 0,
      envio: "",
      descuento: 0,
      categoria: ""

    })
const {user, loading}= useLoginCheck()
    const [file, setFile]= useState(null)

    const handleOptions = async () =>{
      const {data, error} = await supabase
      .from("categorias")
      .select("*")
      if (error) {
        console.log(error)
      }else{
        setCategoria(data)
      }
    }

    useEffect(() =>{
      handleOptions()
    })
  
    const handleChange = (e) =>{
      setProducto({
        ...producto,
        [e.target.name]: e.target.value
        
    })
    }
     const navigate= useNavigate()
  const redireccion= () => {
    
    navigate('/', {replace:true})
   }

    const handleSubmit=  async (e) =>{
      e.preventDefault()
      if (!file) return;
console.log(file)
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    let { error: uploadError } =  await supabase.storage
      .from('imagenes')
      .upload(filePath, file);

      const {data: urlData} = supabase.storage
      .from("imagenes").getPublicUrl(fileName)
      const publicUrl= urlData.publicUrl
    if (uploadError) throw uploadError;
    if (loading != true) {
     const {data,error}= await supabase
            .from("productos")
            .insert([
                {
                     nombre: producto.nombre.toLowerCase(),
      precio: producto.precio,
      stock: producto.stock,
      envio: producto.envio,
      descuento: producto.descuento,
      categoria: producto.categoria,
      imagenes: publicUrl,
      usuario_nombre: user.user_metadata.name,
      usuario_foto: user.user_metadata.picture
                }
            ])
    
redireccion() 
    }
    
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
      <div className=' grid-cols-1 lg:grid-cols-3 p-5 grid h-screen gap-5'>
      <input onChange={handleChange} placeholder='nombre' className='p-2 bg-white place-self-center border-b-2' type="text" name='nombre' />
      <input min={1} onChange={handleChange}  placeholder='precio' className='p-2 bg-white place-self-center border-b-2' type="number" name='precio' />

      <input min={1} placeholder='stock del producto:' onChange={handleChange} className='p-2 bg-white place-self-center border-b-2' type="number" name='stock' />
      <select value={producto.envio} name="envio" onChange={handleChange} className='bg-white place-self-center border-b-2 py-2'>
        <option value="" selected disabled>El tipo de envio de tu producto</option>
        <option value="internacional">internacional</option>
        <option value="gratis">gratis</option>
      </select>
      
      <input min={0} placeholder='descuento:' onChange={handleChange} className='p-2 bg-white place-self-center border-b-2' type="number" name='descuento' />
      <select className='bg-white place-self-center border-b-2 py-2' onChange={handleChange} value={producto.categoria} name="categoria" id="">
        <option value="" selected disabled>Ponga la categoria del producto</option>
        {categoria.map((categoriasola) => (
          <option key={categoriasola.id} value={categoriasola.nombre}>{categoriasola.nombre}</option>
        ))}
      </select>
       
      </div> <input className='place-self-center border-2 bg-white' accept='image/*'  onChange={e => setFile(e.target.files[0])} type="file" name="imagenes" id="" />
      <button className='place-self-center border-2 bg-white cursor-pointer px-2 py-5 ' type='submit'>Agregar producto</button>
    </form>
    </>
  )
}

export default Addproduct