package com.ciclo3.BibliotecaR.Repository.crudRepository;

import com.ciclo3.BibliotecaR.Model.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminCrudRepository extends CrudRepository <Admin, Integer>{
}
