import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, shipTo, paymentMethod, amount) {
  return { id, date, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Jan, 2020', 'UI wireframe', 'Under review', 12),
  createData(1, '17 Jan, 2019', 'Motivation Research', 'Complete', 10),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function MyActivity() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Completions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Hours Spent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more activity
        </Link>
      </div>
    </React.Fragment>
  );
}
