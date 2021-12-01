package com.infy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.infy.dao.EmpDAO;
import com.infy.model.Effort;
import com.infy.model.Effort1;
import com.infy.model.Employee;
import com.infy.utility.ContextFactory;

@Service("EmpService")
@Transactional(readOnly = true)
public class EmpServiceImpl implements EmpService {

	
	@Autowired
	private EmpDAO dao;

	
	@Transactional(readOnly = false)
	public void saveDetails(Employee emp)  {
		System.out.println("98");
		try {
			dao.saveDetails(emp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	
	}
	
	@Transactional(readOnly = false)
	public void login(Employee emp) throws Exception {
		System.out.println("098");
		try{
			System.out.println("hii");
			dao.login(emp);
			
	}catch(Exception e){
		throw e;
	}
		
		
	
	}

	@Transactional(readOnly = false)
	public List<Object[]> getdetails() throws Exception {
		// TODO Auto-generated method stub
		try{
		return dao.getdetails();
		}
		catch(Exception e){
			throw e;
		}
	}

	@Transactional(readOnly = false)
	public void effort(Effort eff) throws Exception {
		try {
			System.out.println("hey");
			dao.effort(eff);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	@Transactional(readOnly = false)
	public List<Object[]> view() throws Exception{
		try
		{
			return dao.view();
		}
		catch(Exception e)
		{
			throw e;
		}
	}
//	@Transactional(readOnly = false)
//	public void updateEffort(Effort1 eff) throws Exception
//	{
//	try
//	{
//		dao.updateEffort(eff);
//	}
//	catch(Exception e)
//	{
//		e.printStackTrace();
//	}
//	}


	


	
}