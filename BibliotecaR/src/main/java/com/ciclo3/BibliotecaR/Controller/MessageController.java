package com.ciclo3.BibliotecaR.Controller;

import com.ciclo3.BibliotecaR.Model.Message;
import com.ciclo3.BibliotecaR.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message save (@RequestBody Message message){
        return messageService.save(message);
    }

}