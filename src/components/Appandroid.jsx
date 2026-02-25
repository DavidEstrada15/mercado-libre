import React from 'react'
import mercadolibrelogofondo from "../assets/mercado-libre-logo-fondo.jpg"
function Appandroid() {
  return (
        <section className=' flex bg-black w-full h-20 gap-5 font-bold text-white lg:hidden justify-between'>

      
    <div className='flex place-self-center gap-2'>
      <img className='w-[20vw] md:w-[8vw] h-[8vh] ml-5 place-self-center rounded-2xl' src={mercadolibrelogofondo} alt="" />
      <div className='flex flex-col'>
        <h2 className='text-[0.65rem]'>Abre la App y obten envio gratis en tu primera compra</h2>
        <div className='flex gap-1 text-gray-400 text-[0.65rem]'>
            <div className='flex place-items-center'>
        <p>4.5 </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-70" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        </div>
        +17 M opiniones</div></div>
    </div>

    <button className='bg-blue-600 place-self-center py-2 px-[2.2%] mr-5 rounded-2xl'><a href="https://play.google.com/store/apps/details?id=com.mercadolibre&hl=es_CO">Abrir</a></button>
    </section>
  )
}

export default Appandroid