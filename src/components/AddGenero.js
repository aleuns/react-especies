import React,{useState} from 'react'

export const AddGenero = ({ setGeneros }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //    console.log('Submit Hecho');
        if (inputValue.trim().length > 2) {
            setGeneros(gens => [inputValue, ...gens]);
            setInputValue('');
            
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>
    )
}
