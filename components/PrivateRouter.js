import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next';


function PrivateRouter({children}) {
    const [val,setVal]=useState(false)
    const router=useRouter()
    const cookies = getCookie('giiadmin')


    useEffect(()=>{
        if(!cookies){
            router.push('/pcsadmin')
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    

  return (
    <div>{children}</div>
  )
}

export default PrivateRouter;