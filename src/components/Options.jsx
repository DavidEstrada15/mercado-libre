import React from 'react'
import registration from "../assets/registration-da.svg"
import payment from "../assets/payment-methods.svg"
import lowprice from "../assets/low-price-product.svg"
import protectedbuy from "../assets/buy-protected.svg"
import help from "../assets/help-da.svg"
import useLoginCheck from './Logincheck'
import { Link } from 'react-router-dom'


function Options() {

 let {loading, user} = useLoginCheck() 
  return (
    <>
<div className=' lg:bottom-40 lg:left-0 lg:relative   overflow-hidden'>
    <section className='flex overflow-scroll lg:overflow-auto gap-5 max-w-full p-5  lg:place-content-center'>
      
      <article style={user != null && loading != true ? {display: "none"}: {display: "flex"}} className='bg-white lg:max-w-[20vw] lg:h-[45vh] px-10 py-1 lg:px-0 lg:py-0 rounded-2xl flex flex-col gap-2 text-center '>
       <h2 className=' hidden lg:flex'>Ingresa a tu cuenta</h2>
       
        <div>
          <img className='w-20 lg:w-30 lg:h-30 place-self-center' src={registration} alt="Ingresa a tu cuenta" />
          <h2 className='lg:hidden text-blue-600 text-center'>INICIA A COMPRAR</h2>
          <h2 className='text-[0.8rem] lg:text-2xl'>Disfruta de ofertas <br /> y compras sin limites</h2>
        </div>
        
       <Link to={"/SignIn"}> <button className='bg-blue-200 text-blue-600 place-self-center cursor-pointer text-[0.9rem] px-2 rounded-[10%] py-2 '>Ingresa  a tu cuenta</button></Link> 
      </article>
      <article className='bg-white  lg:max-w-[20vw] h-[45vh] rounded-2xl hidden lg:flex flex-col gap-2 text-center '>
        <h2>Medios de pago</h2>
        <div>
          <img className='w-30 lg:h-30 place-self-center' src={payment} alt="Pagos rapidos y seguros" />
          <h2>Paga tus compras de <br /> forma rapida y segura</h2>
        </div>
      <Link to={"/PQRpage"} state={"Compras"}>  <button className='bg-blue-200 cursor-pointer text-blue-600 place-self-center text-[0.9rem] px-2 rounded-[10%] py-2 '>Conocer medios de pago</button>
      </Link></article>
    <article className='bg-white lg:max-w-[20vw] h-70 lg:h-[45vh] px-10 py-1 lg:px-0 lg:py-0 rounded-2xl flex flex-col gap-2 text-center '>
        <h2 className='hidden lg:flex place-self-center'>Precios bajos</h2>
        <div>
          <img className='w-20 place-self-center lg:w-30 lg:h-30 ' src={lowprice} alt="Precios bajos" />
          <h2 className='text-blue-600 lg:hidden'>PRECIOS ACCESIBLES</h2>
          <h2 className='text-[0.8rem] lg:text-[1rem]'>Descubre productos <br /> con precios bajos</h2>
        </div>
        <Link to={"/Offerts"}>
        <button className='bg-blue-200 text-blue-600 place-self-center text-[0.8rem] lg:text-[1rem] px-2 rounded-[10%] py-2 cursor-pointer'>Mostrar productos</button>
      </Link></article>
        
      <article className='bg-white lg:max-w-[20vw] h-70 lg:h-[45vh] px-10 py-1 lg:px-0 lg:py-0 rounded-2xl flex flex-col gap-2 text-center '>
        <h2 className='hidden lg:flex place-self-center'>Compra protegida</h2>
        <div>
          <img className='w-20  lg:w-30 place-self-center lg:h-30 ' src={protectedbuy} alt="Compra protegida" />
          <h2 className='lg:hidden text-blue-600 text-center'>COMPRA PROTEGIDA</h2>
          <h2 className='text-[0.8rem] lg:text-[0.9rem]'>Realiza tu compra gratis <br /> de forma totalmente segura</h2>
        </div>
        <Link to={"/PQRpage"} state={"Compras"}>
        <button className='bg-blue-200 cursor-pointer text-blue-600 place-self-center text-[0.7rem] lg:text-[1rem] px-2 rounded-[10%] py-2 '>Como funciona</button></Link>
      </article>
     
     
     <article className='bg-white hidden lg:flex   lg:max-w-[15vw]   lg:h-[45vh] rounded-2xl flex-col gap-2 text-center '>
        <h2>¿Necesitas ayuda?</h2>
        <div>
          <img className='w-30 place-self-center lg:h-30 ' src={help} alt="Ayuda" />
          <h2 >Resuelve tus dudas <br /> sobre compras y ventas</h2>
        </div>
        <Link to={"/PQRpage"} state={""}>
        <button className='bg-blue-200 text-blue-600 place-self-center text-[0.9rem] px-2 rounded-[10%] py-2 cursor-pointer'>Ir a Ayuda</button>
      </Link></article>
     
    </section></div> 
    </>
  )
}

export default Options