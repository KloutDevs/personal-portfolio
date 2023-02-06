import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function ToggleButtons() {
  const [theme, setAlignment] = React.useState('dark');

  const handleTheme = (event, newTheme) => {
    setAlignment(newTheme);
  };

  return (
    <ToggleButtonGroup
      value={theme}
      exclusive
      onChange={handleTheme}
    >
      <ToggleButton value="dark">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="light">
        <WbSunnyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}