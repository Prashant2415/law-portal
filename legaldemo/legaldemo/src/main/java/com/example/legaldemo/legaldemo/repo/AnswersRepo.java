package com.example.legaldemo.legaldemo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.legaldemo.legaldemo.model.Answers;

public interface AnswersRepo extends JpaRepository<Answers,Long>{

	@Modifying
	@Query(value="update Answers a set a.fk_user_id = ?1 where a.answer_id= ?2",nativeQuery=true)
    void updateAnswer(Long key,Long id);	
	
	@Query(value="Select * from Answers where answer_text= ?1",nativeQuery=true)
	public List<Answers> getAnswers(String answer_text);
	
}
