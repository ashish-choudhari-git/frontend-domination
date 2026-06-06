import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function UserForm() {

    //states 
    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const [errors, setErrors] = useState({});

    // functions handleChange , validate , submit

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors(prev => ({
            ...prev,
            [name]: "",
        }));
    }


    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!EMAIL_REGEX.test(form.email.trim())) {
            newErrors.email = "Invalide email";
        }

        return newErrors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (Object.keys(errors).length) {
            setErrors(errors);
            return;
        }

        setErrors({});

        console.log("form Data :", form);
    }


    return (

        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter Name" />
            {errors.name && <p>{errors.name}</p>}

            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Email" />
            {errors.email && <p>{errors.email}</p>}

            <button>Submit</button>
        </form>

    )

};

// Step-by-step kya hota hai?
// User "i" type karta hai.
// Browser pehle DOM input ki value update karta hai.
// Phir change/input event fire hota hai.
// React handleChange call karta hai.
// e.target actual DOM input element hota hai.
// e.target.value me latest value hoti hai ("faliii").
// Tum setEmail("faliii") call karte ho.
// React re-render karta hai aur input ko value={email} se sync kar deta hai.