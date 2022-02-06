//This Hook I borrowed from Fey's Code. Its incredible. 
import { useState } from 'react';

function useFormData(initialValue) {
  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {

    const { name, value } = e.target;
    
    setData({
      ...data,
      [name]: value
    });
  };

  return [data, handleChange];
}

export default useFormData;