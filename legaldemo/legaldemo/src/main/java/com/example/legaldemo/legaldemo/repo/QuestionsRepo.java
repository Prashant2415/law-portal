package com.example.legaldemo.legaldemo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.legaldemo.legaldemo.model.Questions;

public interface QuestionsRepo extends JpaRepository<Questions,Long>{
	@Query(value="select * from Questions where title = ?1",nativeQuery=true)
	public List<Questions> searchTitle(String title);
}
