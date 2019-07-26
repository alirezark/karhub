import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import messages from './messages';
import styles from './style';
import icon1 from '../../../assets/images/icon-1.png';
import icon2 from '../../../assets/images/icon-2.png';
import icon3 from '../../../assets/images/icon-3.png';
import Link from '@material-ui/core/Link';

function HireUrgent() {
  const classes = styles();

  return (
    <Container maxWidth="md" mt={6} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.sectionHead}>
        استخدام های فوری
        <Link className={classes.blueLink} component="button">
          مشاهده همه
        </Link>
      </Typography>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon1}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon2}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon3}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon2}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon1}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6}>
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cover}
              image={icon3}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  مدیر فنی و پشتیبانی
                </Typography>
                <Grid container space={10} className={classes.icons}>
                  <Grid item md={6}>
                    <i className="i-company" />
                    {'ایرانسل'}
                  </Grid>
                  <Grid item md={6}>
                    <i className="i-location" />
                    {'تهران'}
                  </Grid>
                </Grid>
              </CardContent>
              <div className={classes.arrow}>
                <i className="i-arrow-left" />
              </div>
            </div>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}

export default HireUrgent;
