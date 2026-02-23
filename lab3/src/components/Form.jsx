import React, { useState, useEffect } from 'react'
import FormTextInput from './FormTextInput'
import FormSendButton from './FormSendButton'

const Form = () => {
    const [data, setData] = useState({});

    const sendHandler = (e) => {
        e.preventDefault();
        const inputs = e.target.elements;
        const formData = {};
        for (const input of inputs) {
            if (input.type == "submit") continue;
            formData[input.name] = input.value;
        }
        setData(formData);
    }

    useEffect(() => {
        console.log('data changed!', data);
    }, [data]);

    return (
        <>
            <form action="" className='form' onSubmit={sendHandler}>
                <FormTextInput label='Matrícula' idName='matricula' />
                <FormTextInput label='Nombre' idName='nombre' />
                <FormTextInput label='Apellidos' idName='apellidos' />
                <FormTextInput label='Edad' idName='edad' />
                <FormTextInput label='Universidad' idName='universidad' />
                <FormTextInput label='Carrera' idName='carrera' />
                <FormSendButton/>
            </form>
            <ul>
                {
                    Object.entries(data).map((a) => <li key={a[0]}>{a[0]}: {a[1]}</li>)
                }
            </ul>
        </>
    )
}

export default Form