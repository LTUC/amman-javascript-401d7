import React, { useContext } from 'react';
import { SettingsContext } from '../context/settings';

function SettingsEditor(props) {
  // consume the context in a functional component
  const context = useContext(SettingsContext);
  return (
    <>
      <h2>Site Settings </h2>
      <input placeholder='Site Title' name='title' onChange={(e)=>context.setTitle(e.target.value)} />
      <input placeholder="Twitter Handle" name="twitter" onChange={(e)=>context.setTwitter(e.target.value)}/>
    </>
  );
}

export default SettingsEditor;
