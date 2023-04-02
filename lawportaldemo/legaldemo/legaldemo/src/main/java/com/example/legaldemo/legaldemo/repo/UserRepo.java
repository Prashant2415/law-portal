package com.example.legaldemo.legaldemo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.legaldemo.legaldemo.model.UserDetails;

public interface UserRepo extends JpaRepository<UserDetails,Long>{
	@Query(value="Select * from user_details where username= ?1",nativeQuery=true)
	public List<UserDetails> findByUsername(String username);
	
}
