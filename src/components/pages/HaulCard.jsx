import React, { useState, useEffect } from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const tableData = [
  { id: 1, name: 'PPP', ammount: 3 },
  { id: 2, name: 'POC', ammount: 2 },
  { id: 3, name: 'OBT', ammount: 1 },
]

const HaulCard = ({ title, expand }) => {
  const [swapIcon, setSwapIcon] = useState(true);

  useEffect(() => {
    return () => {
      setSwapIcon(expand);
    };
  }, [expand]);

  const onCollapseSegment = () => {
    setSwapIcon(!swapIcon)
  }

  return (
    <Paper elevation={3} className={`haul-card ${swapIcon ? '' : 'card-resize'}`}>
      <Grid container>
        <Grid container item xs={12} className="haul-title">
          <Grid item xs={1}>
            <LocalShippingIcon />
          </Grid>
          <Grid item xs={5} className="haul-title-description">
            <h3>{title}</h3>
            <p>251 - 750 miles</p>
          </Grid>
          <Grid item xs={5} className="haul-load">
            <div>
              <h4>06</h4>
              <p>Demand</p>
            </div>
            <Divider className="divider" orientation="vertical" flexItem />
            <div>
              <h4>12</h4>
              <p>Capacity</p>
            </div>
          </Grid>
          <Grid item xs={1} className="progress">
            <CircularProgressWithLabel
              variant="determinate"
              value={50}
              type="card"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} className="segcodes-btn">
          <button onClick={onCollapseSegment}>
            <h4>Segment Codes</h4>
            {swapIcon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
        </Grid>

        {swapIcon ? (
          <Grid item xs={12} className="segcodes-table-container">
            <Table className={`segcodes-table ${swapIcon ? 'visible' : ''}`}>
              <TableBody>
                {tableData.map((data) => (
                  <StyledTableRow key={data.id}>
                    <TableCell style={{ borderBottom: "none" }}>
                      {data.name}
                    </TableCell>
                    <TableCell align="right" style={{ borderBottom: "none" }}>{data.ammount}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>) : null}
      </Grid>
    </Paper >
  );
};

export default HaulCard;
