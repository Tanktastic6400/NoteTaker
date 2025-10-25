package com.Tanktastic.NoteTaker.Controllers;


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
    public String grabUser(@RequestParam String username, @RequestParam String password){
        userRepository.findUserByUsernameAndPassword(username, password);
    }

    @PostMapping("signup")
    public String signUpUser(@RequestParam String username, @RequestParam String email, @RequestParam String password){

    }


}


