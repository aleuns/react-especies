import React, { useState } from 'react'
import { AddGenero } from './AddGenero';
import { EspeciesGrid } from './EspeciesGrid';
import CheckboxContainer from './CheckboxContainer';
import FilterExample from './FilterExample';

export const Especies = () => {

    const [q, setQ] = useState("");
    const [generos, setGeneros] = useState(['Tamarix']);
    
    const [checkboxes, setCheckboxes] = useState([]);
    
    

    // const handleAdd = () => {
    //     // No realizar --> generos.push(Texto)
    //     //setGeneros(['Texto', ...generos]); Alternativa
    //     setGeneros(generos => ['Texto', ...generos]);
    // }

    return (
        <div>
            <br/>
            {/* <FilterExample  /><br /> */}
            
            <CheckboxContainer setCheckboxes={ setCheckboxes} /><br />
            <h3>Nombre Científico</h3>
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
          
            <h3>Género</h3>
            <AddGenero setGeneros={setGeneros} />
            <hr />
            {
            generos.map(genero => (
                <EspeciesGrid
                key={genero}
                genero={genero}
                q={q} 
                checkedItems={checkboxes}
                />
                ))
            }
        </div>
    )
}
