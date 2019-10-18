import React from 'react';
import PropTypes from 'prop-types';
import styles from '../credit.style';
import MTableBox from 'mui/MTableBox';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

function CreditHistory(props) {
  const classes = styles();
  const { creditHistory } = props;

  return (
    <MTableBox thin>
      <table>
        {creditHistory.map(credit => (
          <tr key={credit.id}>
            <td>
              <div className="inline-head">
                <div>شماره فاکتور:</div>
                <div>{credit.factorNum}</div>
              </div>
            </td>
            <td>
              <div className="inline-head">
                <div>نوع اعتبار:</div>
                <div>{credit.type}</div>
              </div>
            </td>
            <td>
              <div className="inline-head">
                <div>تاریخ شروع:</div>
                <div>{credit.start}</div>
              </div>
            </td>
            <td>
              <div className="inline-head">
                <div>تاریخ انقضا:</div>
                <div>{credit.expire}</div>
              </div>
            </td>
            <td>
              <Typography
                variant="h3"
                className={classNames({
                  [classes.colorGreen]: credit.status === 'فعال',
                  [classes.colorYellow]: credit.status === 'غیرفعال',
                })}
              >
                {credit.status}
              </Typography>
            </td>
          </tr>
        ))}
      </table>
    </MTableBox>);
}

CreditHistory.propTypes = {
  creditHistory: PropTypes.array.isRequired,
};

export default CreditHistory;
