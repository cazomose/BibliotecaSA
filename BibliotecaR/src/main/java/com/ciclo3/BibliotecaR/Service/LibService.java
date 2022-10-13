package com.ciclo3.BibliotecaR.Service;

import com.ciclo3.BibliotecaR.Model.Lib;
import com.ciclo3.BibliotecaR.Repository.LibRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibService {
    @Autowired
    private LibRepository libRepository;

    public List<Lib> getAll(){
        return libRepository.getAll();
    }

    public Optional<Lib> getLib (int id){
        return libRepository.getLib(id);
    }

    public Lib save(Lib lib){
        if(lib.getId()==null){
            return libRepository.save(lib);
        }else {
            Optional<Lib> libEncontrada = getLib(lib.getId());
            if(libEncontrada.isEmpty()){
                return libRepository.save(lib);
            }else{
                return lib;
            }
        }
    }

    public Lib update(Lib lib){
        if(lib.getId()!=null){
            Optional<Lib> libEncontrada = getLib(lib.getId());
            if(!libEncontrada.isEmpty()){
                if(lib.getTarget()!=null){
                    libEncontrada.get().setTarget(lib.getTarget());
                }
                if(lib.getCapacity()!=null){
                    libEncontrada.get().setCapacity(lib.getCapacity());
                }
                if (lib.getCategory()!=null){

                    libEncontrada.get().setCategory(lib.getCategory());
                }
                return libRepository.save(libEncontrada.get());
            }
        }
        return lib;
    }

    public boolean delete(int id){
        Boolean respuesta = getLib(id).map(elemento -> {
            libRepository.delete(elemento);
            return true;
        }).orElse(false);

        return respuesta;
    }
}
