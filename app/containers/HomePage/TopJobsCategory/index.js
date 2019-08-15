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
import CategoryCard from 'components/CategoryCard';
import icon_data from '../../../assets/images/icons/data.png';
import icon_flasks from '../../../assets/images/icons/flasks.png';
import icon_mechanic from '../../../assets/images/icons/mechanic.png';
import icon_nurse from '../../../assets/images/icons/nurse.png';
import icon_promotion from '../../../assets/images/icons/promotion.png';

function TopJobsCategory() {
  const classes = styles();

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md">
        <Typography variant="h1" component="h1" className={classes.sectionHead}>
          <FormattedMessage {...messages.title} />
          <Link href='/Categories' className={classes.blueLink} component="a">
            مشاهده همه
          </Link>
        </Typography>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <CategoryCard title='مهندسی، برنامه نویسی و طراحی وب' icon={icon_data}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مهندسی، پتروشیمی و غذا' icon={icon_nurse}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مهندسی، پتروشیمی و غذا' icon={icon_flasks}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مهندسی، مکانیک و سیالات' icon={icon_mechanic}/>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <CategoryCard title='تحقیقات و بررسی' icon={icon_promotion}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مهندسی، پتروشیمی و غذا' icon={icon_data}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مراقبت و پرستاری' icon={icon_nurse}/>
          </Grid>
          <Grid item md={3}>
            <CategoryCard title='مراقبت و پرستاری' icon={icon_mechanic}/>
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default TopJobsCategory;
