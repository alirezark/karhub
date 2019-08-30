import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import styles from './style';

function PaymentHistory(props) {
  const { paymentHistory } = props;
  const classes = styles();

  return (
    <div>
      <label className={classes.historyLabel}>لیست پرداخت ها</label>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">ردیف</TableCell>
            <TableCell align="center">تاریخ پرداخت</TableCell>
            <TableCell align="center">نوع</TableCell>
            <TableCell align="center">مبلغ</TableCell>
            <TableCell align="center">بانک</TableCell>
            <TableCell align="center">کارت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentHistory.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.bank}</TableCell>
              <TableCell align="center">{row.card_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

PaymentHistory.propTypes = {
  paymentHistory: PropTypes.array.isRequired,
};

export default PaymentHistory;
