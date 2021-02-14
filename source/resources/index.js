// @scripts
import language from './lang';
import initialState from './initial-state';

const getConfiguration = () => {
  const config = {
    initialState,
    text: language[initialState.language]
  };

  global.config = config;

  return config;
};

export const config = getConfiguration();
