package com.infy.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.infy.entity.ManagerEntity;
import com.infy.entity.ReviewerEntity;
import com.infy.model.Manager;
import com.infy.model.Reviewer;
@Repository(value="revdao")
public class ReviewerDAOImpl implements ReviewerDAO {

	@Autowired
	SessionFactory sessionFactory;
	
	@Override
	public void saveDetails(Reviewer rev) throws Exception {
		// TODO Auto-generated method stub
		Session session=null;
		session = sessionFactory.getCurrentSession();
		ReviewerEntity revEntity = new ReviewerEntity();
		
			
			revEntity.setName(rev.getName());
			revEntity.setReviewerId(rev.getReviewerId());
			revEntity.setDateOfBirth(rev.getDateOfBirth());
			revEntity.setPassword(rev.getPassword());
			revEntity.setStream(rev.getStream());
			session.persist(revEntity);
		
	}

	@Override
	public void login(Reviewer rev) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("123");
		String reviewerId=rev.getReviewerId();
		String password=rev.getPassword();
		Session session = sessionFactory.getCurrentSession();
		Reviewer reviewer = null;
		
		ReviewerEntity reviewerEntity=session.get(ReviewerEntity.class,reviewerId);
		if(reviewerEntity==null){
			throw new Exception();
		}
		if (reviewerEntity != null ) {
				if(password.equals(reviewerEntity.getPassword())){
				
			}	
				else{
					throw new Exception();
				}
		}
		
	}

}
