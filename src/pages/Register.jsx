import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/friends.png'
import { registerAPI } from '../services/AllAPI';

function Register() {
    const navigate=useNavigate()
    const [userInput,setUserInput]=useState({
        name:"",address:"",email:"",mobile:"",birth:"",gender:"",course:"",password:""
    })
    const options=[
    {label:"Biology" ,value:"Biology"} , 
    {label:"Computer Science" ,value:"Computer Science"} , 
    {label:"Humanities" ,value:"Humanities"} , 
    {label:"Commerce" ,value:"Commerce"}  

]
const handleRegister=async(e)=>{
    e.preventDefault()
    const {name,address,email,mobile,birth,gender,course,password}=userInput
    if( !name||!address||!email||!mobile||!birth||!gender||!course||!password){
        alert("please fill the form completely")
    }
    else{
        try {
            const result=await registerAPI(userInput)
        console.log(result);
        if(result.status===200){
          setUserInput({name:"",address:"",email:"",mobile:"",birth:"",gender:"",course:"",password:""})
            navigate("/studentlist")
        
        }else{
          toast.warning(result.response.data)
        }
          } catch (error) {
            console.log(error);
          }
    }
    
}

    return (
        <>
            <div className='register home w-100  d-flex justify-content-center align-items-center p-5' >
                <div className='container' style={{ textTransform: ' none' }}>
                    <Link to={'/'} style={{ textTransform: ' none' }}><i className='fa-solid fa-arrow-left' style={{ textTransform: ' none' }}><span className='ms-2' style={{ textTransform: ' none' }} >Back To Home</span></i></Link>
                    <div className='card shadow p-5' id='di'>
                        <div className='row '>
                            <h2 className='text-center mb-3'>Apply as a student</h2>
                            <div className="col-lg-5 align-items-center mb-3">
                                <img height={'100%'} width={'100%'} src={img} alt="" />

                            </div>
                            <div className='col-lg-7'>
                                <Form>


                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Enter Name" value={userInput.name} onChange={(e)=>setUserInput({...userInput,name:e.target.value})}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Address" value={userInput.address} onChange={(e)=>setUserInput({...userInput,address:e.target.value})} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" value={userInput.email} onChange={(e)=>setUserInput({...userInput,email:e.target.value})} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicMobile">
                                        <Form.Control type="text" placeholder="Enter Mobile Number" value={userInput.mobile} onChange={(e)=>setUserInput({...userInput,mobile:e.target.value})}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicbirth" >
                                        <Form.Control type="text" placeholder="Date of Birth" value={userInput.birth} onChange={(e)=>setUserInput({...userInput,birth:e.target.value})}/>
                                    </Form.Group>
                                    

                                    <div className="mb-3">
                                        <p className='text-dark'>Select your gender</p>
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="group1"
                                            type="radio"
                                            value="Female"
                                            id="Female"
                                            onChange={(e)=>setUserInput({...userInput,gender:e.target.value})}
                                        />
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="group1"
                                            type="radio"
                                            value="Male"
                                            id="Male"
                                            onChange={(e)=>setUserInput({...userInput,gender:e.target.value})}
                                        />
                                    </div>
                                    <Form.Select aria-label="Default select example" defaultValue="Course" className='mb-3'  onChange={(e)=>setUserInput({...userInput,course:e.target.value})} >   
                                        {options.map(option=>(
                                            <option value={option.value}>{option.label}</option>
                                        ))}

                                    </Form.Select>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" value={userInput.password} onChange={(e)=>setUserInput({...userInput,password:e.target.value})}/>
                                    </Form.Group>


                                    <div>
                                        <Link to={'/studentlist'}><button onClick={handleRegister} className='btn btn-success mb-2' style={{ textTransform: ' none' }}>Register</button></Link>
                                    </div>
                                    <div>
                                        <button className='btn btn-danger mb-2' style={{ textTransform: ' none' }}>Cancel</button>
                                    </div>






                                </Form>

                            </div></div>

                    </div>        </div>
            </div>
        </>
    )
}

export default Register