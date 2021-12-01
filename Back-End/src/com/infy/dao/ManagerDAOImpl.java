package com.infy.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.infy.entity.ManagerEntity;
import com.infy.model.Manager;

@Repository(value="mngdao")
public class ManagerDAOImpl implements ManagerDAO {

	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void saveDetails(Manager mng) throws Exception {
		// TODO Auto-generated method stub
		Session session=null;
		session = sessionFactory.getCurrentSession();
		ManagerEntity mngEntity = new ManagerEntity();
		
			
			mngEntity.setName(mng.getName());
			mngEntity.setManagerId(mng.getManagerId());
			mngEntity.setDateOfBirth(mng.getDateOfBirth());
			mngEntity.setPassword(mng.getPassword());
			mngEntity.setStream(mng.getStream());
			session.persist(mngEntity);
		
	}

	@Override
	public void login(Manager mng) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("123");
		String managerId=mng.getManagerId();
		String password=mng.getPassword();
		Session session = sessionFactory.getCurrentSession();
		Manager manager = null;
		
		ManagerEntity managerEntity=session.get(ManagerEntity.class, managerId);
		if(managerEntity==null){
			throw new Exception();
		}
		if (managerEntity != null ) {
				if(password.equals(managerEntity.getPassword())){
				
			}	
				else{
					throw new Exception();
				}
		}
		
	}

}
