package com.infy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.infy.dao.ManagerDAO;
import com.infy.model.Manager;

@Service("MngService")
@Transactional(readOnly = true)
public class MngServiceImpl implements MngService{

	@Autowired
	private ManagerDAO managerdao;

	
	@Transactional(readOnly = false)
	public void saveDetails(Manager mng) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("98");
		try {
			managerdao.saveDetails(mng);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Transactional(readOnly = false)
	public void login(Manager mng) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("098");
		try{
			System.out.println("hii");
			managerdao.login(mng);
			
	}catch(Exception e){
		throw e;
	}
		
		
	}

}
