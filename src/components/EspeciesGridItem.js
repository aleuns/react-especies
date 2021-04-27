import React from 'react'

export const EspeciesGridItem = ({ genero, scientific_name,img_src, url}) => {
    //console.log( genero, scientific_name,img_src,  url);
    return (
        <div className="card">
            {/* {especie.scientific_name} */}
            <img src={img_src} alt={scientific_name} />
            <p>{ genero} - { scientific_name} </p>
        </div>
    )
}
 