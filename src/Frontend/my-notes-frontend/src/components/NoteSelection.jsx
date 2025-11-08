import React, { useEffect } from "react";
import { useState } from "react";
import "../CSS/NoteSelection.css";
import axios from 'axios';

function NoteSelection({ username, userID }) {

    const [Notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const testObject2 = [
  { id: "1", title: "why do I suck", createdAt: "2025-02-14T09:45:32" },
  { id: "2", title: "The benefits of perinial sun basking", createdAt: "2025-06-03T18:22:10" },
  { id: "3", title: "How can I be a great lover", createdAt: "2025-10-27T23:07:58" },
  { id: "4", title: "Maybe cats are secretly judging me", createdAt: "2025-03-12T12:01:22" },
  { id: "5", title: "Banana peels: underestimated hazards", createdAt: "2025-01-30T08:15:44" },
  { id: "6", title: "What if toast always lands butter side up?", createdAt: "2025-04-21T10:10:10" },
  { id: "7", title: "Memo to self: buy more pencils", createdAt: "2025-05-15T09:05:05" },
  { id: "8", title: "Should I apologize to my plants?", createdAt: "2025-06-06T14:22:33" },
  { id: "9", title: "Existential dread and coffee", createdAt: "2025-07-07T07:07:07" },
  { id: "10", title: "Ideas for a weird board game", createdAt: "2025-08-08T16:16:16" },
  { id: "11", title: "The time I almost became a ninja", createdAt: "2025-09-09T11:11:11" },
  { id: "12", title: "Laundry: the final boss", createdAt: "2025-10-10T20:20:20" },
  { id: "13", title: "How to survive a zombie apocalypse in style", createdAt: "2025-11-11T13:13:13" },
  { id: "14", title: "Are my socks conspiring against me?", createdAt: "2025-12-12T09:09:09" },
  { id: "15", title: "Note to self: stop overthinking microwaves", createdAt: "2025-01-13T17:17:17" },
  { id: "16", title: "Can one achieve enlightenment through memes?", createdAt: "2025-02-14T21:21:21" },
  { id: "17", title: "The ultimate guide to not caring too much", createdAt: "2025-03-15T06:06:06" },
  { id: "18", title: "Secrets of the office fridge", createdAt: "2025-04-16T19:19:19" },
  { id: "19", title: "Why do I always trip on air?", createdAt: "2025-05-17T08:08:08" },
  { id: "20", title: "Plans for world domination (probably)", createdAt: "2025-06-18T23:23:23" },
  { id: "100", title: "why do I suck", createdAt: "2025-02-14T09:45:32" },
  { id: "200", title: "The benefits of perinial sun basking", createdAt: "2025-06-03T18:22:10" },
  { id: "300", title: "How can I be a great lover", createdAt: "2025-10-27T23:07:58" },
  { id: "400", title: "Maybe cats are secretly judging me", createdAt: "2025-03-12T12:01:22" },
  { id: "500", title: "Banana peels: underestimated hazards", createdAt: "2025-01-30T08:15:44" },
  { id: "600", title: "What if toast always lands butter side up?", createdAt: "2025-04-21T10:10:10" },
  { id: "700", title: "Memo to self: buy more pencils", createdAt: "2025-05-15T09:05:05" },
  { id: "800", title: "Should I apologize to my plants?", createdAt: "2025-06-06T14:22:33" },
  { id: "900", title: "Existential dread and coffee", createdAt: "2025-07-07T07:07:07" },
  { id: "1000", title: "Ideas for a weird board game", createdAt: "2025-08-08T16:16:16" },
  { id: "1100", title: "The time I almost became a ninja", createdAt: "2025-09-09T11:11:11" },
  { id: "1200", title: "Laundry: the final boss", createdAt: "2025-10-10T20:20:20" },
  { id: "1300", title: "How to survive a zombie apocalypse in style", createdAt: "2025-11-11T13:13:13" },
  { id: "1400", title: "Are my socks conspiring against me?", createdAt: "2025-12-12T09:09:09" },
  { id: "1500", title: "Note to self: stop overthinking microwaves", createdAt: "2025-01-13T17:17:17" },
  { id: "1600", title: "Can one achieve enlightenment through memes?", createdAt: "2025-02-14T21:21:21" },
  { id: "1700", title: "The ultimate guide to not caring too much", createdAt: "2025-03-15T06:06:06" },
  { id: "1800", title: "Secrets of the office fridge", createdAt: "2025-04-16T19:19:19" },
  { id: "1900", title: "Why do I always trip on air?", createdAt: "2025-05-17T08:08:08" },
  { id: "2000", title: "Plans for world domination (probably)", createdAt: "2025-06-18T23:23:23" }
];

let testObject;


useEffect(() =>{


    axios.get('http://localhost:8080/notes')
    .then(response => { setNotes(response.data);
    
    }).catch(error => {
        console.error('There was an error!', error);
    });
},[]);





    function handleOptionsClick() {

    };

    function handleDoubleClick() {
        
    }
    function handleSingleClick(id) {
        setSelectedNoteId(id);
    }


    return (
        <div className="noteTable">
            <table >
                <thead>
                    <tr className="tableHeader">
                        <th className="tableHeader">Title</th>
                        
                        <th className="tableHeader">created at</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {Notes.map((note) =>  
                        <tr onClick={() => setSelectedNoteId(note.id)} onDoubleClick={() => handleDoubleClick()} key= {note.id} className={`noteContainer ${note.id === selectedNoteId ? "selected" : ""}`}>
                            <td>{note.title}</td>
                            
                            <td>{new Date(note.createdAt).toLocaleDateString()}</td>
                            <td><button onClick={() => handleOptionsClick()} className="note-menu buttons">☰</button></td>
                        </tr>
                    )}





                </tbody>


            </table>
        </div>
    );



}



export default NoteSelection;

/*

   <tr onClick={() => setSelectedNoteId(testObject[1].id)} className={`noteContainer ${testObject[1].id === selectedNoteId ? "selected" : ""}`}>
                        <td>{testObject[1].title}</td>
                        <td>|</td>
                        <td>{new Date(testObject[1].createdAt).toLocaleDateString()}</td>
                        <td><button onClick={handleClick} className="note-menu">⁝</button></td>
                    </tr>
                    <tr onClick={() => setSelectedNoteId(testObject[2].id)} className={`noteContainer ${testObject[2].id === selectedNoteId ? "selected" : ""}`}>
                        <td>{testObject[2].title}</td>
                        <td>|</td>
                        <td>{new Date(testObject[2].createdAt).toLocaleDateString()}</td>
                        <td><button onClick={handleClick} className="note-menu">⁝</button></td>
                    </tr>
*/