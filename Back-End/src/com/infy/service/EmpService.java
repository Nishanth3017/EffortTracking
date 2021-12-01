package com.infy.service;



import java.util.List;

import com.infy.model.Effort;
import com.infy.model.Effort1;
import com.infy.model.Employee;



public interface EmpService {
	
	public void saveDetails(Employee emp) throws Exception;
	public void login(Employee emp) throws Exception;
	public List<Object[]> getdetails() throws Exception;
	public void effort(Effort eff) throws Exception;
	public List<Object[]> view() throws Exception;
}