package com.example.legaldemo.legaldemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.legaldemo.legaldemo.model.Answers;
import com.example.legaldemo.legaldemo.repo.AnswersRepo;
import com.example.legaldemo.legaldemo.service.AnswersService;
@RestController
@RequestMapping
@CrossOrigin
@Transactional
public class AnswerController {
	@Autowired
	private AnswersService as;
	
	
	@Autowired
	private AnswersRepo ap;
	@PostMapping("/addanswers/{id}")
	public String addanwers(@RequestBody Answers answers, @PathVariable("id") Long question_id)
	{
		
		System.out.println("question id "+question_id);
		Answers resAns = ap.save(answers);
		System.out.println("question id "+resAns.getAnswer_id());
		ap.updateAnswer(question_id,resAns.getAnswer_id());
		List<Answers> asnwe = ap.getAnswers(answers.getAnswer_text());
		for(Answers ans : asnwe) {
			ans.setRating(ans.getRating() + 1);
			ap.save(ans);
		}
		return("Answer added");
	}
	@GetMapping("/getAll")
	public List<Answers> getAll()
	{
		return as.getAll();
	}
}
