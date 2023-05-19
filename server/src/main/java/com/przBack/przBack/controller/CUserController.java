package com.przBack.przBack.controller;

import com.przBack.przBack.entity.CUserModel;
import com.przBack.przBack.service.CUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class CUserController {
    @Autowired
    CUserService cUserService;

    @GetMapping("")
    private List<CUserModel> readUser(){
        return cUserService.readUser();
    }
    @PostMapping("")
    private void createUser(@RequestBody CUserModel model){
        cUserService.createUser(model);
    }
}
