import React, { useEffect } from 'react'
import { useState } from 'react'
import payment from "../assets/payment.svg"
import shipping from "../assets/shipping.svg"
import { supabase } from '../supaBaseclient'
import protectedsvg from "../assets/protected.svg"
import { Link } from 'react-router-dom'
function Footer() {
  let [imagenactual, setImagenactual] = useState(0)
    let [startx, setStartx] = useState(0)
    let [hover, setHover] = useState(false)

  let [productos, setProductos] = useState([])

  let handleProducts = async () =>{
let {data,error} = await supabase.from("productos").select("*").order('nombre', {ascending: true})
setProductos(data)

if (error) {
  console.log(error)
}
  }

  useEffect(()=>{
    handleProducts()
  }, [productos])

    let articulos= [
      {
        imagen: payment,
        titulo: "Paga con tarjeta o en efectivo",
        descripcion: "Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!",
        ir: "Cómo pagar con Mercado Pago"
      },{
imagen: shipping,
        titulo: "Envío gratis desde $ 60.000",
        descripcion: "Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.",
        ir: ""
      }
      ,{
imagen: protectedsvg,
titulo: "Seguridad, de principio a fin",
        descripcion: "¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.",
        ir: "Cómo te protegemos"
      }
    ]
  
    const handleTouchStart= (e) =>{
      setStartx(e.touches[0].clientX)
    }
  
    const handleHover= () =>{
      hover == true ? setHover(false) : setHover(true)
    }
  
    const handleTouchEnd= (e) =>{
      const endX= e.changedTouches[0].clientX
      const deltaX= endX - startx
  
      if (Math.abs(deltaX)  > 50 && Math.abs(deltaX)) {
        if (deltaX > 0) {
          handleUp()
        }else{
          handleLow()
        }
      }
    }

     const handleUp = () =>{
    if (imagenactual < articulos.length -1) {
      setImagenactual(imagenactual + 1)
    }else{
      setImagenactual(0)
    }
  }

  const handleLow = () =>{
    if (imagenactual> 0) {
      setImagenactual(imagenactual -1)
    }else{
      setImagenactual(articulos.length -1)
    }
  }
let letras= []
  const handleAlphabet = () =>{
for (let i = 97; i <= 122; i++) {
 letras.push(String.fromCharCode(i))
      
    }

    
  }
  handleAlphabet()
  return (
    <footer className='flex flex-col w-full bg-white'>
<div className='flex flex-col p-5 gap-4 lg:hidden' onTouchStart={handleTouchStart} onMouseEnter={handleHover} onTouchEnd={handleTouchEnd}>

  <img className='place-self-center' src={articulos[imagenactual].imagen} alt="" />
  <h2 className='text-2xl text-center'>{articulos[imagenactual].titulo}</h2>
  <p>{articulos[imagenactual].descripcion}</p>
  <Link to={"/PQRpage"} state={"Compras"}><p className='text-blue-600 text-center'>{articulos[imagenactual].ir}</p></Link>
</div>

<div className='lg:flex hidden gap-5 p-20'>
  <div className='border-r-2'>
    <img className='place-self-center' src={articulos[0].imagen} alt="" />
  <h2 className='text-2xl text-center'>{articulos[0].titulo}</h2>
  <p>{articulos[0].descripcion}</p>
  <Link to={"/PQRpage"} state={"Compras"}><p className='text-blue-600 text-center'>{articulos[0].ir}</p></Link>
  </div>
  <div className='border-r-2'>   <img className='place-self-center' src={articulos[1].imagen} alt="" />
  <h2 className='text-2xl text-center'>{articulos[1].titulo}</h2>
  <p>{articulos[1].descripcion}</p>
</div>
  <div>   <img className='place-self-center' src={articulos[2].imagen} alt="" />
  <h2 className='text-2xl text-center'>{articulos[2].titulo}</h2>
  <p>{articulos[2].descripcion}</p>
   <Link to={"/PQRpage"} state={"Compras"}><p className='text-blue-600 text-center'>{articulos[2].ir}</p></Link></div>
</div>
<hr />
<div className='flex flex-col'>
  <h2 className='font-bold text-2xl'>Productos mas buscados</h2>
  <div className=' flex flex-col lg:flex-row gap-2 px-20 py-10 capitalize flex-wrap'>
    {productos.map(producto =>(
  <Link to={"/Productsingle"} key={producto.id} state={{producto}}><h2 className=' line-clamp-1 max-w-80 '>{producto.nombre}-</h2></Link>
    ))}
  </div>
</div>
<div className='flex flex-col flex-wrap lg:p-10 lg:text-2xl gap-5'>
  <h2>Buscar productos por letra inicial</h2>
  <div className='flex flex-row gap-5 lg:p-5 flex-wrap'>
  {
letras.map(letra =>(
  <Link to={"/Searchpage"} key={letra} state={letra}><h2 className='flex text-3xl lg:text-2xl uppercase'>{letra}</h2> </Link>
))
  }</div>
</div>
<hr />
<div className='flex place-content-center'>
  <h2 className='place-self-center'>&copy; 2026 MercadoLibre Colombia. Todos los derechos reservados.</h2>
</div>
    </footer>
  )
}

export default Footer