import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mercadolibrelogofondo from "../assets/mercado-libre-logo-fondo.jpg"
import userplaceholder from "../assets/user-placeholder.png"
import useLoginCheck from './Logincheck.jsx'
import { supabase } from '../supaBaseclient.js'
import Logout from './Logout.jsx'
function Header() {


  let [open, setOpen] = useState(false)
  const handleChange = () => {
     open == true ? setOpen(false) : setOpen(true)

  }

  let [openuser, setOpenuser] = useState(true)

  let handleChangeuser = () => {
    openuser == true ? setOpenuser(false) : setOpenuser(true)
  }

   let [productos, setProductos] = useState([])
       useEffect(() =>{
           handleProducts()
       })
   
       const handleProducts =  async () => {
         const {data, error} = await supabase
               .from("categorias")
               .select("*")
               if (error) {
                 console.log(error)
               }else{
               setProductos(data)
               }
             
       }

  let [searchvalue, setSearchvalue] = useState("")

  const handleSearch = (e) =>{
    e.preventDefault()
    if (searchvalue != "") {
      redireccion()
    }
  }
const navigate= useNavigate()
    const redireccion= () => {
      
      navigate('/Searchpage', {state: searchvalue.toLowerCase()})
     }
  const handleUpdatevalue = (e) =>{
    setSearchvalue(e.target.value)
  }
  const {user,loading}= useLoginCheck()
  let imagen= user?.user_metadata?.picture
  if (open && screen.width < 1024){
return (<>
<header className='flex bg-yellow-300  justify-around place-items-center gap-3'>
  <Link to='/'>
      <img className='rounded-3xl w-15' src={mercadolibrelogofondo} alt="" /></Link>
      <form onSubmit={handleSearch} className='flex'>
      <input onChange={handleUpdatevalue} className={screen.width > 768 ? 'bg-white py-2 w-[45vw] text-start shadow-2xs shadow-black ': "bg-white py-2 w-[50vw] text-center rounded-[10%]"} type="text" placeholder={screen.width > 768 ? 'Buscar productos, marcas y mas...': "Estoy buscando..."} />
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="absolute lg:right-[23%] place-self-center" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></form>
      <div className='flex gap-6'>
        
        <button onClick={handleChange} className=' lg:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='place-self-center scale-200' fill="currentColor" viewBox="0 0 16 16">
  <path  d={open == true ? "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z": 
    "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
  }/>
</svg></button><Link to='/CartShopping'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" place-self-center scale-200" viewBox="0 0 16 16">
  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></Link></div>
<div>
<div>
  
</div>
</div>
    </header> 
<section className='bg-white absolute z-10 w-full'>
      <div className='flex-col flex bg-yellow-300 p-5 gap-5'>
        <div className='flex gap-5'>
    <img className='w-[22%] rounded-3xl' src={user != null ? imagen : userplaceholder} alt="" />
    <div>
    <h2 className='font-bold'>Bienvenido</h2>
    <p>{user != null ? "Felicidades!, Vende tus productos y compra.": "Ingresa a tu cuenta para ver tus compras, favoritos, etc"}</p></div></div>
    <div className='flex gap-2'>
      {
        user != null ? <article className='flex gap-5'><button className='bg-white px-2 py-1 place-self-center rounded-2xl'><Logout></Logout></button> <Link to={'/Yourproducts'}><p className='bg-blue-700 text-white text-center place-self-center rounded-2xl'>Revisar tus productos</p></Link></article> :  <button className='bg-white text-black  py-3 px-9 rounded-2xl flex gap-5'>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
        <Link to={"/Signin"}>Ingresa desde Google</Link>
      </button>
      }
     
    </div>
    </div>
    <section className='flex gap-3 flex-col'>
      <Link to={"/"}><article className='flex p-5 place-items-center text-2xl gap-5'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
<h2>Inicio</h2>
      </article></Link>
      <article className='flex p-5 place-items-center text-2xl gap-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150" viewBox="0 0 16 16">
  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"/>
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
</svg> <h2>Ofertas</h2>
      </article>
      <article className='flex p-5 place-items-center text-2xl gap-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150"  viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
</svg>
<Link state={""} to={"/PQRpage"}><h2>Ayuda/PQR</h2></Link>
      </article>
      <hr />
     <Link to={"/Filterproducts"} state="moda"> <article className='flex p-5 place-items-center text-2xl gap-5'>
        
        <svg xmlns="http://www.w3.org/2000/svg"  className='scale-150 w-5' viewBox="0 0 48 48">
  <title>clothes</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="invisible_box" data-name="invisible box">
      <rect width="48" height="48" fill="none"/>
    </g>
    <g id="icons_Q2" data-name="icons Q2">
      <path d="M45.2,12.9,37.1,4H10.9L2.8,12.9a3,3,0,0,0,.1,4.2l7.5,7.5V44H37.7V24.6l7.5-7.5A3,3,0,0,0,45.2,12.9Zm-8.4,6.8-3.1-2.9V40H14.3V16.8l-3.1,2.9L6.4,14.9,12.7,8h7.4a4,4,0,0,0,7.8,0h7.4l6.3,6.9Z"/>
    </g>
  </g>
</svg><h2>Moda</h2>
      </article></Link>

      <article onClick={handleChangeuser} className='flex  flex-col p-5 place-items-center text-2xl gap-5'>
        <div className='flex gap-5 place-items-center place-self-start'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
</svg>
<h2>Categorias</h2></div>
<ul style={openuser ? {display:"none"} : {display: "flex"}} className=' flex-col place-self-start gap-5 list-disc ml-5'>
{
  productos.map(producto =>(
    <div key={producto.id} className='flex flex-col gap-5'><Link to={"/Filterproducts"} state={producto.nombre}><li className='capitalize'> {producto.nombre}</li> </Link>
    <hr />
    </div>
    
  ))
}</ul>
      </article>
      <hr />
    
      <article className='flex p-5 place-items-center text-2xl gap-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150"  viewBox="0 0 16 16">
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
</svg>
<Link to={user != null ?"/Addproduct" : "/Signin"}>Vender</Link>
      </article>
      <hr />
<article className='flex p-5 place-items-center text-2xl gap-5'>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150"  viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
<h2>¡Compra y vende con la App!</h2>
</article>
    </section>
  </section></>)
    }else{
        return (
    <>
    <header className='flex flex-col bg-yellow-300  justify-around place-items-center gap-3 '><div className='flex justify-around place-items-center gap-3 w-full'>
      <Link to="/"><div className='flex text-center text-2xl place-items-center   '>
      <img className='rounded-3xl w-15' src={mercadolibrelogofondo} alt="logo" />
      <h2 className='hidden lg:block text-blue-950 text-start font-bold'>mercado <br /> libre</h2></div></Link>
      <form onSubmit={handleSearch} className='flex'>
      <input onChange={handleUpdatevalue} className={screen.width > 768 ? 'bg-white py-2 w-[45vw] text-start shadow-2xs shadow-black ': "bg-white py-2 w-[50vw] text-center rounded-[10%]"} type="text" placeholder={screen.width > 768 ? 'Buscar productos, marcas y mas...': "Estoy buscando..."} />
    <button className="absolute lg:right-[23%] place-self-center"><svg type='submit' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button></form><div className='flex gap-6'>
        <button className='lg:hidden' onClick={handleChange}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" place-self-center scale-200" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button><Link to='/CartShopping'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" place-self-center scale-200 lg:hidden" viewBox="0 0 16 16">
  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></Link></div>
<div className='lg:hidden'>
  
</div>
</div>


  


<nav className='hidden lg:flex  justify-between w-full'>
  <article className='flex place-items-center gap-2 ml-20'>
  </article>
  <div className='flex gap-5 place-items-center'>
  <article onClick={handleChange} className='flex place-items-center gap-2 cursor-pointer'>
        <div><h2>Categorias</h2>
        <div style={open ? {display: "block"} : {display:"none"}} className='absolute bg-white z-10'>
          {productos.map(producto =>(
           <Link to={"/Filterproducts"} key={producto.id} state={producto.nombre}><h2 className='p-2'>{producto.nombre}</h2> </Link>
          ))}
        </div>
        </div>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
      </article>

        <Link to="/Offerts">Ofertas</Link>
        <Link to={"/Filterproducts"} state="moda"><h2>Moda</h2></Link>
        <Link to={user != null ?"/Addproduct" :"/SignIn"}>Vender</Link>
        <Link state={""} to={"/PQRpage"}><h2>Ayuda/PQR</h2></Link>
      </div>
      <div className='flex flex-col gap-10'>
      <div className='flex gap-5 mr-5 place-items-center'>
        <h2>{user != null && loading != true ?  <div onClick={handleChangeuser} className='flex place-items-center gap-2 cursor-pointer'><img src={imagen} referrerPolicy='no-referrer' className='w-10 rounded-2xl'  alt="Foto de usuario" /> <span>{user.user_metadata.name}</span></div>  : <Link to="/SignIn">Crea tu cuenta</Link> }</h2>
       <Link to='/CartShopping' className='flex gap-5'> <h2>Mis compras</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150" viewBox="0 0 16 16">
  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></Link>

      </div><div style={openuser == true ? {display: "none"}: {display:"flex"} } className=' bg-white  absolute  flex-col top-29'>
  <Link to={"/Yourproducts"} className='px-6'>Tus productos</Link>
  <Logout></Logout>

</div></div>
</nav>
    </header> 
    </>
  )
    }

}

export default Header