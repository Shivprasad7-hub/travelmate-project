package com.travelmate.travelmate_backend.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "trips")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Trip {

    @Id
    private String id;

    private String destination;

    private Double budget;

    private String startDate;

    private String endDate;

    private String userEmail;
}