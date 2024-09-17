import { useState, useEffect } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => console.log(err));
    }, []); // Adiciona o array vazio para garantir que o useEffect seja chamado apenas uma vez

    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto" 
            />
            <Input 
                type="number" 
                text="orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento total" 
            />
            <Select 
                name="category_id" 
                text="selecione a categoria" 
                options={categories} 
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
