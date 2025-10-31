import React from "react";
import "../CSS/NoteSelection.css";

function NoteSelection(username, userID) {

    const testObject = [
        { id: "1", title: "why do I suck", createdAt: "2025-02-14T09:45:32" },
        { id: "2", title: "The benefits of perinial sun basking", createdAt: "2025-06-03T18:22:10" },
        { id: "3", title: "How can I be a great lover", createdAt: "2025-10-27T23:07:58" }
    ];

    const date = testObject[1].createdAt.slice(0, 8);


    function handleClick(){

    };


    return (
        <table>
            <tbody>
                <tr className="noteContainer">
                    <td>{testObject[1].title}</td>
                    <td>|</td>
                    <td>{new Date(testObject[1].createdAt).toLocaleDateString()}</td>
                    <td><button onClick={handleClick} className="buttons">⁝</button></td>
                </tr>
            </tbody>


        </table>
    );



}

export default NoteSelection;