import { useState } from 'react';

export default function useForm (initialValues){
    const [showSuccessMessage, setShowSeccessMessage] = useState(false);
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSeccessMessage(true);
    };

    return [values, handleSubmit, handleChanges, showSuccessMessage]
};
