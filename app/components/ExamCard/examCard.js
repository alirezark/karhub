import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './examCard.style';

function ExamCard(props) {
  const classes = styles();
  const { icon, title, questionCount, time } = props;

  return (
    <Card className={classes.card} raised>
      <CardMedia className={classes.icon} image={icon} />
      <CardContent className={classes.cardContent}>
        <Typography component="h6" variant="h6" className={classes.cardTitle}>
          {title}
        </Typography>
        <div className={classes.cardFooter}>
          <span>سوال: {questionCount}</span>
          <span>دقیقه: {time}</span>
        </div>
      </CardContent>
    </Card>
  );
}

ExamCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  questionCount: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default ExamCard;
