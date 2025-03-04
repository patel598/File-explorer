import React, { useState } from 'react';
import './index.css';

const ExplorerUI = ({ explorerData, setExplorerData }) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState('');

  const handleToggle = (flag) => {
    flag ? 
    setOpen(!open)
    :
    alert("You can't open it.")
  };

  const handleAdd = (isFolder) => {
    if (!newName.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      name: newName,
      isFolder,
      item: isFolder ? [] : [],
    };
    explorerData.item.push(newItem);
    setExplorerData({ ...explorerData });
    setNewName('');
  };

  const handleEdit = () => {
    const newNameInput = prompt('Enter new name:', explorerData.name);
    if (newNameInput) {
      explorerData.name = newNameInput;
      setExplorerData({ ...explorerData });
    }
  };

  const handleDelete = () => {
    setExplorerData(null, explorerData.id);
  };

  return (
    <div className='explorer-container'>
      <div className='explorer-body'>
        <span onClick={()=>handleToggle(explorerData.isFolder)}>
          {explorerData.isFolder ? '📁' : '📔'} {explorerData.name}
        </span>
        {""}
        <button className='editBtn btn' onClick={handleEdit}>Edit</button>
        <button className='deleteBtn btn' onClick={handleDelete}>Delete</button>
      </div>
      {explorerData.isFolder && (
        <div className={open ? 'open' : 'close'}>

          <input
            type='text'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder='New file/folder'
          />
          <button onClick={() => handleAdd(true)}>+ Folder</button>
          <button onClick={() => handleAdd(false)}>+ File</button>
          {explorerData.item.map((child) => (
            <ExplorerUI key={child.id} explorerData={child} setExplorerData={(updateFile, idToDelete) => {
              if (idToDelete) {
                explorerData.item = explorerData.item.filter(item => item.id !== idToDelete);
              } else {
                const index = explorerData.item.findIndex(item => item.id === child.id);
                if (index !== -1) explorerData.item[index] = updateFile;
              }
              setExplorerData({ ...explorerData });
            }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorerUI;
