package com.project.ssa1.service;


import com.project.ssa1.model.Product;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {

    private static Map<String, Product> productRepo = new HashMap<>();

    @Override
    public void createProduct(Product product) {

    }

    @Override
    public void updateProduct(Integer id, Product product) {

    }

    @Override
    public void deleteProduct(Integer id) {

    }

    @Override
    public Collection<Product> getProducts() {
        return productRepo.values();
    }
}
