package com.Tanktastic.NoteTaker.Repositories;


import com.Tanktastic.NoteTaker.Entities.Notes;
import com.Tanktastic.NoteTaker.DTO.NotesSummaryDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Notes, Long> {

    List<Notes> findNotesByUserId(Long user_id);

    @Query("SELECT new com.Tanktastic.NoteTaker.DTO.NotesSummaryDTO(n.id, n.title, n.createdAt)"+
            "FROM notes n WHERE n.user.id= :userId")
    List<NotesSummaryDTO> findNotesSummaryByUserId(@Param("userId") Long userId);




}
