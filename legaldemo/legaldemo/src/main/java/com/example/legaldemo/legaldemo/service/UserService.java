package com.example.legaldemo.legaldemo.service;

import java.util.List;

import com.example.legaldemo.legaldemo.model.UserDetails;

public interface UserService {

	public UserDetails saveDetails(UserDetails userdetail);
	public List<UserDetails> getAll();
	public List<UserDetails> findByUsername(String username);
}
