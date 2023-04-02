package com.example.legaldemo.legaldemo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.Data;
@Data
@Transactional
@Entity
@Table(name="answers")
public class Answers {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="answer_id")
	private long answer_id;
	private String answer_text;
	private String user;
	public int  getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	private int rating;
	public Answers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Answers(long answer_id, String answer_text, String user, int rating) {
		super();
		this.answer_id = answer_id;
		this.answer_text = answer_text;
		this.user = user;
	}
	public long getAnswer_id() {
		return answer_id;
	}
	public void setAnswer_id(long answer_id) {
		this.answer_id = answer_id;
	}
	public String getAnswer_text() {
		return answer_text;
	}
	public void setAnswer_text(String answer_text) {
		this.answer_text = answer_text;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	
}
