import React, { useState } from "react";
import api from "../../services/api";
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

export default function Login({history}) {
   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");

   const handleSubmit = async event =>{
       event.preventDefault();
       console.log("changes are", email, password);

      const respone = await api.post('/login', {email, password});

      const userId = respone.data._id || false;
      if(userId) {
          localStorage.setItem('user', userId);
          history.push('/dashboard')
      } else {
          const {message} = respone.data;
          console.log(message)
      }
    }

  return (
    <Container>
      <h2>Please login to your account</h2>
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address" onChange={evt => setEmail(evt.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter the Password" onChange={evt => setPassword(evt.target.value)}
        />
      </FormGroup>
      <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
    </Form>
    </Container>
  );
}
