package com.Tanktastic.NoteTaker.Repositories;


import com.Tanktastic.NoteTaker.Entities.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Notes, Long> {

    List<Notes> findNotesByUserId(Long user_id);




}
