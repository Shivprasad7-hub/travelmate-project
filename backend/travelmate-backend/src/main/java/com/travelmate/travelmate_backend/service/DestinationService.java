package com.travelmate.travelmate_backend.service;

import com.travelmate.travelmate_backend.entity.Destination;
import com.travelmate.travelmate_backend.repository.DestinationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DestinationService {

    private final DestinationRepository destinationRepository;

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    public Destination createDestination(
            Destination destination) {

        return destinationRepository.save(destination);
    }
}