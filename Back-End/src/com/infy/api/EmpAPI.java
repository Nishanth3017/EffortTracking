package com.infy.api;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infy.model.Employee;

import com.infy.service.EmpService;

import com.infy.utility.ContextFactory;


@CrossOrigin
@RestController
@RequestMapping("empAPI")
public class EmpAPI {
	
	private EmpService service;
	private Environment environment;
	@RequestMapping(value="add",method=RequestMethod.POST)
	public ResponseEntity<Employee> saveDetails(@RequestBody Employee emp){
		service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
		System.out.println("hey");
				try {
			service.saveDetails(emp);
			emp.setMessage(environment.getProperty("Service.AddedSuccessfully"));
			return new ResponseEntity<Employee>(emp,HttpStatus.OK);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			environment=ContextFactory.getContext().getEnvironment();
			emp.setMessage(e.getMessage());
			return new ResponseEntity<Employee>(emp,HttpStatus.BAD_REQUEST);
		}
	}
	
//	@RequestMapping(value="que",method=RequestMethod.POST)
//	public ResponseEntity<Question> saveTableDetails(@RequestBody Question que){
//		EmpServiceImpl empImpl=(EmpServiceImpl)ContextFactory.getContext().getBean("EmpService");
//		try {
//			empImpl.saveTabledetails(que);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		Environment env=ContextFactory.getContext().getEnvironment();
//		ResponseEntity<Question> res=new ResponseEntity<>(que,HttpStatus.OK);
//		return res;
//	}
//	
//	
//	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public ResponseEntity<Employee> login(@RequestBody Employee emp){
		String message;
		
		try{
			System.out.println("hello");
			service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
			service.login(emp);
			message = new String("success");
			return new ResponseEntity<Employee>(emp,HttpStatus.OK);
		
		}
		catch(Exception e)
		{
			message =  new String("Fail");
			Environment env=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Employee>(emp,HttpStatus.BAD_REQUEST);
		}
	}
}
