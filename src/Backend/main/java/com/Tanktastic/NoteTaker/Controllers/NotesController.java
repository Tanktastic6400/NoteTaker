package com.Tanktastic.NoteTaker.Controllers;

import com.Tanktastic.NoteTaker.DTO.NotesDTO;
import com.Tanktastic.NoteTaker.Entities.Notes;
import com.Tanktastic.NoteTaker.Entities.User;
import com.Tanktastic.NoteTaker.Repositories.NoteRepository;
import com.Tanktastic.NoteTaker.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;


@Controller
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;


    //TODO
    @GetMapping
    public String getAllNotes(Model model){

        List<Notes> notes = noteRepository.findNotesByUserId(1L);

        List<NotesDTO> noteDTOs = notes.stream()
                .map(n -> new NotesDTO(n.getTitle(),n.getContent(),n.getCreatedAt().toLocalDateTime()))
                .collect(Collectors.toList());

        model.addAttribute("information", noteDTOs);

        return "notes";
    }

    //TODO
    //createNote
    @PostMapping("create")
    public String createNote(@RequestParam String title, @RequestParam String note){
        User tempUser = userRepository.findById(1L).get();

        Notes tempNote = new Notes();
        tempNote.setTitle(title);
        tempNote.setContent(note);
        tempNote.setUser(tempUser);
        tempNote.setCreatedAt(new Timestamp(System.currentTimeMillis()));


        noteRepository.save(tempNote);
        return "redirect:/notes";
    }
    //TODO
    //viewNote()
    //TODO
    //showEditForm()
    //TODO
    //updateNote()
    @PutMapping("update")
    public String updateNote(@RequestParam Long id, @RequestParam String title, @RequestParam String note){

        Notes tempNote = noteRepository.findById(id).get();
        tempNote.setTitle(title);
        tempNote.setContent(note);
        tempNote.setCreatedAt(new Timestamp(System.currentTimeMillis()));


        noteRepository.save(tempNote);
        return "redirect:/notes";
    }
    //TODO
    //deleteNote
    @DeleteMapping("delete")
    public String deleteNote(@RequestParam Long id){
         noteRepository.delete(noteRepository.findById(id).get());
        return "redirect:/notes";

    }
}
