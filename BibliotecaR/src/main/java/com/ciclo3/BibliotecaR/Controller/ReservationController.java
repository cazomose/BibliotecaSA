package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Reservation;
import com.ciclo3.BibliotecaR.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})


public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("idReservation") int idReservation){
        return reservationService.getReservation(idReservation);
    }

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save (@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }

}
