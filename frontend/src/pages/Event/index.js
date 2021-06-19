import React, { useState } from 'react'

export default function Event() {
    const user_id = localStorage.getItem('user');

    const [title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [date, setDate] = useState('');

    return (
        <div>
            Hello from Event
        </div>
    )
}

