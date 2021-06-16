import React, { useState } from "react";
import api from "../../services/api";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";

export default function Register({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("changes are", email, password);

    const respone = await api.post("/user/register", {
      email,
      password,
      firstName,
      lastName,
    });

    const userId = respone.data._id || false;
    if (userId) {
      localStorage.setItem("user", userId);
      history.push("/dashboard");
    } else {
      const { message } = respone.data;
      console.log(message);
    }
  };

  return (
    <Container>
      <h2>Please Register your account</h2>
      <Form onsubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Your first name"
            onChange={(evt) => setFirstName(evt.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Your last Name"
            onChange={(evt) => setLastName(evt.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter the Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </FormGroup>
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </Form>
    </Container>
  );
}
