import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MTableBox from 'mui/MTableBox';
import MContainer from 'mui/MContainer';
import { Box, Typography } from '@material-ui/core';
import { MTab, MTabs } from 'mui/MTabs';
import MButton from 'mui/MButton';
import styles from './advertisement.style';
import {
  AdvertisementContext,
  AdvertisementFilter,
} from './advertisement.provider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Advertisement() {
  const { list, load, showBtnMore } = useContext(AdvertisementContext);
  const classes = styles();
  const [tab, setTab] = useState(AdvertisementFilter.ALL_ADVERTISES);

  const handleTabChange = (e, val) => {
    setTab(val);
    load(val);
  };

  return (
    <MContainer className={classes.root}>
      <Typography variant="h1" className={classes.head}>
        مدیریت آگهی ها
      </Typography>
      <MTabs value={tab} className={classes.tabs} onChange={handleTabChange}>
        <MTab label="همه آگهی ها" value={AdvertisementFilter.ALL_ADVERTISES} />
        <MTab
          label="آگهی های فعال"
          value={AdvertisementFilter.ACTIVE_ADVERTISES}
        />
        <MTab
          label="آگهی های پیشنویس"
          value={AdvertisementFilter.DRAFT_ADVERTISES}
        />
        <MTab
          label="آگهی های بسته شده"
          value={AdvertisementFilter.CLOSED_ADVERTISES}
        />
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <MButton className={classes.btnAdd}>درج آگهی</MButton>
        </div>
      </MTabs>

      <MTableBox>
        <table>
          {list.map((add, index) => (
            <tr key={add.id}>
              <td>
                {index + 1}. {add.name}
              </td>
              <td className={classes.colorLight}>{add.date}</td>
              <td className={classes.colorBlue}>{add.status}</td>
              <td>
                <div className="inline-head with-border">
                  <div>رزومه ارسال شده</div>
                  <div>{add.resumeCount}</div>
                </div>
              </td>
              <td>
                <div className="inline-head with-border">
                  <div>باز شده</div>
                  <div>{add.openedCount}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>مشاهده</div>
                  <div>{add.seenCount}</div>
                </div>
              </td>
            </tr>
          ))}
        </table>
        {showBtnMore && (
          <MButton className={classes.btnShowMore}>نمایش همه</MButton>
        )}
      </MTableBox>
    </MContainer>
  );
}

Advertisement.propTypes = {};

export default Advertisement;
