package com.ciclo3.BibliotecaR.Repository;

import com.ciclo3.BibliotecaR.Model.Reservation;
import com.ciclo3.BibliotecaR.Repository.crudRepository.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCrudRepository;
    }

    public Optional<Reservation> getReservation(int idReservation){
        return reservationCrudRepository.findById(idReservation);
    }

    public Reservation save(Reservation reservation){
        return reservationCrudRepository.save(reservation);
    }

    public void delete(Reservation reservation){
        reservationCrudRepository.delete(reservation);
    }

}
