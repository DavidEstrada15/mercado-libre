import React from 'react'
import { supabase } from '../supaBaseclient'
function Logout() {

    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut()
        location.reload()
        if (error) {
          console.log(error)
        }
    }
  return (
    <h2 className='cursor-pointer text-center' onClick={handleLogout}>Salir de cuenta</h2>
  )
}

export default Logout