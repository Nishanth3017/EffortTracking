package com.infy.api;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infy.model.Manager;
import com.infy.service.MngService;
import com.infy.utility.ContextFactory;

@CrossOrigin
@RestController
@RequestMapping("mngAPI")
public class MngAPI {
	private MngService service;
	private Environment environment;
	@RequestMapping(value="add",method=RequestMethod.POST)
	public ResponseEntity<Manager> saveDetails(@RequestBody Manager mng){
		service=(MngService) ContextFactory.getContext().getBean(MngService.class);
		System.out.println("hey");
				try {
			service.saveDetails(mng);
			return new ResponseEntity<Manager>(mng,HttpStatus.OK);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			environment=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Manager>(mng,HttpStatus.BAD_REQUEST);
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
	public ResponseEntity<Manager> login(@RequestBody Manager mng){
		String message;
		
		try{
			System.out.println("hello");
			service=(MngService) ContextFactory.getContext().getBean(MngService.class);
			service.login(mng);
			message = new String("success");
			return new ResponseEntity<Manager>(mng,HttpStatus.OK);
		
		}
		catch(Exception e)
		{
			message =  new String("Fail");
			Environment env=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Manager>(mng,HttpStatus.BAD_REQUEST);
		}
	}

}
