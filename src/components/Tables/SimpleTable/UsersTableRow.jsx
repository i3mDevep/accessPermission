import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import moment from 'moment';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
function UsersTableRow({ users = [] }) {
  const data = [];
  users.forEach((user) => {
    data.push({
      name: user.name,
      identification: user.identification,
      gender: user.gender,
      age: user.age,
      address: user.address,
      telphone: user.telphone,
      sede: user.sede,
      time: typeof user.time === 'object' ? moment(user.time.toDate().toISOString()).format('MMMM Do YYYY, h:mm:ss a') : 'null',
    });
  });
  return (
    <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          icons={tableIcons}
          title='Users'
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Identification', field: 'identification' },
            { title: 'Gender', field: 'gender' },
            { title: 'Age', field: 'age' },
            { title: 'Address', field: 'address' },
            { title: 'Telphone', field: 'telphone' },
            { title: 'Sede', field: 'sede' },
            { title: 'Time', field: 'time' },
          ]}
          data={data}
          options={{
            draggable: false,
            filtering: false,
            search: true,
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
}
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.firestore.ordered.users,
  };
};
export default
connect(mapStateProps, null)(UsersTableRow);
