package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.ContactDao;
import com.finalproject.truck.model.Contact;

@Service
public class ContactService {
	
	@Autowired
	private ContactDao contactDao;
         @Autowired
        private UserService userService;
	
	public void addContact(Contact contact) {
                contact.setStatus("PENDING");
		contactDao.save(contact);
	}
	public void editContact(int id, Contact sl) {
                sl.setId(id);
                sl.setStatus(sl.getStatus());
//                sl.setUser(userService.getUserById(id_user));
		contactDao.save(sl);
	}
	public void deleteContact(int contactId) {
		contactDao.deleteById(contactId);
	}
	public Contact getContactById(int contactId) {
		return contactDao.getOne(contactId);
	}
	public List<Contact> findContactByStatus(String status){
		return contactDao.findContactByStatus(status);
	}
	public List<Contact> findAll(){
		return contactDao.findAll();
	}
}
