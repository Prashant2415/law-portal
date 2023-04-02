package com.example.legaldemo.legaldemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.legaldemo.legaldemo.model.Questions;
import com.example.legaldemo.legaldemo.service.QuestionsService;

@RestController
@RequestMapping("/questions")
@CrossOrigin
public class QuestionsController {
	@Autowired
	private QuestionsService qs;
	@PostMapping("/addquestions")
	public String addQuestions(@RequestBody Questions questions)
	{
		System.out.println("Question details "+questions.toString());
		qs.saveQuestions(questions);
		return("Question added");
	}
	@GetMapping("/getAll")
	public List<Questions> getAll()
	{
		
		return qs.getAll();
	}
	
}
