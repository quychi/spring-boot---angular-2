package com.finalproject.truck.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Note;
@Repository
public interface NoteDao extends JpaRepository<Note, Integer> {

}
