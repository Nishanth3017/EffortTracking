package com.infy.dao;

import com.infy.model.Manager;


public interface ManagerDAO {
	
	public void saveDetails(Manager mng) throws Exception;
	public void login(Manager mng) throws Exception;
//	public void saveTabledetails(Question que) throws Exception;
}
