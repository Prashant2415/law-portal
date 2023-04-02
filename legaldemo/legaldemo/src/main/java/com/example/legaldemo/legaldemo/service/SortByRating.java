package com.example.legaldemo.legaldemo.service;

import java.util.Comparator;

import com.example.legaldemo.legaldemo.model.Answers;

public class SortByRating implements Comparator<Answers>{

	@Override
	public int compare(Answers o1, Answers o2) {
		return o2.getRating() - o1.getRating();
	}

}
