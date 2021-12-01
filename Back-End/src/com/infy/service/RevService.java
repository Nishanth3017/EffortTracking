package com.infy.service;

import com.infy.model.Reviewer;

public interface RevService {
	public void saveDetails(Reviewer rev) throws Exception;
	public void login(Reviewer rev) throws Exception;
}
