package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Client;
import com.ciclo3.BibliotecaR.Model.Message;
import com.ciclo3.BibliotecaR.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Message")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})


public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public List<Message> getAll(){
        return messageService.getAll();
    }
    @GetMapping("/{idMessage}")
    public Optional<Message> getMessage(@PathVariable("idMessage") int idMessage){
        return messageService.getMessage(idMessage);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message save (@RequestBody Message message){
        return messageService.save(message);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Message update(@RequestBody Message message){
        return messageService.update(message);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete (@PathVariable("id")int id){
        return messageService.delete(id);
    }

}
