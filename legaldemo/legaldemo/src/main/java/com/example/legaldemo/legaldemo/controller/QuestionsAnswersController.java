package com.example.legaldemo.legaldemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.legaldemo.legaldemo.model.Questions;
import com.example.legaldemo.legaldemo.repo.QuestionsRepo;
import com.example.legaldemo.legaldemo.repo.UserRepo;
import com.example.legaldemo.legaldemo.service.QuestionsServiceImpl;


@RestController
@CrossOrigin
public class QuestionsAnswersController {
	@Autowired
	private UserRepo userrepo;
	@Autowired
	private QuestionsRepo qr;
	@Autowired
	private QuestionsServiceImpl questService;
	//public ResponseEntity<String> save
	@PostMapping("/saveQuestionAndAnswer")
	public ResponseEntity<String> saveEmployees(@RequestBody Questions questions)
	{
		qr.save(questions);
		return ResponseEntity.ok("Data saved");
	}
	@GetMapping("/getQuestionAndAnswer")
	public List<Questions> getQuestionsAndAnswer()
	{
		List<Questions> quest = qr.findAll();
		List<Questions> sortedData = questService.sortData(quest);
		return sortedData;
	}
	@GetMapping("/getQuestionAndAnswerTitle/{title}")
	public List<Questions> searchTitle(@PathVariable String title)
	{
		System.out.println(title);
		List<Questions> searchQuestion=qr.searchTitle(title);
		System.out.println(searchQuestion.size());
		List<Questions> sortedData = questService.sortData(searchQuestion);
		return sortedData;
	}
}
