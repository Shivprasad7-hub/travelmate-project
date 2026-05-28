package com.travelmate.travelmate_backend.repository;

import com.travelmate.travelmate_backend.entity.Trip;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TripRepository
        extends MongoRepository<Trip, String> {

    List<Trip> findByUserEmail(
            String userEmail);
}