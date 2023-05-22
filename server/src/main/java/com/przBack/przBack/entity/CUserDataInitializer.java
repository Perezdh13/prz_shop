package com.przBack.przBack.entity;

import com.przBack.przBack.repository.IUserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class CUserDataInitializer implements CommandLineRunner {

    private IUserRepository iUserRepository;
    @Autowired
    public void DataInitializer(IUserRepository iUserRepository){
        this.iUserRepository=iUserRepository;
    }

    public CUserDataInitializer(IUserRepository iUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    @PostConstruct
    public void run(String... args) throws Exception {
        CUserModel userAdmin = new CUserModel();
        userAdmin.setName("Pablo");
        userAdmin.setLastname("Pérez González");
        userAdmin.setNick("PRZ-Admin");
        userAdmin.setEmail("przperformance13@gmail.com");
        userAdmin.setPassword("password");
        iUserRepository.save(userAdmin);
    }
}
