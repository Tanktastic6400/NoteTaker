import React from 'react';
import NoteSideBar from '../components/NoteSidebar';
import NoteEditor from '../components/NoteEditor';
import "../CSS/NoteWorkspace.css";


function NoteWorkspace() {
    return (
        <div >
            <div className="workspace">
            <NoteSideBar />
            <NoteEditor className="editor"/>

            </div>
            {/* <table >
                <tbody>
                    <td >
                        <NoteSideBar />

                    </td>
                    <td>

                        <NoteEditor />
                    </td>
                </tbody>
            </table> */}
        </div>
    )
}

export default NoteWorkspace;