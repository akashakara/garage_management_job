package com.garage.management.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;

@Entity
@Table(name = "job_card")
public class JobCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String vehicleNumber;
    private String serviceType;
    private String partsUsed;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate nextDueDate;

    public JobCard() {}
    public JobCard(String vehicleNumber, String serviceType, String partsUsed, LocalDate nextDueDate) {
        this.vehicleNumber = vehicleNumber;
        this.serviceType = serviceType;
        this.partsUsed = partsUsed;
        this.nextDueDate = nextDueDate;
    }

    public Long getId() { return id; }
    public String getVehicleNumber() { return vehicleNumber; }
    public void setVehicleNumber(String vehicleNumber) { this.vehicleNumber = vehicleNumber; }
    public String getServiceType() { return serviceType; }
    public void setServiceType(String serviceType) { this.serviceType = serviceType; }
    public String getPartsUsed() { return partsUsed; }
    public void setPartsUsed(String partsUsed) { this.partsUsed = partsUsed; }
    public LocalDate getNextDueDate() { return nextDueDate; }
    public void setNextDueDate(LocalDate nextDueDate) { this.nextDueDate = nextDueDate; }
}