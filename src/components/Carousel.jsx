import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import carrousel1 from "../assets/carrousel_1.webp"
import carrousel2 from "../assets/carrousel_2.webp"
import carrousel3 from "../assets/carrousel_3.webp"
import carrousel4 from "../assets/carrousel_4.webp"
import carrousel5 from "../assets/carrousel_5.webp"
import carrousel6 from "../assets/carrousel_6.webp"
function Carousel() {
  let carruselelementos= [
    carrousel1,
    carrousel2,
    carrousel3,
    carrousel4,
    carrousel5,
    carrousel6

  ]

  let [imagenactual, setImagenactual] = useState(0)
  let [startx, setStartx] = useState(0)
  let [hover, setHover] = useState(false)

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

 
useEffect(() =>{
  const timer=  setTimeout(() => {
    handleUp()
  }, 5000);

  return () => clearTimeout(timer)
})
  const handleUp = () =>{
    if (imagenactual < carruselelementos.length -1) {
      setImagenactual(imagenactual + 1)
    }else{
      setImagenactual(0)
    }
  }

  const handleLow = () =>{
    if (imagenactual> 0) {
      setImagenactual(imagenactual -1)
    }else{
      setImagenactual(carruselelementos.length -1)
    }
  }


  return (
    <>
    <section className='flex gap-5 ' onTouchStart={handleTouchStart} onMouseEnter={handleHover} onMouseLeave={() => setHover(false)} onTouchEnd={handleTouchEnd}>
      <button  onClick={handleLow} style={hover == true ? {visibility: "visible"} : {visibility: "hidden"}} className='absolute place-self-center left-0 cursor-pointer bg-white py-8 px-5 text-blue-600  rounded-2xl hidden lg:flex'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
</svg></button>
      <img className=' h-40 w-full lg:h-[50vh] lg:w-full place-self-center' src={carruselelementos[imagenactual]} alt="imagencarrusel" />
      <button onClick={handleUp} style={hover == true ? {visibility: "visible"} : {visibility: "hidden"}} className='absolute place-self-center right-0 cursor-pointer bg-white py-8 px-5 text-blue-600  rounded-2xl hidden lg:flex'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg></button>
    </section>
    </>
  )
}

export default Carousel