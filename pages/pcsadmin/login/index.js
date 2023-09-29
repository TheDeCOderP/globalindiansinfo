import { Form } from "react-bootstrap"
import { useState,useEffect } from "react"
import { setCookie } from 'cookies-next';
import { useRouter } from "next/router";


function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const router=useRouter()
    
    function handleChange1(e){
        setEmail(e.target.value)

    }
    function handleChange2(e){
        setPassword(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault()

    }
    

    const handleLogin=async()=>{
        try {
            if(password=="global@123"){
                setCookie('giiadmin', email);
                router.push('/pcsadmin')
                

            }else{
                alert("wrong password")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }



    return(
        <div>
            <h1 style={{textAlign:"center"}}>Login</h1>
            <Form className="w-50 mx-auto m-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control placeholder="Enter Email" onChange={handleChange1}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Enter Password</Form.Label>
                    <Form.Control placeholder="Enter Password" onChange={handleChange2}/>
                </Form.Group>
                <Form.Control type="submit" className="mt-3" onClick={handleLogin}/>
            </Form>

        </div>
    )
}
export default Login