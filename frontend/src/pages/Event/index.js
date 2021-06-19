import React, { useState } from 'react'
import api from '../../services/api';
import { Button, Form, FormGroup, Input, label, Container } from "reactstrap";

export default function Event() {
    const user_id = localStorage.getItem('user');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {

    }

    return (
        <Container>
            <h1>Create your Event</h1>
            <Form onSubmit={handleSubmit}>
                <label>upload Image</label>
                <input id="thumbnail" type="file" onChange={e => setThumbnail(e.target.files(0))}/>
               
            </Form>
        </Container>
    )
}

