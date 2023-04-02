package com.example.legaldemo.legaldemo.service;

import java.util.List;

import com.example.legaldemo.legaldemo.model.Answers;

public interface AnswersService {

	public Answers saveAnswers(Answers answers);
	public List<Answers> getAll();
}
