package com.ciclo3.BibliotecaR.Service;

import com.ciclo3.BibliotecaR.Model.Category;
import com.ciclo3.BibliotecaR.Model.Client;
import com.ciclo3.BibliotecaR.Repository.CategoryRepository;
import com.ciclo3.BibliotecaR.Repository.crudRepository.CategoryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    private CategoryCrudRepository categoryCrudRepository;

    public List<Category> getAll(){
        return categoryRepository.getAll();
    }

    public Optional<Category> getcategory (int id){
        return categoryRepository.getCategory(id);
    }

    public List<Category>listaClient(){
        return (List<Category>) categoryCrudRepository.findAll(); //Consultar todos los libros
    }

    public Category save(Category category){
        if(category.getId()==null){
            return categoryRepository.save(category);
        }else {
            Optional<Category> categoryEncontrada = getcategory(category.getId());
            if(categoryEncontrada.isEmpty()){
                return categoryRepository.save(category);
            }else{
                return category;
            }
        }
    }

    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category> categoryEncontrada = getcategory(category.getId());
            if(!categoryEncontrada.isEmpty()){
                if(category.getName()!=null){
                    categoryEncontrada.get().setName(category.getName());
                }
                if (category.getDescription()!=null){
                    categoryEncontrada.get().setDescription(category.getDescription());
                }
                return categoryRepository.save(categoryEncontrada.get());
            }
        }
        return category;
    }

    public boolean delete(int id){
        Boolean respuesta = getcategory(id).map(elemento -> {
            categoryRepository.delete(elemento);
            return true;
        }).orElse(false);

        return respuesta;
    }
}
