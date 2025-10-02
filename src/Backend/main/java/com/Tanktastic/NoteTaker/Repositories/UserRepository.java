package com.Tanktastic.NoteTaker.Repositories;

import com.Tanktastic.NoteTaker.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
