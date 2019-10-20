import React, { useContext } from 'react';
import MContainer from 'mui/MContainer';
import { Typography, Grid } from '@material-ui/core';
import MButton from 'mui/MButton';
import img1 from 'app/assets/images/TopCompanies.png';
import img2 from 'app/assets/images/Oval_success.png';
import { TopCompaniesContext } from './topCompanies.provider';
import styles from './topCompanies.style';
import CompanyCard from './contents/companyCard';

function Folders() {
  const { list } = useContext(TopCompaniesContext);
  const classes = styles();

  return (
    <MContainer className={classes.root}>
      <Grid container>
        <Grid item md={1}>
          <img alt="cover" src={img2} className={classes.cover2} />
        </Grid>
        <Grid item md={10}>
          <div className={classes.head}>
            <Typography variant="h1">۵۰ شرکت برتر ایران</Typography>
            <Typography>
              کارفرمایان معمولا برای هر موقعیت شغلی حقوق ثابتی را با تغییرات
              ناچیز در نظر می گیرند. برای آن ها فرقی نمی کند.
            </Typography>
          </div>
          <Grid container spacing={4} className={classes.cardsContain}>
            {list.map(company => (
              <Grid item md={4}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.btnMoreContain}>
            <MButton linkGreen>مشاهده بیشتر</MButton>
          </div>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className={classes.advertiseCard} />
            </Grid>
            <Grid item md={6}>
              <div className={classes.advertiseCard} />
            </Grid>
          </Grid>

          <Grid container spacing={4} className={classes.cardsContain}>
            {list.map(company => (
              <Grid item md={4}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>

          <div className={classes.btnMoreContain}>
            <MButton linkGreen>مشاهده بیشتر</MButton>
          </div>
        </Grid>
        <Grid item md={1}>
          <img alt="cover" src={img1} className={classes.cover1} />
        </Grid>
      </Grid>
    </MContainer>
  );
}

export default Folders;
