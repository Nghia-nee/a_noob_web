
import Main from "./Main";

import React, {useEffect, useState} from 'react';
import axios from 'axios'

const NameList = ({ gen, thm, ori }) => {
  const [names, setNames] = useState([]);
  const filtered = names.filter(name =>
    name.gender === gen &&
    name.theme === thm && 
    name.origin === ori 
  );

  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/firstname/')  
          .then(res => setNames(res.data))
          .catch(error => console.log(error))

    }, [])


    return (
      <div className="w-full flex flex-col justify-center items-center mt-8">
        {names.map(name => (
          <Main key={name.id} name={name.first_name} />
        ))}
      </div>
    )
  }
  
  export default NameList