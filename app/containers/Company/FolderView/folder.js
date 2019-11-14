import React, { useContext } from 'react';
import MContainer from 'mui/MContainer';
import { Typography, Avatar, Grid, CardContent } from '@material-ui/core';
import MButton from 'mui/MButton';
import avatar from 'app/assets/images/avatar.jpeg';
import Search from './contents/search';
import styles from './folder.style';
import { FolderContext } from './folder.provider';
import { MBtnLink } from 'mui/index';

function Folder() {
  const { folder } = useContext(FolderContext);
  const classes = styles();
  return (
    <div>
      <Search />
      <MContainer>
        <div className={classes.panel}>
          <div className={classes.panelHead}>
            <div>
              <Typography variant="h2">نام پوشه: {folder.name}</Typography>
            </div>
            <div>
              <MButton className={classes.btnEdit}>ویرایش</MButton>
              <div>{folder.lastModified}</div>
            </div>
          </div>
          <div className={classes.statusContain}>
            <div>
              لیست کوتاه
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              تماس گرفته شده
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              مصاحبه تلفنی
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              مصاحبه حضوری
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              دعوت شده
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              ارسال پیشنهاد
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              استخدام شده
              <div className={classes.statusNumber}>2</div>
            </div>
            <div>
              رد شده
              <div className={classes.statusNumber}>2</div>
            </div>
          </div>
          <div className={classes.requestsContain}>
            {folder.requests &&
              folder.requests.map(request => (
                <div key={request.id} className={classes.request}>
                  <div className={classes.col_avatar}>
                    <Avatar
                      src={avatar}
                      alt="user name"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.col_info}>
                    <Typography variant="h3">{request.name}</Typography>
                    <Typography>{request.jobType}</Typography>
                  </div>
                  <div className={classes.col_icons}>
                    <Grid container space={5} className={classes.icons}>
                      <Grid item md={4}>
                        <i className="i-company" />
                        {request.company}
                      </Grid>
                      <Grid item md={4}>
                        <i className="i-location" />
                        {request.city}
                      </Grid>
                      <Grid item md={4}>
                        <i className="flaticon-calendar" />
                        {request.age}
                      </Grid>
                    </Grid>
                  </div>
                  <div className={classes.col_btns}>
                    <MButton className={classes.btnDescription}>
                      توضیحات
                    </MButton>
                    <MBtnLink
                      to="/Company/Folder/CV"
                      className={classes.btnView}
                    >
                      مشاهده
                    </MBtnLink>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </MContainer>
    </div>
  );
}

export default Folder;
