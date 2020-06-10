package com.finalproject.truck.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.truck.model.ErrorObject;
import com.finalproject.truck.model.Note;
import com.finalproject.truck.model.ResponseMessage;
import com.finalproject.truck.service.NoteService;

@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

     @RequestMapping(value="/notes" , method =RequestMethod.GET)
        public ResponseEntity<ResponseMessage> getAll()
	{
		ResponseMessage response = new ResponseMessage();
		List<Note> list = noteService.getAll();
		response.setData(list);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
    
   @RequestMapping(value = "/note")
    	public ResponseEntity<ResponseMessage> getCarById(@RequestParam int id)
	{
		ResponseMessage response = new ResponseMessage();
		Note u = noteService.getNoteById(id);
		response.setData(u);
		if(u == null)
		{
			ErrorObject error = new ErrorObject(0, "Note not found");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, u == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}
   @RequestMapping(value="/note" , method=RequestMethod.POST)
   public ResponseEntity<ResponseMessage> addCourse(@RequestBody Note n, HttpServletRequest request)
   {
       ResponseMessage response = new ResponseMessage();
       n = noteService.addNote(n);
       response.setData(n);
       response.setMessage("success");
       response.setError(null);
	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
   }
   @RequestMapping(value="/note", method=RequestMethod.PUT)
    public ResponseEntity<ResponseMessage> EditCourse(@RequestBody Note n,HttpServletRequest request)
   {
       ResponseMessage response = new ResponseMessage();   
       n= noteService.updateNote(n.getId(), n);
	response.setData(n);
	response.setMessage("success");
	response.setError(null);
	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
   }
 	
    @RequestMapping(value="/note", method = RequestMethod.DELETE)
        public ResponseEntity<ResponseMessage> deleteCar (@RequestParam int id)
        {
            ResponseMessage response = new ResponseMessage();
                noteService.deleteNote(id);
                response.setData(true);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
        }
}
