package com.Tanktastic.NoteTaker.DTO;

import java.time.LocalDateTime;

public class NotesDTO {
    private String title;
    private String content;
    private LocalDateTime createdAt;

    public NotesDTO(String title, String content,LocalDateTime createdAt){
        this.title = title;
        this.content= content;
        this.createdAt = createdAt;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
