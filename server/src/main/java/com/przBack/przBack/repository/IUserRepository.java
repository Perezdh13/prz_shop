package com.przBack.przBack.repository;

import com.przBack.przBack.entity.CUserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<CUserModel,Long> {
}
