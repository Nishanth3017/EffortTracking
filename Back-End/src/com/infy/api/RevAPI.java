package com.infy.api;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.infy.model.Reviewer;
import com.infy.service.RevService;
import com.infy.utility.ContextFactory;

@CrossOrigin
@RestController
@RequestMapping("revAPI")
public class RevAPI {
	private RevService service;
	private Environment environment;
	@RequestMapping(value="add",method=RequestMethod.POST)
	public ResponseEntity<Reviewer> saveDetails(@RequestBody Reviewer rev){
		service=(RevService) ContextFactory.getContext().getBean(RevService.class);
		System.out.println("hey");
				try {
			service.saveDetails(rev);
			return new ResponseEntity<Reviewer>(rev,HttpStatus.OK);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			environment=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Reviewer>(rev,HttpStatus.BAD_REQUEST);
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
	public ResponseEntity<Reviewer> login(@RequestBody Reviewer rev){
		String message;
		
		try{
			System.out.println("hello");
			service=(RevService) ContextFactory.getContext().getBean(RevService.class);
			service.login(rev);
			message = new String("success");
			return new ResponseEntity<Reviewer>(rev,HttpStatus.OK);
		
		}
		catch(Exception e)
		{
			message =  new String("Fail");
			Environment env=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Reviewer>(rev,HttpStatus.BAD_REQUEST);
		}
	}


}
