import React, {useEffect, useState} from 'react';
import api from "../../../services/api";

export default function Dashboard(){
    const [events, setEvents] = useState([]);
    const user_id = localStorage.getItem('user');

    const getEvents = async (filter) => {

        const url = filter ? '/dashboard/${filter}' : '/dashboard'
        const response = await api.get(url, {headers: { user_id}});

        setEvents(response.data);
    }
    return(
        <div>
            Hello from Dashboard
        </div>
    )
}
