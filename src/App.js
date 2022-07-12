import React, {useContext} from 'react';
import { TreesContext } from './';

// useCOntext to load a provider context and map the data to the input
function App() {
    const {trees} = useContext(TreesContext)
    return (
      <div>
        <h1>Trees I've Heard Of</h1>
        <ul>
            {trees.map(tree => (
            <li key={tree.id}>{tree.type}</li>
            ))}
        </ul>
      </div>
    )
}

export default App;