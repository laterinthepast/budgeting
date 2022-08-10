
import React, {useState} from "react";
import {Card, Form,Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";



export default function Signin() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');
  const {signIn} = UserAuth();
  const navigate = useNavigate();

const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('');
    try{
      await signIn(email,password)
      navigate('/account')
    } catch (e){
      setError(e.message)
      console.log(e.message)
    }

}
  return (
    <div>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign In</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)}type="email"  required></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)}type="password"  required></Form.Control>
                </Form.Group>
                {/* <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password"  required></Form.Control>
                </Form.Group> */}
                <Button className="w-100" type="submit" >Sign in</Button>
            </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">dont have an account yet? <Link to ="/signup">Sign Up</Link></div>
    </div>
  )
}








  
// import React, {useState} from "react";
// import {Card, Form,Button} from "react-bootstrap";
// import {Link, useNavigate} from "react-router-dom";
// import { UserAuth } from '../contexts/AuthContext';


// export default function Signin() {
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     const[error, setError] = useState('');
//     const navigate = useNavigate();
//     const {signIn} =UserAuth();

//     const handleSubmit= async (e)=>{
//         e.preventDefault();
//         setError('');
//         try{
//             await signIn(email, password)
//             navigate('/account')
//         }catch(e){
//             setError(e.message)
//             console.group(e.message)
//         }
//     }
//     return (
//       <div>
//         <Card>
//           <Card.Body>
//               <h2 className='text-center mb-4'>Sign Up for a free account</h2>
//               <Form onSubmit={handleSubmit}>
//                   <Form.Group id="email">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control onChange={(e)=>setEmail(e.target.value)}type="email"  required></Form.Control>
//                   </Form.Group>
//                   <Form.Group id="password">
//                       <Form.Label>Password</Form.Label>
//                       <Form.Control onChange={(e)=>setPassword(e.target.value)}type="password"  required></Form.Control>
//                   </Form.Group>
//                   {/* <Form.Group id="password-confirm">
//                       <Form.Label>Password Confirmation</Form.Label>
//                       <Form.Control type="password"  required></Form.Control>
//                   </Form.Group> */}
//                   <Button className="w-100" type="submit" >Sign Up</Button>
//               </Form>
//           </Card.Body>
//         </Card>
//         <div className="w-100 text-center mt-2">Already have an account yet? <Link to ="/">Sign In</Link></div>
//       </div>
//     )
//   }