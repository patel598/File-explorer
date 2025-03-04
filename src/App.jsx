import { useState } from 'react'

import { explorer } from './utils/data';
import ExplorerUI from './components/ExplorerUi';



function App() {
  const [explorerData, setExplorerData] = useState(explorer);


  return (
    <>
      <div className="">File Explorer</div>
        <ExplorerUI explorerData={explorerData} setExplorerData={setExplorerData} />
      
    </>
  )
}

export default App
