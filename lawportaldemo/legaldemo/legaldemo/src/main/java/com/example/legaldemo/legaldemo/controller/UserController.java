package com.example.legaldemo.legaldemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.legaldemo.legaldemo.model.UserDetails;
import com.example.legaldemo.legaldemo.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userservice;
	@PostMapping("/add")
	public String add(@RequestBody UserDetails userdetail)
	{
		System.out.println("Details "+userdetail.toString());
		userservice.saveDetails(userdetail);
		return("New user added"); 
	}
	@GetMapping("/getAll")
	public List<UserDetails> getAll()
	{
		return userservice.getAll();
	}
	@GetMapping("/{username}")
	public ResponseEntity<UserDetails> getUsername(@PathVariable String username) {
		System.out.println("username" +username);
		List<UserDetails> users = userservice.findByUsername(username);
		if(users.isEmpty()) {
			return new ResponseEntity<UserDetails>(new UserDetails(), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UserDetails>(users.get(0),HttpStatus.OK);
	}
}
