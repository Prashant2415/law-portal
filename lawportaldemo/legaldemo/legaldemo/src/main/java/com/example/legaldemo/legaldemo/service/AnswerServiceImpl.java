package com.example.legaldemo.legaldemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.legaldemo.legaldemo.model.Answers;
import com.example.legaldemo.legaldemo.repo.AnswersRepo;
@Service
public class AnswerServiceImpl implements AnswersService{
	@Autowired
	private AnswersRepo ar;
	@Override
	public Answers saveAnswers(Answers answers) {
		// TODO Auto-generated method stub
		return ar.save(answers);
	}

	@Override
	public List<Answers> getAll() {
		// TODO Auto-generated method stub
		return ar.findAll();
	}

	
}
