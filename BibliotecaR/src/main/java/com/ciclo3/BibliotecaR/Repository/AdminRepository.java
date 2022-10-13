package com.ciclo3.BibliotecaR.Repository;

import com.ciclo3.BibliotecaR.Model.Admin;
import com.ciclo3.BibliotecaR.Repository.crudRepository.AdminCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {
    @Autowired
    private AdminCrudRepository adminCrudRepository;

    public List<Admin> getAll(){
        return (List<Admin>) adminCrudRepository;
    }

    public Optional<Admin> getAdmin(int idAdmin) {
        return adminCrudRepository.findById(idAdmin);
    }

    public Admin save(Admin admin){
        return adminCrudRepository.save(admin);
    }

    public void delete(Admin admin){
        adminCrudRepository.delete(admin);
    }

}
