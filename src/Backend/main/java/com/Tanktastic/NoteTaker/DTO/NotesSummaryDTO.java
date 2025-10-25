package com.Tanktastic.NoteTaker.DTO;

import java.time.LocalDateTime;

public class NotesSummaryDTO {
   private Long id;
    private String title;

    private LocalDateTime createdAt;

    public NotesSummaryDTO(Long id, String title,LocalDateTime createdAt){
        this.id = id;
        this.title = title;

        this.createdAt = createdAt;
    }

    public String getTitle() {
        return title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
