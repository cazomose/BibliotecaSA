package com.ciclo3.BibliotecaR.Repository;

import com.ciclo3.BibliotecaR.Model.Lib;
import com.ciclo3.BibliotecaR.Repository.crudRepository.LibCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LibRepository {
    @Autowired
    private LibCrudRepository libCrudRepository;

    public List<Lib> getAll(){
        return (List<Lib>) libCrudRepository.findAll();
    }

    public Optional<Lib> getLib(int id){
        return libCrudRepository.findById(id);
    }

    public Lib save(Lib lib){
        return libCrudRepository.save(lib);
    }

    public void delete(Lib lib){
        libCrudRepository.delete(lib);
    }

}
