import { createStyles } from '@material-ui/core';

const cardBox = createStyles(() => ({
  panel: {
    boxShadow: '0 0 14px 0 rgba(178,178,178,0.5)',
    borderRadius: 8,
  },
  icon: {
    display: 'block',
    height: 130,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
  },
}));

export default cardBox;
