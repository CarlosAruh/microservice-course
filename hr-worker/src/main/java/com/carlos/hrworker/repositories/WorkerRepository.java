package com.carlos.hrworker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carlos.hrworker.entities.Worker;

public interface WorkerRepository extends JpaRepository<Worker, Long> {

}
