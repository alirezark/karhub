import React from 'react';
import MContainer from 'mui/MContainer';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CategoryCard from 'components/CategoryCard';
import messages from './messages';
import styles from './style';
import iconData from '../../../assets/images/icons/data.png';
import iconFlasks from '../../../assets/images/icons/flasks.png';
import iconMechanic from '../../../assets/images/icons/mechanic.png';
import iconNurse from '../../../assets/images/icons/nurse.png';
import iconPromotion from '../../../assets/images/icons/promotion.png';

function TopJobsCategory() {
  const classes = styles();

  return (
    <div className={classes.greyContainer}>
      <MContainer maxWidth="md">
        <Typography variant="h1" component="h1" className={classes.sectionHead}>
          <FormattedMessage {...messages.title} />
          <Link href="/Categories" className={classes.blueLink} component="a">
            مشاهده همه
          </Link>
        </Typography>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <CategoryCard
              title="مهندسی، برنامه نویسی و طراحی وب"
              icon={iconData}
            />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مهندسی، پتروشیمی و غذا" icon={iconNurse} />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مهندسی، پتروشیمی و غذا" icon={iconFlasks} />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مهندسی، مکانیک و سیالات" icon={iconMechanic} />
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.cardsRow}>
          <Grid item md={3}>
            <CategoryCard title="تحقیقات و بررسی" icon={iconPromotion} />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مهندسی، پتروشیمی و غذا" icon={iconData} />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مراقبت و پرستاری" icon={iconNurse} />
          </Grid>
          <Grid item md={3}>
            <CategoryCard title="مراقبت و پرستاری" icon={iconMechanic} />
          </Grid>
        </Grid>
      </MContainer>
    </div>
  );
}

export default TopJobsCategory;
