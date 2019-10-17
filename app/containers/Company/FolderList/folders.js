import React, { useContext, useState } from 'react';
import { Typography, Checkbox } from '@material-ui/core';
import MContainer from 'mui/MContainer';
import MTableBox from 'mui/MTableBox';
import MButton from 'mui/MButton';
import { FoldersContext } from './folders.provider';
import styles from './folders.style';
import NewFolderDialog from './contents/newFolderDialog';
import DeleteFolderDialog from './contents/deleteFolderDialog';
import { Link } from 'react-router-dom';

function Folders() {
  const { list, showBtnMore } = useContext(FoldersContext);
  const [openNewFolder, setOpenNewFolder] = useState(false);
  const [openConfirmDeleteFolder, setConfirmDeleteFolder] = useState(false);
  const classes = styles();

  const handleOpenNewFolder = () => {
    setOpenNewFolder(true);
  };

  const handleCloseNewFolder = () => {
    setOpenNewFolder(false);
  };

  const handleOpenDeleteFolder = () => {
    setConfirmDeleteFolder(true);
  };

  const handleCloseDeleteFolder = () => {
    setConfirmDeleteFolder(false);
  };

  return (
    <MContainer className={classes.root}>
      <div className={classes.headMenu}>
        <div>
          <Typography variant="h1" className={classes.head}>
            مدیریت پوشه ها
          </Typography>
        </div>
        <div>
          <MButton
            className={classes.btnDelete}
            iconic
            onClick={handleOpenDeleteFolder}
          >
            <i className="flaticon-delete" />
            حذف پوشه
          </MButton>
        </div>
        <div>
          <MButton btnBlue onClick={handleOpenNewFolder}>
            ایجاد پوشه
          </MButton>
        </div>
      </div>
      <MTableBox thin>
        <table>
          {list.map(folder => (
            <tr key={folder.id}>
              <td className="check-td">
                <Checkbox
                  value={folder.id}
                  inputProps={{
                    'aria-label': 'check',
                  }}
                />
              </td>
              <td>
                <div className="inline-head">
                  <div>نام پوشه:</div>
                  <div>{folder.name}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>نوع شغل:</div>
                  <div>{folder.jobType}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>رزومه ارسال شده:</div>
                  <div>{folder.resumeCount}</div>
                </div>
              </td>
              <td>
                <div className="inline-head">
                  <div>آخرین ویرایش:</div>
                  <div>{folder.lastModified}</div>
                </div>
              </td>
              <td>
                <Link to={`/Company/Folder/${folder.id}`} className={classes.btnView}>مشاهده پوشه</Link>
              </td>
            </tr>
          ))}
        </table>
        {showBtnMore && (
          <MButton className={classes.btnShowMore}>نمایش همه</MButton>
        )}
      </MTableBox>
      <NewFolderDialog open={openNewFolder} onClose={handleCloseNewFolder} />
      <DeleteFolderDialog
        open={openConfirmDeleteFolder}
        onClose={handleCloseDeleteFolder}
      />
    </MContainer>
  );
}

export default Folders;