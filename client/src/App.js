import React, {useState} from 'react';
import Home from './views/Home';

import NodeContext from './utils/NodeContext';

function App() {

  const [nodeState, setNodeState] =  useState({
    nodes: [],
    input: ''
  })
   
  nodeState.handleInputChange = event => {
    setNodeState({...nodeState, [event.target.name]: event.target.value});
  }

  // just render the current nodes in the tree
  nodeState.handleViewNodes = () => {
    
  }

  // event.target.value will be the int value, then add to current state and view
  nodeState.handleAddNode = event => {
  }

  // event.target.value will be int value of node user wants
  nodeState.handleFindNode = event => {
  }

  // delete node of event.target.value
  nodeState.handleDeleteNode = event => {

  }
// switch case for either dfs or bfs for event.target.value (selection) 
  nodeState.handlePrintNode = event => {

  }

  return (
    <NodeContext.Provider value={nodeState}>
      <Home/>
    </NodeContext.Provider>
  );
}

export default App;
