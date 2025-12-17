import { useState } from 'react';
import Login from "./components/Login";
import NoteSelection from "./components/NoteSelection";
// import {BrowserRouter } from "react-router";
import NoteEditor from "./components/NoteEditor";
import DropdownMenu from "./components/DropdownMenu";
import './App.css';
import NoteSidebar from './components/NoteSidebar';
import NoteWorkspace from './components/NoteWorkspace';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <Login/> */}
          {/* <NoteEditor/> */}
          {/* <NoteSelection/> */}
          {/* <NoteSidebar/> */}
          {/* <NoteWorkspace /> */}
          {/* <DropdownMenu/> */}
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/select" element={<NoteSelection/>}/>
            <Route path="/workspace/:noteId" element={<NoteWorkspace/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
