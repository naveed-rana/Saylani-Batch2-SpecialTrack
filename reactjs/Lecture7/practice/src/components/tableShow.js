import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class TableShow extends Component {
  render() {
    const { classes } = this.props;

    return (

      <div className="App">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell >Discription</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Update</TableCell>
                <TableCell >Delete </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map(row => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                 {row.desc}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small" color="primary">
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={()=>this.props.deleteHandler(row.price)} variant="outlined" size="small" color="primary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
               ))} 
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

TableShow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableShow);
