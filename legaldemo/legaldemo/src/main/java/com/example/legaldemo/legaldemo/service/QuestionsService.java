package com.example.legaldemo.legaldemo.service;

import java.util.List;

import com.example.legaldemo.legaldemo.model.Questions;

public interface QuestionsService {

	public Questions saveQuestions(Questions questions);
	public List<Questions> getAll();
}
