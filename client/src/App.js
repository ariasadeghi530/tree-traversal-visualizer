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

  nodeState.handleViewNodes = () => {

  }

  nodeState.handleAddNode = () => {

  }

  nodeState.handleFindNode = () => {

  }

  nodeState.handleDeleteNode = () => {

  }

  nodeState.handlePrintNode = () => {

  }

  return (
    <NodeContext.Provider value={nodeState}>
      <Home/>
    </NodeContext.Provider>
  );
}

export default App;
