import {createContext} from 'react';

const NodeContext = createContext({
    nodes: [],
    input: '',
    handleInputChange: () => {},
    handleViewNodes: () => {},
    handleAddNode: () => {},
    handleFindNode: () => {},
    handleDeleteNode: () => {},
    handlePrintNodes: () => {}
})


export default NodeContext;