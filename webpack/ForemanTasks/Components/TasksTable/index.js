import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksTablePage from './TasksTablePage';
import reducer from './TasksTableReducer';
import * as actions from './TasksTableActions';
import {
  selectStatus,
  selectError,
  selectResults,
  selectPagitation,
  selectItemCount,
  selectSort,
  selectActionName,
  selectSelectedRows,
  selectClicked,
} from './TasksTableSelectors';

const mapStateToProps = state => ({
  status: selectStatus(state),
  error: selectError(state),
  sort: selectSort(state),
  results: selectResults(state),
  pagination: selectPagitation(state),
  itemCount: selectItemCount(state),
  actionName: selectActionName(state),
  selectedRows: selectSelectedRows(state),
  clicked: selectClicked(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const reducers = { tasksTable: reducer };

export default connect(mapStateToProps, mapDispatchToProps)(TasksTablePage);
