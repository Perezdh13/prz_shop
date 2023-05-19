package com.przBack.przBack.service;

import com.przBack.przBack.entity.CUserModel;
import com.przBack.przBack.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CUserService {
    @Autowired
    private IUserRepository iUserRepository;

    public List<CUserModel> readUser(){
        List<CUserModel> models = new ArrayList<>(iUserRepository.findAll());
        return models;
    }
    public void createUser(CUserModel model){
        iUserRepository.save(model);
    }
}
