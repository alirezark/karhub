/**
 *
 * Rtl
 *
 */

import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Rtl(props) {
  // eslint-disable-next-line react/prop-types
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

export default Rtl;
