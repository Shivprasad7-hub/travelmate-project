package com.travelmate.travelmate_backend.dto;

import lombok.Data;

@Data
public class TripRequest {

    private String destination;

    private Double budget;

    private String startDate;

    private String endDate;
}