package com.Tanktastic.NoteTaker.Repositories;


import com.Tanktastic.NoteTaker.Entities.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Notes, Long> {



}
