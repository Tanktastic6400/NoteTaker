package com.Tanktastic.NoteTaker.Controllers;

import com.Tanktastic.NoteTaker.DTO.NotesDTO;
import com.Tanktastic.NoteTaker.DTO.NotesSummaryDTO;
import com.Tanktastic.NoteTaker.Entities.Notes;
import com.Tanktastic.NoteTaker.Entities.User;
import com.Tanktastic.NoteTaker.Repositories.NoteRepository;
import com.Tanktastic.NoteTaker.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;


    @GetMapping
    public List<NotesSummaryDTO> getAllNotes() {

        List<Notes> notes = noteRepository.findAll();


        return notes.stream()
                .map(n -> new NotesSummaryDTO(n.getId(), n.getTitle(), n.getCreatedAt()))
                .collect(Collectors.toList());
    }

    //TODO
//grab one note
    @GetMapping("/{id}")
    public ResponseEntity<NotesDTO> getNote(@PathVariable Long id) {
        Optional<Notes> optionalNote = noteRepository.findById(id);

        if (optionalNote.isPresent()) {
            Notes tempNote = optionalNote.get();
            NotesDTO note = new NotesDTO(tempNote.getId(), tempNote.getTitle(), tempNote.getContent(), tempNote.getCreatedAt());

            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }


    //createNote
    @PostMapping("/saveNote")
    public ResponseEntity<Notes> saveNote(@RequestParam Long userId, @RequestParam String title, @RequestParam String note, @RequestParam Long noteId) {

        User tempUser = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        Notes tempNote = new Notes();
        if(noteId != 0){
            tempNote.setId(noteId);
        }
        tempNote.setTitle(title);
        tempNote.setContent(note);
        tempNote.setUser(tempUser);

        Notes savedNote = noteRepository.save(tempNote);
         return ResponseEntity.status(HttpStatus.CREATED).body(savedNote);

    }


        //updateNote()
        @PutMapping("/updateNote/{id}")
        public ResponseEntity<Notes> updateNote (@RequestParam Long userId,@PathVariable Long id, @RequestParam String title, @RequestParam String
        content){
            User tempUser = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
            Notes tempNote = noteRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found"));

            tempNote.setTitle(title);
            tempNote.setContent(content);
            tempNote.setUser(tempUser);


            Notes savedNote = noteRepository.save(tempNote);
            return ResponseEntity.ok(savedNote);


        }

        //TODO
        //deleteNote
        @DeleteMapping("/deleteNote/{id}")
        public ResponseEntity<Notes> deleteNote (@PathVariable Long id){

            Notes tempNote = noteRepository.findById(id).orElseThrow(() ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found"));
            noteRepository.delete(tempNote);
            return ResponseEntity.noContent().build();
        }

    }//end of class
