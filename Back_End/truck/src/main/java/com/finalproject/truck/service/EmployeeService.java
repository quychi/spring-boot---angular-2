package com.finalproject.truck.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.EmployeeDao;
import com.finalproject.truck.model.Employee;

@Service
public class EmployeeService {
    @Autowired
	private EmployeeDao employeeDao;
    @Autowired
    private UserService userService;
	public List<Employee> getAll()
        {
            List<Employee> obj = employeeDao.findAll();
                return obj;
        }
	public Employee getEmployeeById(int id)
	{
		try
		{
			Employee sl = employeeDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}
		public Employee addEmployee(Employee r)
        {
            return r = employeeDao.save(r);
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

	public void deleteEmployee(int id) {
		employeeDao.deleteById(id);
	}
}
