package com.ciclo3.BibliotecaR.Repository;

import com.ciclo3.BibliotecaR.Model.Client;
import com.ciclo3.BibliotecaR.Model.DTOs.TotalAndClient;
import com.ciclo3.BibliotecaR.Model.Reservation;
import com.ciclo3.BibliotecaR.Repository.crudRepository.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCrudRepository.findAll();
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

    public List<Reservation> getReservationsBetweenDates(Date fechaA, Date fechaB){
        return reservationCrudRepository.findAllByStartDateAfterAndDevolutionDateBefore(fechaA, fechaB);
    }

    public List<Reservation> getReservationsByStatus(String status){
        return reservationCrudRepository.findAllByStatus(status);
    }

    public List<TotalAndClient> getTopClients() {
        List<TotalAndClient> respuesta = new ArrayList<>();
        List<Object[]> reporte = reservationCrudRepository.getTotalReservationsByClient();
        for(int i=0; i<reporte.size(); i++){
            respuesta.add(new TotalAndClient((Long) reporte.get(i)[i], (Client) reporte.get(i)[0]));
        }

        return respuesta;
    }

}
