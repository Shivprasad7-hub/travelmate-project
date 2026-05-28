package com.travelmate.travelmate_backend.repository;

import com.travelmate.travelmate_backend.entity.Destination;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DestinationRepository
        extends MongoRepository<Destination, String> {
}