package com.przBack.przBack.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name="user")
public class CUserModel {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
   @Column
    private String name;
   @Column
    private String lastname;
   @Column
    private String nick;
   @Column
    private String email;
   @Column
    private String password;

}
