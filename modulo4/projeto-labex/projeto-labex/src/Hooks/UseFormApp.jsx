import { useState } from "react";


const useFormApp = (formsState) => {
    const [form, setForm] = useState(formsState);

    const onChange = (ev) => {
        const { name, value } = ev.target;
        setForm({...form, [name]: value});

    };

    const forms = () => setForm(formsState);
    return { form, onChange, forms };
}

export default useFormApp;