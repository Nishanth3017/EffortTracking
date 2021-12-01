package com.infy.entity;

import javax.persistence.Table;
import javax.persistence.Entity;

import javax.persistence.Id;


@Entity
@Table
public class EffortEntity {
	@Id
	private Integer empId;
	private String name;
	private Integer effort;

	public Integer getEmpId() {
		return empId;
	}
	public void setEmpId(Integer empId) {
		this.empId = empId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getEffort() {
		return effort;
	}
	public void setEffort(Integer effort) {
		this.effort = effort;
	}
}
