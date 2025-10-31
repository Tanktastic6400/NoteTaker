import { useState } from 'react';
import Login from "./components/Login";
import NoteSelection from "./components/NoteSelection";
// import {BrowserRouter } from "react-router";
import NoteEditor from "./components/NoteEditor";
import './App.css';

function App() {

  return (
    <>
      <div className="App">
      {/* <Login/> */}
      {/* <NoteEditor/> */}
      <NoteSelection/>
     
      </div>
    </>
  )
}

export default App
