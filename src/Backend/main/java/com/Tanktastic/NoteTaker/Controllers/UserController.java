package com.Tanktastic.NoteTaker.Controllers;


import com.Tanktastic.NoteTaker.Entities.User;
import com.Tanktastic.NoteTaker.Repositories.NoteRepository;
import com.Tanktastic.NoteTaker.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping()
    public User grabUser(@RequestParam String username, @RequestParam String password){
        return userRepository.findUserByUsernameAndPassword(username, password);
    }

    @PostMapping("signup")
    public void signUpUser(@RequestParam String username, @RequestParam String email, @RequestParam String password){

    }


}


