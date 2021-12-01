package com.infy.service;


import com.infy.model.Manager;

public interface MngService {
	public void saveDetails(Manager mng) throws Exception;
	public void login(Manager mng) throws Exception;
}
