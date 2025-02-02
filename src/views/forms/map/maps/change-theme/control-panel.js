import PropTypes from 'prop-types';
import { memo } from 'react';

// material-ui
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

// project-import
import ControlPanelStyled from 'components/ui-component/third-party/map/ControlPanelStyled';

// ==============================|| MAPBOX - THEME ||============================== //

function ControlPanel({ themes, selectTheme, onChangeTheme }) {
  return (
    <ControlPanelStyled>
      <Typography gutterBottom variant="subtitle2">
        Select variants:
      </Typography>

      <RadioGroup value={selectTheme} onChange={(event, newValue) => onChangeTheme(newValue)}>
        {Object.keys(themes).map((item) => (
          <FormControlLabel key={item} value={item} control={<Radio size="small" />} label={item} sx={{ textTransform: 'capitalize' }} />
        ))}
      </RadioGroup>
    </ControlPanelStyled>
  );
}

ControlPanel.propTypes = {
  themes: PropTypes.object,
  selectTheme: PropTypes.string,
  onChangeTheme: PropTypes.func
};

export default memo(ControlPanel);
