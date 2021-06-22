import React, {useEffect, useState} from 'react';
import api from "../../../services/api";

export default function Dashboard(){
    const [events, setEvents] = useState([]);
    const user_id = localStorage.getItem('user');

    
    return(
        <div>
            Hello from Dashboard
        </div>
    )
}
