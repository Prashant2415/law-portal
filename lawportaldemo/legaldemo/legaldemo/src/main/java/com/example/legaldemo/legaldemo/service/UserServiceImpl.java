package com.example.legaldemo.legaldemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.legaldemo.legaldemo.model.UserDetails;
import com.example.legaldemo.legaldemo.repo.UserRepo;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepo userrepo;
	@Override
	public UserDetails saveDetails(UserDetails userdetail)
	{
		return userrepo.save(userdetail);
	}
	@Override
	public List<UserDetails> getAll()
	{
		return userrepo.findAll();
	}
	@Override
	public List<UserDetails> findByUsername(String username)
	{
		
		return userrepo.findByUsername(username);
	}
}
