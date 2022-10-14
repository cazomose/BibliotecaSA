package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Client;
import com.ciclo3.BibliotecaR.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Client")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})


public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public List<Client> getAll(){
        return clientService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Client> getClient(@PathVariable("idClient") int idClient){
        return clientService.getClient(idClient);
    }

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Client save (@RequestBody Client client){
        return clientService.save(client);
    }

}
