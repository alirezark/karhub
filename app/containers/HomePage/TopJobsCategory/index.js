import React from 'react';
import styles from './style';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import icon_data from '../../../assets/images/icons/data.png';
import icon_flasks from '../../../assets/images/icons/flasks.png';
import icon_mechanic from '../../../assets/images/icons/mechanic.png';
import icon_nurce from '../../../assets/images/icons/nurse.png';
import icon_promotion from '../../../assets/images/icons/promotion.png';

function TopJobsCategory() {
  const classes = styles();

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md">
        <Typography variant="h1" component="h1" className={classes.sectionHead}>
          <FormattedMessage {...messages.title} />
          <Link className={classes.blueLink} component="button">
            مشاهده همه
          </Link>
        </Typography>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_data}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مهندسی، برنامه نویسی و طراحی وب
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_nurce}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مهندسی، پتروشیمی و غذا
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_flasks}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مهندسی، پتروشیمی و غذا
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_mechanic}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مهندسی، مکانیک و سیالات
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_promotion}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  تحقیقات و بررسی
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_data}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مهندسی، پتروشیمی و غذا
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_nurce}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مراقبت و پرستاری
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.icon}
                image={icon_mechanic}
                title="Live from space album cover"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  component="h6"
                  variant="h6"
                  className={classes.cardTitle}
                >
                  مراقبت و پرستاری
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default TopJobsCategory;
