package com.travelmate.travelmate_backend.controller;

import com.travelmate.travelmate_backend.entity.Destination;
import com.travelmate.travelmate_backend.service.DestinationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
@RequiredArgsConstructor
public class DestinationController {

    private final DestinationService destinationService;

    @GetMapping
    public List<Destination> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    @PostMapping
    public Destination createDestination(
            @RequestBody Destination destination) {

        return destinationService.createDestination(destination);
    }
}