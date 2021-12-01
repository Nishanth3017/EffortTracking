package com.infy.dao;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.infy.entity.EffortEntity;
import com.infy.entity.EmployeeEntity;
import com.infy.model.Effort;
import com.infy.model.Effort1;
import com.infy.model.Employee;


@Repository("dao")
public class EmpDAOImpl implements EmpDAO {
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void saveDetails(Employee emp) throws Exception {
		Session session=null;
		session = sessionFactory.getCurrentSession();
		EmployeeEntity empEntity = new EmployeeEntity();
		EffortEntity eff= new EffortEntity();
			empEntity.setName(emp.getName());
			empEntity.setDateOfBirth(emp.getDateOfBirth());
			empEntity.setPassword(emp.getPassword());
			empEntity.setStream(emp.getStream());
			empEntity.setCnfpassword(emp.getCnfpassword());
			Integer id=	(Integer) session.save(empEntity);
	emp.setEmpId(id);
			eff.setName(emp.getName());
			eff.setEmpId(emp.getEmpId());
			eff.setEffort(0);
			session.save(eff);
		
	}
	@Override
	public List<Object[]> getdetails() {
		
		Session session = sessionFactory.getCurrentSession();
//		Query query = session.createQuery("select empId,name from EmployeeEntity");
//		List<Object[]> tasks = query.getResultList();
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaQuery<Object[]> criteriaQuery = criteriaBuilder.createQuery(Object[].class);
		Root<EmployeeEntity> root = criteriaQuery.from(EmployeeEntity.class);
		criteriaQuery.multiselect(root.get("name"), root.get("empId"),root.get("stream"));
		Query query = session.createQuery(criteriaQuery);

		List<Object[]> tasks = query.getResultList();
		return tasks;
				
	}

	@Override
	public void login(Employee emp) throws Exception {
		System.out.println("123");
		Integer empId=emp.getEmpId();
		String password=emp.getPassword();
		Session session = sessionFactory.getCurrentSession();
		Employee employee = null;
		
		EmployeeEntity employeeEntity=session.get(EmployeeEntity.class, empId);
		if(employeeEntity==null){
			throw new Exception();
		}
		if (employeeEntity != null ) {
				if(password.equals(employeeEntity.getPassword())){
				
			}	
				else{
					throw new Exception();
				}
		}	
	}
	@Override
	public void effort(Effort eff) throws Exception {
		Session session=null;
		System.out.println("hello");
		session = sessionFactory.getCurrentSession();
		EffortEntity effEntity = session.get(EffortEntity.class,eff.getEmpId());
		Integer updated=0;
		effEntity.setEmpId(eff.getEmpId());
		effEntity.setName(eff.getName());
		if(effEntity.getEffort()==null)
		{
			System.out.println("nk");
		if(eff.getAllocate().equals("HandsOn")){
			effEntity.setEffort(3);
		}
		else if(eff.getAllocate().equals("Objective")){
			effEntity.setEffort(1);
		}
		}
		else
		{
			
			if(eff.getAllocate().equals("HandsOn")){
			System.out.println("qwerty");
			 updated=effEntity.getEffort()+3;
			}
			else if(eff.getAllocate().equals("Objective")){
				
			 updated=effEntity.getEffort()+1;
				}
		}
		effEntity.setEffort(updated);
		
		session.saveOrUpdate(effEntity);
	}
	@Override
	public List<Object[]> view() throws Exception
	{
		Session session = sessionFactory.getCurrentSession();
//		Query query = session.createQuery("select empId,name from EmployeeEntity");
//		List<Object[]> tasks = query.getResultList();
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaQuery<Object[]> criteriaQuery = criteriaBuilder.createQuery(Object[].class);
		Root<EffortEntity> root = criteriaQuery.from(EffortEntity.class);
		criteriaQuery.multiselect(root.get("name"), root.get("empId"),root.get("effort"));
		Query query = session.createQuery(criteriaQuery);

		List<Object[]> tasks = query.getResultList();
		return tasks;
	}
//	@Override
//	public void updateEffort(Effort1 eff) throws Exception
//	{
//		Session session=null;
//		session = sessionFactory.getCurrentSession();
//		Integer val=eff.getEffort();
//		EffortEntity et=session.get(EffortEntity.class,eff.getEmpId());
//		Integer updated=et.getEffort()+eff.getEffort();
//		et.setEffort(updated);
//		session.persist(et);
//		
//	}
}

