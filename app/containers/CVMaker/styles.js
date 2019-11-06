const cvMakerFooter = {
  footer: {
    display: 'flex',
    width: '70%',
    margin: '40px auto 0',
    '& div:first-child': {
      flexGrow: 1,
    },
    '& [class^="flaticon-"]': {
      color: '#444',
    },
  },
};

const form = {
  form: {
    width: '70%',
    margin: '40px auto',
    fontSize: 14,
    fontWeight: 400,
    '&>h3': {
      fontSize: 12,
      fontWeight: 800,
      margin: ' 30px 0',
      color: '#818181',
    },
  },
};

export { cvMakerFooter, form };
