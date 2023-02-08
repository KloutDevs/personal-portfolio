import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      className='worksFilter'
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton className='okButton' value="okBtn" aria-label="okBtn">
        <CheckCircleIcon />
      </ToggleButton>
      <ToggleButton className='inProcessButton' value="inProcessButton" aria-label="inProcessButton">
        <ErrorIcon />
      </ToggleButton>
      <ToggleButton className='notstartedButton' value="notstartedButton" aria-label="notstartedButton">
        <DangerousIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}