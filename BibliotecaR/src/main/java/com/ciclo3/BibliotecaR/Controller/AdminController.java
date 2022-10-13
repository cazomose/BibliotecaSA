package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Admin;
import com.ciclo3.BibliotecaR.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Admin")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})

public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/all")
    public List<Admin> getAll(){
        return adminService.getAll();
    }
    @GetMapping("/{idAdmin}")
    public Optional<Admin> getCategory(@PathVariable("idAdmin") int idAdmin){
        return adminService.getAdmin(idAdmin);
    }

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin save (@RequestBody Admin admin){
        return adminService.save(admin);
    }

}
