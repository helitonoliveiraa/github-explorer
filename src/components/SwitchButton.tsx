import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { useTheme } from '../context/theme';

const SwitchButton: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon
      uncheckedIcon
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.2, colors.background)}
      onColor={shade(0.4, colors.primary)}
    />
  );
};

export default SwitchButton;
