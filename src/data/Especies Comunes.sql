select py_sp.scientific_name 		
from 		
	i3n_py.data_species py_sp inner join 	
    ( i3n_ar.data_species ar_sp inner join i3n_uy.data_species uy_sp ON		
		 uy_sp.scientific_name = ar_sp.scientific_name )
	on uy_sp.scientific_name = py_sp.scientific_name	
order by py_sp.scientific_name	


select br_sp.scientific_name 		
from 		
    i3n_br.data_species br_sp inner join 
    (	i3n_py.data_species py_sp inner join 	
        ( i3n_ar.data_species ar_sp inner join i3n_uy.data_species uy_sp ON		
            uy_sp.scientific_name = ar_sp.scientific_name )
        on uy_sp.scientific_name = py_sp.scientific_name)	
    on uy_sp.scientific_name = br_sp.scientific_name
order by br_sp.scientific_name	