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

import java.sql.Timestamp;
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

        List<Notes> notes = noteRepository.findNotesByUserId(1L);


        return notes.stream()
                .map(n -> new NotesSummaryDTO(n.getId(), n.getTitle(), n.getCreatedAt().toLocalDateTime()))
                .collect(Collectors.toList());
    }

    //TODO
//grab one note
    @GetMapping("/{id}")
    public ResponseEntity<NotesDTO> getNote(@PathVariable Long id) {
        Optional<Notes> optionalNote = noteRepository.findById(id);

        if (optionalNote.isPresent()) {
            Notes tempNote = optionalNote.get();
            NotesDTO note = new NotesDTO(tempNote.getId(), tempNote.getTitle(), tempNote.getContent(), tempNote.getCreatedAt().toLocalDateTime());

            return ResponseEntity.ok(note);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }


    //createNote
    @PostMapping
    public void createNote(@RequestParam String title, @RequestParam String note) {
        User tempUser = userRepository.findById(1L).get();

        Notes tempNote = new Notes();
        tempNote.setTitle(title);
        tempNote.setContent(note);
        tempNote.setUser(tempUser);
        tempNote.setCreatedAt(new Timestamp(System.currentTimeMillis()));


        noteRepository.save(tempNote);

    }


    //updateNote()
    @PutMapping("/{id}")
    public ResponseEntity<Notes> updateNote(@PathVariable Long id, @RequestParam String title, @RequestParam String note) {
        Optional<Notes> optionalNotes = noteRepository.findById(id);

        if (optionalNotes.isPresent()) {
            Notes tempNote = optionalNotes.get();
            tempNote.setTitle(title);
            tempNote.setContent(note);
            tempNote.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            noteRepository.save(tempNote);

            return ResponseEntity.ok(tempNote);

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


    }

    //TODO
    //deleteNote
    @DeleteMapping("/{id}")
    public ResponseEntity<Notes> deleteNote(@PathVariable Long id) {

        Optional<Notes> optionalNotes = noteRepository.findById(id);
        if (optionalNotes.isPresent()) {
            Notes tempNote = optionalNotes.get();

            noteRepository.delete(tempNote);

            return ResponseEntity.;

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
    }

}//end of class
