import HomeIcon from '@mui/icons-material/Home';

import React, { useState } from 'react';

const EducationForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='edu' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Education Form</h1>
      <h1>Education Form</h1>

      <HomeIcon> <h1>Education Form</h1> </HomeIcon>
    </div>
  );
};

export default EducationForm;
