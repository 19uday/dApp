import React from 'react';
import Web3 from 'web3'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../config'

class Deposits extends React.Component{

  state={
    tasks: [],
    taskCount: 0,
    todoList: {}
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.loadBlockchainData = this.loadBlockchainData.bind(this);
 }
  
componentDidMount() {
  window.addEventListener('load', this.handleLoad);
  window.addEventListener('load', this.loadBlockchainData);
}

async loadBlockchainData() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
  this.setState({ todoList })
  console.log(todoList);
  const taskCount = await todoList.methods.taskCount().call()
  this.setState({ taskCount })
  console.log(this.state.taskCount); 
  for (var i = 1; i <= taskCount; i++) {
    const task = await todoList.methods.tasks(i).call()
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  console.log(this.state.tasks); 
}

async handleLoad() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
        // Request account access if needed
        window.ethereum.enable();
        var firstAcc = await window.web3.eth.getAccounts();
        console.log(firstAcc);
        // Acccounts now exposed
    } catch (error) {
        // User denied account access...
    }
}
// Legacy dapp browsers...
else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    // Acccounts always exposed
    var accs = window.web3.eth.getAccounts();
    console.log(accs);
}
// Non-dapp browsers...
else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}
}



  render(){

  return (
    <React.Fragment>
      <div className="profilePic">
        <AccountCircleIcon />
      </div>
    </React.Fragment>
  );
  }
}

export default Deposits;
