import React from 'react'
import Carousel from "../components/Carousel"
import Options from '../components/Options'
import Header from '../components/Header.jsx'
import Appandroid from '../components/Appandroid.jsx'
import Products from "../components/Products.jsx"
import Footer from "../components/Footer.jsx"
import { useEffect, useState } from 'react'
import { supabase } from '../supaBaseclient.js'
import useLoginCheck from '../components/Logincheck.jsx'
function Home() {
  let [categorias, setCategorias]= useState([])
  const {loading, user}= useLoginCheck()

const syncUser = async () => {
       const { data: { session } } = await supabase.auth.getSession()
    if (!session) return

    const { data: existingUser } = await supabase
      .from("usuarios")
      .select("id")
      .eq("id_usuario", user.id)
      .single()

    if (!existingUser) {
      await supabase.from("usuarios").insert({
        id_usuario: user.id,
        correo: user.email,
        nombre: user.user_metadata.name,
        Cartshopping: "[]",
        categoriasfavoritas: "[]",
      })
    }
  
    }
  const handleCategories= async () =>{
  const {data,error} = await supabase.from("usuarios").select("*").eq("id_usuario", user.id).single()
  setCategorias(JSON.parse(data.categoriasfavoritas))

  if (error) {
    console.log(error)
  }
}
  useEffect(() =>{
    if (loading != true && user != null) {
      syncUser()
     handleCategories() 
    }else{
      setCategorias(['videojuegos', 'moda'])
    }
    
  }, [loading])


  return (
    <>

            <Appandroid></Appandroid>
        <Header></Header>
    <Carousel></Carousel>
    <Options ></Options>
    <div className='flex flex-col gap-5 py-10 '>
{
  
    categorias.map(categoria => (
      
      <Products key={categoria}  categoria={categoria} titulo={`Mas productos de ${categoria}`}></Products>
    ))
}</div>
    <Footer></Footer>
    </>
  )
}

export default Home