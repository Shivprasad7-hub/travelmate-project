package com.travelmate.travelmate_backend.controller;

import com.travelmate.travelmate_backend.dto.TripRequest;
import com.travelmate.travelmate_backend.entity.Trip;
import com.travelmate.travelmate_backend.service.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {

    private final TripService tripService;

    @PostMapping
    public Trip createTrip(
            @RequestBody TripRequest request) {

        return tripService.createTrip(
                request,
                "raj@gmail.com");
    }
}