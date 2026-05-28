package com.travelmate.travelmate_backend.service;

import com.travelmate.travelmate_backend.dto.TripRequest;
import com.travelmate.travelmate_backend.entity.Trip;
import com.travelmate.travelmate_backend.repository.TripRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TripService {

    private final TripRepository tripRepository;

    public Trip createTrip(
            TripRequest request,
            String email) {

        Trip trip = Trip.builder()
                .destination(
                        request.getDestination())
                .budget(
                        request.getBudget())
                .startDate(
                        request.getStartDate())
                .endDate(
                        request.getEndDate())
                .userEmail(email)
                .build();

        return tripRepository.save(trip);
    }
}