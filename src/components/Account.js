import React from "react";
import { useNavigate } from "react-router-dom";
import {Card, Form,Button} from "react-bootstrap";
import {UserAuth} from "../contexts/AuthContext";




export default function Account() {
   const {user, logout}= UserAuth();
   const navigate = useNavigate();
   
   const handleLogout= async (e) =>{
    e.preventDefault();
        try{
            await logout();
            navigate('/');
            console.log("You are logged out")
        } catch (e){
            console.log(e.message);
        }
   };


  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Account</h2>
            <Form>
                <p>User Email: {user && user.email }</p>
                <Button onClick={handleLogout} className="w-100" type="submit" >Log Out</Button>
            </Form>
        </Card.Body>
      </Card>
     
    </div>
  )
}

