package com.infy.dao;

import com.infy.model.Reviewer;

public interface ReviewerDAO {
	public void saveDetails(Reviewer rev) throws Exception;
	public void login(Reviewer rev) throws Exception;
}
