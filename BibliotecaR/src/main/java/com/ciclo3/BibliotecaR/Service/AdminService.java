package com.ciclo3.BibliotecaR.Service;

import com.ciclo3.BibliotecaR.Model.Admin;
import com.ciclo3.BibliotecaR.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll(){
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin (int idAdmin){
        return adminRepository.getAdmin(idAdmin);
    }

    public Admin save(Admin admin){
        if(admin.getIdAdmin()==null){
            return adminRepository.save(admin);
        }else {
            Optional<Admin> adminEncontrada = getAdmin(admin.getIdAdmin());
            if(adminEncontrada.isEmpty()){
                return adminRepository.save(admin);
            }else{
                return admin;
            }
        }
    }

    public Admin update(Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin> adminEncontrada = getAdmin(admin.getIdAdmin());
            if(!adminEncontrada.isEmpty()){
                if(admin.getPassword()!=null){
                    adminEncontrada.get().setPassword(admin.getPassword());
                }
                if (admin.getName()!=null){
                    adminEncontrada.get().setName(admin.getName());
                }
                return adminRepository.save(adminEncontrada.get());
            }
        }
        return admin;
    }

    public boolean delete(int idAdmin){
        Boolean respuesta = getAdmin(idAdmin).map(elemento -> {
            adminRepository.delete(elemento);
            return true;
        }).orElse(false);

        return respuesta;
    }
}
