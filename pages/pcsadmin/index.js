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
                router.push('/pcsadmin/dashboard')
                

            }else{
                alert("wrong password")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }



    return(
        <div className="container-fluid text-light ">
        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-sm-12 col-md-6 col-lg-6 bg-dark p-5 box-shadow">
            <h1 className="text-center text-light">Admin Login</h1>
            <Form className="" onSubmit={handleSubmit}>
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
        </div>
        </div>
    )
}

Login.layout = "blank";
export default Login