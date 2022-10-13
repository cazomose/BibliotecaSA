package com.ciclo3.BibliotecaR.Repository.crudRepository;

import com.ciclo3.BibliotecaR.Model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}
