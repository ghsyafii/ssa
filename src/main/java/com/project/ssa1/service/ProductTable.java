package com.project.ssa1.service;


import com.project.ssa1.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductTable extends CrudRepository <Product, Integer> {
}
