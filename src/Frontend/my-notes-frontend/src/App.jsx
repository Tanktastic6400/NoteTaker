import { useState } from 'react';
import Login from "./components/Login";
import NoteSelection from "./components/NoteSelection";
// import {BrowserRouter } from "react-router";
import NoteEditor from "./components/NoteEditor";
import DropdownMenu from "./components/DropdownMenu";
import './App.css';
import NoteSidebar from './components/NoteSidebar';
import NoteWorkspace from './components/NoteWorkspace';

function App() {

  return (
    <>
      <div className="App">
      {/* <Login/> */}
      {/* <NoteEditor/> */}
      {/* <NoteSelection/> */}
      {/* <NoteSidebar/> */}
      <NoteWorkspace />
      {/* <DropdownMenu/> */}
     
      </div>
    </>
  )
}

export default App
