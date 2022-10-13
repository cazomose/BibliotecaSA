package com.ciclo3.BibliotecaR.Repository.crudRepository;

import com.ciclo3.BibliotecaR.Model.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {
}
