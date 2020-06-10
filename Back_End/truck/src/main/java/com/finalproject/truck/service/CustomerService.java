package com.finalproject.truck.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.CustomerDao;
import com.finalproject.truck.model.Customer;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerDao customerDao;
    @Autowired
    private UserService userService;
	public List<Customer> getAll()
        {
            List<Customer> obj = customerDao.findAll();
                return obj;
        }
	public Customer getCustomerById(int id)
	{
		try
		{
			Customer sl = customerDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}
		public Customer addCustomer(Customer r)
        {
            return r = customerDao.save(r);
        }
//        public Route updateCourse(int id, Course sl,int id_crt,int id_trainer) {
//                Course c = course.getOne(id);
//		//sl.setId(id);
//		c.setImgUrl(c.getImgUrl());
//                c.setName(c.getName());
//                c.setNumberOfLecture(c.getNumberOfLecture());
//                c.setBriefInfo(c.getBriefInfo());
//                c.setCreatedBy(userService.getUserById(id_crt));
//                c.setTrainer(userService.getUserById(id_trainer));
//                c.setOriginPrice(c.getOriginPrice());
//                c.setSalePrice(c.getSalePrice());
//                c.setRequirement(c.getRequirement());
//                c.setDescription(c.getDescription());
//		sl=course.save(c);
//                return sl;
//	
//	}

	public void deleteCustomer(int id) {
		customerDao.deleteById(id);
	}
}
