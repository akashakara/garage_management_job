package com.garage.management.controller;

import com.garage.management.model.JobCard;
import com.garage.management.repository.JobCardRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.io.IOException;
import java.util.List;
import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/jobcards")
public class JobCardController {
    private final JobCardRepository repo;

    public JobCardController(JobCardRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<JobCard> getAllJobCards() {
        return repo.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public JobCard createJobCard(@RequestBody JobCard card) {
        return repo.save(card);
    }

    @GetMapping(value="/{id}/pdf", produces=MediaType.APPLICATION_PDF_VALUE)
    public void downloadPdf(@PathVariable Long id, HttpServletResponse response) throws IOException {
        JobCard card = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        response.setContentType(MediaType.APPLICATION_PDF_VALUE);
        response.setHeader("Content-Disposition", "attachment; filename=jobcard-" + id + ".pdf");
        Document document = new Document();
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();
        document.add(new Paragraph("Job Card #" + id));
        document.add(new Paragraph("Vehicle Number: " + card.getVehicleNumber()));
        document.add(new Paragraph("Service Type: " + card.getServiceType()));
        document.add(new Paragraph("Parts Used: " + card.getPartsUsed()));
        document.add(new Paragraph("Next Due Date: " + card.getNextDueDate()));
        document.close();
    }
}
