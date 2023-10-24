import React, { useState } from "react";
import firebase from './firebase'

const DataInsert = () => {
    const [forData, setFormData] = useState({nombre: '', edad: ''});
    const handleCharge = (e) => {
        const {name, value} = e.target;
        setFormData({...forData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase.database().ref('usuarios').push(formData, (error) => {
            if (error) {
                console.error("error inserting data: ", error);
            } else {
                console.log("data omsrted succefully!");
                setFormData({nombre: '', edad: ''});
            }
        })
    }
}