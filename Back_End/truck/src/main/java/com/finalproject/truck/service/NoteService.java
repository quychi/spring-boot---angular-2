package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.CarDao;
import com.finalproject.truck.dao.NoteDao;
import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.Note;

@Service
public class NoteService {
	@Autowired
	private NoteDao noteDao;
    @Autowired
    private UserService userService;
	public List<Note> getAll()
        {
            List<Note> obj = noteDao.findAll();
                return obj;
        }

	public Note getNoteById(int id)
	{
		try
		{
			Note sl = noteDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}
		public Note addNote(Note r)
        {
            return r = noteDao.save(r);
        }
		public Note updateNote(int id, Note n) {
        	Note c = noteDao.getOne(id);
		//sl.setId(id);
		c.setNote(n.getNote());
		c=noteDao.save(c);
        return c;
	}

	public void deleteNote(int id) {
		noteDao.deleteById(id);
	}
}
