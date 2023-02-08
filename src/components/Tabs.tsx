import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className='box-tabs' sx={{ width: '100%' }}>
      <Tabs
        className='tabs-container'
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
      >
        <Tab className='worksTab' value="one" label="WORKS" />
        <Tab className='projectsTab' value="two" label="PROJECTS" />
        <Tab className='orgsTab' value="three" label="ORGANIZATIONS" disabled/>
      </Tabs>
    </Box>
  );
}