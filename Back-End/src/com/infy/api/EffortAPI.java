package com.infy.api;
import java.util.List;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infy.model.Effort;
import com.infy.model.Effort1;
import com.infy.model.Employee;
import com.infy.service.EmpService;
import com.infy.utility.ContextFactory;


@CrossOrigin
@RestController
@RequestMapping("effortAPI")
public class EffortAPI {
	
	private EmpService service;
	private Environment environment;
	@RequestMapping(value="getDetails",method=RequestMethod.GET)
	public ResponseEntity<List<Object[]>> getDetails(){
		ResponseEntity<List<Object[]>> res = null;
		service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
		try {
					List<Object[]> tasks=service.getdetails();
					res= new ResponseEntity<List<Object[]>>(tasks,HttpStatus.OK);
					return res;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			}
		return res;
}	
	@RequestMapping(value="effort",method=RequestMethod.POST)
	public ResponseEntity<Effort> effort(@RequestBody Effort eff){
		String message;
		
		try{
			service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
			service.effort(eff);
			message = new String("success");
			return new ResponseEntity<Effort>(eff,HttpStatus.OK);
		
		}
		catch(Exception e)
		{
			message =  new String("Fail");
			Environment env=ContextFactory.getContext().getEnvironment();
			return new ResponseEntity<Effort>(eff,HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value="View",method=RequestMethod.GET)
	public ResponseEntity<List<Object[]>> view(){
		ResponseEntity<List<Object[]>> res = null;
		String message;
		try{
			service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
			List<Object[]>tasks=service.view();
			message = new String("success");
			res= new ResponseEntity<List<Object[]>>(tasks,HttpStatus.OK);
			return res;
		}
		catch(Exception e)
		{
		}
		return res;
	}
//	@RequestMapping(value="update",method=RequestMethod.POST)
//	public ResponseEntity<Effort1>updateEffort(@RequestBody Effort1 eff)
//	{
//	try
//	{
//		service=(EmpService) ContextFactory.getContext().getBean(EmpService.class);
//		service.updateEffort(eff);
//		return new ResponseEntity<Effort1>(eff,HttpStatus.OK);
//	}
//	catch(Exception e)
//	{
//		Environment env=ContextFactory.getContext().getEnvironment();
//		return new ResponseEntity<Effort1>(eff,HttpStatus.BAD_REQUEST);
//	}
//	}
}
