import React from 'react'
import { supabase } from '../supaBaseclient'
import { useState, useEffect } from 'react'
export default function useLoginCheck() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
      useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })


    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  

  
return  {user, loading}


}
