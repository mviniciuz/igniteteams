import themeDefaut from '@theme/themeDefaut';
import themeWhite from '@theme/themeWhite';
import themeDark from './themeDark';

type Theme = typeof themeDefaut;

let themeChoice = '';

let theme : Theme = themeDefaut;

if(themeChoice === 'dark') {
  theme = themeDark;
} else if (themeChoice === 'white') {
  theme = themeWhite;
} 

export { theme };
  
 

  