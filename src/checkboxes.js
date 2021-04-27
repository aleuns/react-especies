const checkboxes = [
    {
      name: 'cb-ar',
      key: 'cb-ar',
      label: 'Argentina',
      //url: `http://www.api-bd.kinghost.net/api/Specie/getall?page=1&pageSize=3&scientific_name=Axis`,
      url: `http://www.api-bd.kinghost.net/api/Specie/getall?page=1&pageSize=3`,
    },
    {
      name: 'cb-br',
      key: 'cb-br',
      label: 'Brasil',
      url: `http://www.api-bd.kinghost.net/api/Specie/getall?page=2&pageSize=3`,
    },
    {
      name: 'cb-py',
      key: 'cb-py',
      label: 'Paraguay',
      url: `http://www.api-bd.kinghost.net/api/Specie/getall?page=3&pageSize=3`,
    },
    {
      name: 'cb-uy',
      key: 'cb-uy',
      label: 'Uruguay',
      url: `http://www.api-bd.kinghost.net/api/Specie/getall?page=4&pageSize=3`,
    },
  ];
  
  export default checkboxes;