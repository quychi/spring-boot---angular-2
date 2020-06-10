package com.finalproject.truck.controller;

import java.util.List;

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
import com.finalproject.truck.service.CarRouteService;
import com.finalproject.truck.service.CarService;
import com.finalproject.truck.service.UserService;

@RestController
public class CarRouteController {
	
	@Autowired
	private CarRouteService carRoute;
	
//@Autowired
//private JwtTokenUtil tokenUtil;

	@Autowired
	private UserService userService;

//	@RequestMapping(value = "/cars", method = RequestMethod.GET)
//	public ResponseEntity<ResponseMessage> getAll() {
//		ResponseMessage response = new ResponseMessage();
//		List<Car> list = car.getAll();
//		response.setData(list);
//		response.setMessage("success");
//		response.setError(null);
//		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/car")
//	public ResponseEntity<ResponseMessage> getRouteById(@RequestParam int id) {
//		ResponseMessage response = new ResponseMessage();
//		Car u = car.getCarById(id);
//		response.setData(u);
//		if (u == null) {
//			ErrorObject error = new ErrorObject(0, "Course not found");
//			response.setError(error);
//			response.setMessage("error");
//		} else {
//			response.setMessage("success");
//			response.setError(null);
//		}
//		return new ResponseEntity<ResponseMessage>(response,
//				u == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
//	}
//@RequestMapping(value="/route/employee" , method=RequestMethod.POST)
//    public ResponseEntity<ResponseMessage> addCourse(@RequestBody Route ro,@RequestParam int id,HttpServletRequest request)
//    {
//        ResponseMessage response = new ResponseMessage();
////        route.setTrainer(userService.getUserById(id));				//set employeee drives car (chua lam)
//        final String requestTokenHeader = request.getHeader("Authorization");
//        String jwtToken = null;
//        // JWT Token is in the form "Bearer token". Remove Bearer word and get
//        // only the Token
//        if (requestTokenHeader != null && requestTokenHeader.startsWith("Token "))
//                jwtToken = requestTokenHeader.substring(6);
//        int id_crt = tokenUtil.getIdFromToken(jwtToken);
//        cr.setCreatedBy(userService.getUserById(id_crt));
//        System.out.println(cr.getBriefInfo());
//        cr = course.addCourse(cr);
//        response.setData(cr);
//        response.setMessage("success");
//        response.setError(null);
//	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//    }
//@RequestMapping(value="/course/trainer", method=RequestMethod.PUT)
//     public ResponseEntity<ResponseMessage> EditCourse(@RequestBody Course cr,@RequestParam int id,HttpServletRequest request)
//    {
//        ResponseMessage response = new ResponseMessage();
//        final String requestTokenHeader = request.getHeader("Authorization");
//        String jwtToken = null;
//        // JWT Token is in the form "Bearer token". Remove Bearer word and get
//        // only the Token
//        if (requestTokenHeader != null && requestTokenHeader.startsWith("Token "))
//                jwtToken = requestTokenHeader.substring(6);
//        int id_crt = tokenUtil.getIdFromToken(jwtToken);
//        cr.setCreatedBy(userService.getUserById(id_crt));
//        System.out.println(cr.getBriefInfo());
//        cr = course.addCourse(cr);
//      
//        cr=	course.updateCourse(cr.getId(),cr,id_crt,id);
//	response.setData(cr);
//	response.setMessage("success");
//	response.setError(null);
//	return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//    }

	@RequestMapping(value = "/carRoute", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> newCarRoute(@Valid @RequestBody Car c, @RequestBody Route r) {
		carRoute.addCar_Route(c, r);
		ResponseMessage response = new ResponseMessage();
		response.setData("Đây là api thêm cho bảng phụ carRoute!");
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}

//	@RequestMapping(value = "/car", method = RequestMethod.PUT)
//	public ResponseEntity<ResponseMessage> EditCar(@RequestBody Car ec, @RequestParam int id) {
//		Car c = car.getCarById(id);
//		c = ec;
//		ResponseMessage response = new ResponseMessage();
//		response.setData(c);
//		response.setMessage("success");
//		response.setError(null);
//		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//	}

	@RequestMapping(value = "/carRoute", method = RequestMethod.DELETE)		//xử lý ở fron End tìm idCar & idRoute rồi tìm id bảng phụ và gọi api này vs id bảng phụ
	public ResponseEntity<ResponseMessage> deleteCarRoute(@RequestParam int id) {
		ResponseMessage response = new ResponseMessage();
		carRoute.deleteCarRoute(id);
		response.setData(true);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
}
