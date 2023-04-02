package com.example.legaldemo.legaldemo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Transactional
@Data
@NoArgsConstructor
@Table(name="questions")
public class Questions {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="question_id")
	private long question_id;
	private String question_text;
	private String user;
	private String title;
	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Questions(long question_id, String question_text, String user, String title,List<Answers> answers) {
		super();
		this.question_id = question_id;
		this.question_text = question_text;
		this.user = user;
		this.title = title;
		this.answers=answers;
	}
	public long getQuestion_id() {
		return question_id;
	}
	public void setQuestion_id(long question_id) {
		this.question_id = question_id;
	}
	public String getQuestion_text() {
		return question_text;
	}
	public void setQuestion_text(String question_text) {
		this.question_text = question_text;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
	public List<Answers> getAnswers() {
		return answers;
	}
	public void setAnswers(List<Answers> answers) {
		this.answers = answers;
	}


	@OneToMany(cascade= CascadeType.ALL)
	@JoinColumn(name="fk_user_id",referencedColumnName= "question_id")
	private List<Answers> answers;
}
