/**
 *
 * QuoteCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardContent, Typography } from '@material-ui/core';
import MAvatar from 'mui/MAvatar';
import imgAvatar1 from 'app/assets/images/avatar_grey_1.jpg';
import imgAvatar2 from 'app/assets/images/avatar_grey_2.jpg';
import imgQuote from 'app/assets/images/icons/qoute.png';
import styles from './style';

const selectAvatar = avatar => {
  if (avatar === 'avatar1') return imgAvatar1;
  return imgAvatar2;
};

function QuoteCard(props) {
  const classes = styles();
  const { quote, className } = props;

  return (
    <Card className={classNames(classes.card, className)} raised>
      <MAvatar src={selectAvatar(quote.avatar)} alt="user name" />
      <CardContent className={classes.cardContent}>
        <Typography component="h5" variant="h5" className={classes.cardTitle}>
          {quote.name}
        </Typography>
        <Typography variant="subtitle2" className={classes.cardSubTitle}>
          {quote.position}
        </Typography>
        <div className={classes.cardSeparator}>
          <img alt="Quota" src={imgQuote} />
          <span />
        </div>
        <Typography variant="subtitle2" className={classes.cardText}>
          با شرکت در آزمون‌های کارهاب خودت رو بسنج و عملکرد بهتری داشته باش! شما
          میتوانید با انتخاب یکی از آزمون ها وارد صفحه صفحه آزمون شده و این متن
          به صورت تست می‌باشدبهتری داشته باش! شما میتوانید با انتخاب یکی شما
          میتوانید با انتخاب یکی .
        </Typography>
      </CardContent>
    </Card>
  );
}

QuoteCard.propTypes = {
  quote: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default QuoteCard;
