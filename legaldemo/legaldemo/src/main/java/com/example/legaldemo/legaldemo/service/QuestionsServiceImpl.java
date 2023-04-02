package com.example.legaldemo.legaldemo.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.legaldemo.legaldemo.model.Answers;
import com.example.legaldemo.legaldemo.model.Questions;
import com.example.legaldemo.legaldemo.repo.QuestionsRepo;

@Service
public class QuestionsServiceImpl implements QuestionsService{
	@Autowired
	private QuestionsRepo qr;
	@Override
	public List<Questions> getAll()
	{
		return qr.findAll();
	}
	@Override
	public Questions saveQuestions(Questions questions) {
		// TODO Auto-generated method stub
		return qr.save(questions);
	}
	
	public List<Questions> sortData(List<Questions> listOfQues) {
		for(Questions quest : listOfQues) {
			List<Answers> ans = quest.getAnswers();
			Collections.sort(ans, new SortByRating());
			quest.setAnswers(ans);
		}
		return listOfQues;
	}
	
}
