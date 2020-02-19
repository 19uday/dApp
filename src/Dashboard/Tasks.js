import React from 'react';
import Web3 from 'web3'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../config';

class Tasks extends React.Component{

  state={
    tasks: [],
    taskCount: 0,
    todoList: null,
    loaded: false,
  }

  constructor(props) {
    super(props);
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
 }
  
componentDidMount() {
  window.addEventListener('load', this.loadBlockchainData);
}

async loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
  this.setState({ todoList });
  const taskCount = await todoList.methods.taskCount().call()
  this.setState({ taskCount });
  console.log(this.state.taskCount); 
  for (var i = 1; i <= taskCount; i++) {
    const task = await todoList.methods.tasks(i).call()
    this.setState({
      tasks: [...this.state.tasks, task],
      loaded: true
    })
  }
  console.log(this.state.tasks); 
}

  render(){

  return(
  <div>
          <Grid item xs={12} md={12} lg={12}>
          <Paper style={{padding: "5px",display: "flex",overflow: "auto",flexDirection: "column", height: 240,backgroundColor: "#FFFF2E"}}>
            <center>
              <h2>UI Design</h2><br/>
              <h4>Design robust and beautful UI for the application</h4>
              <h5>10hrs</h5>
              <h6>Deadline: 23rd Jan 2020</h6>
            </center>
          </Paper>
        </Grid> 
</div>);
}
}

export default Tasks;
