import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { supabase } from '../supaBaseclient'
import { Link } from 'react-router-dom'
import useLoginCheck from '../components/Logincheck'
function CartShopping() {
const [productos, setProductos] = useState([])
const [productosactualizados, setProductosactualizados] = useState([])
const {user,loading}= useLoginCheck()
const handleErase= async (e) => {
  let productosfiltrados= productos.filter(productolocal => productolocal.idcompra != e.idcompra)
setProductos(productos.filter(productolocal => productolocal.idcompra != e.idcompra  ))
 await supabase.from("usuarios").update({Cartshopping: JSON.stringify(productosfiltrados)}).eq("id_usuario", user.id)
 handleCart
}


useEffect(() => {
  if (loading != true) {
     handleCart()
  }
 
}, [loading])

useEffect(() => {
  handleProducts()
}, [productosactualizados])

const handleAlert = () => {
  let i=0 

  if (i> 0) {
    alert("Uno de tus productos ha sido actualizado")
    i++
  }
  
}


const handleProducts = async () =>{
 const {data, error} = await supabase.from("productos").select("*")

 setProductosactualizados(data)
if (error){
  console.log(error)
}
 productos.forEach(producto =>{
  productosactualizados.forEach((productoactu) =>{
    if (producto.precio != productoactu.precio && producto.id == productoactu.id) {
   let productoscorregidos=  productos.map(productoactual => productoactual.precio != producto.precio) 
   
   setProductos(productoscorregidos)
    handleUpdateProducts(productoscorregidos)
    handleAlert
    }

    if ( producto.stock != productoactu.stock && producto.id == productoactu.id){
 let productoscorregidos=  productos.filter(productoactual => productoactual.stock == productoactu.stock)

 setProductos(productoscorregidos)
  handleUpdateProducts(productoscorregidos)
   handleAlert
    }

    if (producto.descuento != productoactu.descuento && producto.id == productoactu.id) {
      console.log(producto.descuento)
      console.log(productoactu.descuento)
       let productoscorregidos=  productos.filter(productoactual => productoactual.descuento != producto.descuento)
      
   setProductos(productoscorregidos)
   handleUpdateProducts(productoscorregidos)
    handleAlert
    }
  })
 })
}

const handleUpdateProducts = async (p) =>{
  await supabase.from("usuarios").update({Cartshopping: JSON.stringify(p) }).eq("id_usuario", user.id)
}

const handleUpdate = async () => {
  const conteo= {}
   productos.forEach(p => {
    conteo[p.id] = (conteo[p.id] || 0) + 1
  })
  for (const id in conteo) {
    const cantidad = conteo[id]

    const producto = productos.find(p => p.id == id)

    await supabase
      .from("productos")
      .update({
        stock: producto.stock - cantidad
      })
      .eq("id", id)
  }
alert("Compra realizada correctamente!")
await supabase.from("usuarios").update({Cartshopping: JSON.stringify([])}).eq("id_usuario", user.id)
  setProductos([])
  
}
 
  const calcularprecio =  
productos.reduce((acumulador, producto) =>
 acumulador + (producto.precio - (producto.descuento * producto.precio / 100)),0

)

const handleCart = async () =>{
  
const {data, error} = await supabase.from("usuarios").select("*").eq("id_usuario", user.id).single()


setProductos(JSON.parse(data.Cartshopping))

if (error) {
  console.log(error)
}
}
  
  return (
    <>
    <Header></Header>
    <section className='flex flex-col gap-5 p-5'>
      <h2 className='text-3xl text-center'>Tienes {productos.length} producto en el carrito</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      {
      
      productos != null ? 
     productos.map(producto =>(

      
      <article className='flex flex-col text-2xl p-5' key={producto.idcompra}>  <h2 className='text-center text-3xl line-clamp-1 text-black capitalize'>{producto.nombre}</h2>
      <div className='flex flex-col gap-5 p-5'>
      <div className='w-[80vw]  lg:w-[20vw] object-cover h-[30vh] place-items-center place-self-center ' > 
          <img className='w-[60%] h-full' src={producto.imagenes} alt={producto.imagenes} /></div>
      <button className='bg-red-500 place-self-center py-5 px-10 cursor-pointer' onClick={() => {
        handleErase(producto)
      }}>quitar producto del carrito</button></div></article>
    
     ))
      : "No tienes productos en el carrito" 
      }</div>
      <h2 className='text-3xl place-self-center'>Tu gasto es {calcularprecio.toLocaleString('es-ES')}
      </h2>
      <button style={productos.length > 0 ? {display: "block"}: {display:"none"}} onClick={handleUpdate} className='place-self-center px-20 bg-blue-700 cursor-pointer text-white py-5'>Comprar</button>
      </section>
    
    </>
  )
}

export default CartShopping