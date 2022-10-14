package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Lib;
import com.ciclo3.BibliotecaR.Service.LibService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Lib")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})


public class LibController {
    @Autowired
    private LibService libService;

    @GetMapping("/all")
    public List<Lib> getAll(){
        return libService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Lib> getLib(@PathVariable("id") int id){
        return libService.getLib(id);
    }

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Lib save (@RequestBody Lib lib){
        return libService.save(lib);
    }

}

