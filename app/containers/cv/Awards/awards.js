import React from 'react';
import PropTypes from 'prop-types';
import LinearListCV from '../contents/linearListCV';

const awards = {
  title: 'جوایز و افتخارات',
  list: [
    {
      title: 'کارشناسی ارشد مهندسی فن آوری اطلاعات',
      txtSmall: 'موسسه/دانشگاه: دانشگاه امیرکبیر',
      txtSmallBold: '1393 - 1396',
    },
    {
      title: 'کارشناسی مهندسی کامپیوتر',
      txtSmall: 'موسسه/دانشگاه: دانشگاه امیرکبیر',
      txtSmallBold: '1389 - 1393',
    },
  ],
};
// TODO:Award's fonts in design is smaller than this
function Awards(props) {
  const { editable, size = 1 } = props;

  return (
    <LinearListCV
      icon="flaticon-university"
      cv={awards}
      editable={editable}
      size={size}
    />
  );
}

Awards.propTypes = {
  editable: PropTypes.bool,
  size: PropTypes.number,
};

export default Awards;
