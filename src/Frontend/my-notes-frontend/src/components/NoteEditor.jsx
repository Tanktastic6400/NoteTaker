import React from "react";
import '../CSS/NoteEditor.css';

function NoteEditor({ title, content }) {
    //This needs to be able to display a note and have fields that are editable
    //fields need to be filled in based on the props "title" and "content" where 
    //the title box is filled with the title text and the body of the editor is filled with content.
    function handleSave() {

    }
    return (
        <div className="noteForm">
            <div className="boxes">
                <div className="title">
                    <textarea className="titleArea">This is the title</textarea>
                </div>

                <div className="contentArea">
                    <textarea className="textBody">this is the body.</textarea>

                </div>

            </div>

            <div className= "buttonContainer">

                <button
                    className="button"
                    onClick={handleSave}
                    label="Save"
                    key={title}>Save</button>
                <button
                    className="button"
                    onClick={handleSave}
                    label="Save"
                    key={title}>Save</button>
                <button
                    className="button"
                    onClick={handleSave}
                    label="Save"
                    key={title}>Save</button>
            </div>

        </div>
    );


}

export default NoteEditor;