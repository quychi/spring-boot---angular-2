package com.finalproject.truck.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.ErrorObject;
import com.finalproject.truck.model.ResponseMessage;
import com.finalproject.truck.model.Route;
import com.finalproject.truck.service.CarService;
import com.finalproject.truck.service.UserService;

@RestController
public class CarController {

    @Autowired
        private CarService carService;
//    @Autowired
//	private JwtTokenUtil tokenUtil;
	
	@Autowired
	private UserService userService;
     @RequestMapping(value="/cars" , method =RequestMethod.GET)
        public ResponseEntity<ResponseMessage> getAll()
	{
		ResponseMessage response = new ResponseMessage();
		List<Car> list = carService.getAll();
		response.setData(list);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
     @RequestMapping(value = "/carByRouteId")
 	public ResponseEntity<ResponseMessage> getCarByRouteId(@RequestParam int id)
	{
    	 ResponseMessage response = new ResponseMessage();
 		List<Car> list = carService.getCarByRouteId(id);
 		response.setData(list);
		if(list == null)
		{
			ErrorObject error = new ErrorObject(0, "Car not found");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, list == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}
   @RequestMapping(value = "/car")
    	public ResponseEntity<ResponseMessage> getCarById(@RequestParam int id)
	{
		ResponseMessage response = new ResponseMessage();
		Car u = carService.getCarById(id);
		response.setData(u);
		if(u == null)
		{
			ErrorObject error = new ErrorObject(0, "Car not found");
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
   @RequestMapping(value="/car/driver" , method=RequestMethod.POST)
   public ResponseEntity<ResponseMessage> addCourse(@RequestBody Car cr,@RequestParam int id_driver,HttpServletRequest request)
   {
       ResponseMessage response = new ResponseMessage();
       cr.setDriver(userService.getUserById(id_driver));
       cr = carService.addCar(cr);
       response.setData(cr);
       response.setMessage("success");
       response.setError(null);
	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
   }
   @RequestMapping(value="/car/driver", method=RequestMethod.PUT)
    public ResponseEntity<ResponseMessage> EditCourse(@RequestBody Car cr,@RequestParam int id_driver,HttpServletRequest request)
   {
       ResponseMessage response = new ResponseMessage();   
       cr=	carService.updateCar(cr.getId(), cr, id_driver);
	response.setData(cr);
	response.setMessage("success");
	response.setError(null);
	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
   }
 	
    @RequestMapping(value="/car", method = RequestMethod.DELETE)
        public ResponseEntity<ResponseMessage> deleteCar (@RequestParam int id)
        {
            ResponseMessage response = new ResponseMessage();
                carService.deleteCar(id);
                response.setData(true);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
        }     
}
