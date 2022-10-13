package com.ciclo3.BibliotecaR.Service;

import com.ciclo3.BibliotecaR.Model.Message;
import com.ciclo3.BibliotecaR.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage (int idMessage){
        return messageRepository.getMessage(idMessage);
    }

    public Message save(Message message){
        if(message.getIdMessage()==null){
            return messageRepository.save(message);
        }else {
            Optional<Message> messageEncontrada = getMessage(message.getIdMessage());
            if(messageEncontrada.isEmpty()){
                return messageRepository.save(message);
            }else{
                return message;
            }
        }
    }

    public Message update(Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> messageEncontrada = getMessage(message.getIdMessage());
            if(!messageEncontrada.isEmpty()){
                if(message.getMessageText()!=null){
                    messageEncontrada.get().setMessageText(message.getMessageText());
                }
                return messageRepository.save(messageEncontrada.get());
            }
        }
        return message;
    }

    public boolean delete(int idMessage){
        Boolean respuesta = getMessage(idMessage).map(elemento -> {
            messageRepository.delete(elemento);
            return true;
        }).orElse(false);

        return respuesta;
    }
}
