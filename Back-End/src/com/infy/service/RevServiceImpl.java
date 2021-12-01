package com.infy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infy.dao.ManagerDAO;
import com.infy.dao.ReviewerDAO;
import com.infy.model.Reviewer;
@Service("RevService")
@Transactional(readOnly = true)
public class RevServiceImpl implements RevService{

	@Autowired
	private ReviewerDAO revdao;
	
	@Transactional(readOnly = false)
	public void saveDetails(Reviewer rev) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("98");
		try {
			revdao.saveDetails(rev);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Transactional(readOnly = false)
	public void login(Reviewer rev) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("098");
		try{
			System.out.println("hii");
			revdao.login(rev);
			
	}catch(Exception e){
		throw e;
	}
		
		
	}

}
