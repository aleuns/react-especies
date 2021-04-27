import React, {useState,useEffect} from 'react'
import checkboxes from '../checkboxes';
import { EspeciesGridItem } from './EspeciesGridItem';

export const EspeciesGrid = ({ genero, q, checkedItems }) => {

    const [especies, setEspecies] = useState([]);

    useEffect(() => {
        console.log('checkedItems Useeffect', checkedItems);
        if (checkedItems.length !== 0) {
            getEspeciesPaises(q, checkedItems);    
        }
    }, [q,checkedItems])
   
    function SearchAndFilterSpecies( items , q) {
        console.log('ROW', items);
        console.log('Search Q ', q.toLowerCase());
        console.log('ChItems', checkedItems);
        let especiesFiltered = items.filter(row => {
            console.log('Se cumple? ', (row.scientific_name &&
                (row.scientific_name.toLowerCase().includes(q.toLowerCase()) ||
                 row.genero.toLowerCase().includes(q.toLowerCase()))
            ));
            return (row.scientific_name &&
                (row.scientific_name.toLowerCase().includes(q.toLowerCase()) ||
                    row.genero.toLowerCase().includes(q.toLowerCase()))
            )
        });
        console.log('Search especiesFiltered ', especiesFiltered);
        const newespecies = especiesFiltered.map(especie => {
                return {
                    base_pais: 'ar-',
                    specie_id: especie.species_id,
                    genero: especie.genus,
                    scientific_name: especie.scientific_name,
                    img_src:'http://www.inbiar.uns.edu.ar/www/img/species/'+ 156,
                    url: 'http://www.inbiar.uns.edu.ar/?p=MDw1dnQ8YTA3OGUkIEdcFhEDUgdUBBYZGkwOaW9qfD1sag%3D%3D'
                }
            })
        console.log('newespecies ', newespecies);
        return newespecies;
    }
    
    function ConcatenaJsones(jsonArray1, jsonArray2) {
        //let jsonArray1 = [{'name': "doug", 'id':5}, {'name': "dofug", 'id':23}];
        //let jsonArray2 = [{'name': "goud", 'id':1}, {'name': "doaaug", 'id':52}];
        console.log("jsonArray1__", jsonArray1);
        console.log("jsonArray2__",jsonArray2);
        jsonArray1 = jsonArray1.concat(jsonArray2);
        
        return jsonArray1
    }
    const getEspeciesPaises = (q,checkedItems) => {
        //Promises dentro de Array.map() (JS)
        const arrcheckedItems = Array.from(checkedItems.keys());
        console.log(`Entry for ${arrcheckedItems}`);

        console.log(`Checknoxes `, checkboxes);
      
        /* Aplicando funcion filtrosobre checkboxes para seleccionar 
           solo los chequeados-> Para luego recuperar las urls  .*/
        let PaisesUrl = checkboxes.filter(function (checkbox) {
            //return checkbox.key === "cb-ar";
            return arrcheckedItems.includes(checkbox.key)
        }).map(function (checkbox) {
            return checkbox.url;
        })
        console.log("URLS are:");
        PaisesUrl.forEach(function (url) {
            console.log(url);
        });

        Promise.all(PaisesUrl.map( url =>
            fetch(url)
                .then(resp => {
                    console.log('Text __', resp);
                    return resp.text()
                     //resp.text()
                })
            
        ))
        .then(results => results.map(res => {
                console.log('Items __',JSON.parse(res).items);
                return JSON.parse(res).items
            }
        ))
        .then(function(response) {
            console.log("Respuesta ", response);
            
            var total = response.reduce(function (previous, current, index) {
                console.log("Prev: " , previous , 
                            "Curre " , current ,
                            ", itera " , (index + 1));
                return  previous.concat(current);

            }, []);
             
            console.log("The loop is done " , total );

            // filtra los elementos de todos los paises seleccionados 
            let itemsFiltered = SearchAndFilterSpecies(total, q);
            setEspecies(itemsFiltered)
            // console.log("jsonArray1 final__",itemsFiltered);
            // let especies2= ConcatenaJsones(especies, itemsFiltered)
        })
        .catch(error => {
            console.error(error);
        });

    }

    return (
        <>
            <h3>{genero}</h3>
            <div className="card-grid">
                
                {
                especies.map(especie => (
                    <EspeciesGridItem 
                        key={genero+'-'+especie.id}
                        { ...especie}
                    />
                    ))
                }
            </div>
        </>
    )
}
