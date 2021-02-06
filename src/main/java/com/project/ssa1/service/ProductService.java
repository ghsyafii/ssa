package com.project.ssa1.service;



import com.project.ssa1.model.Product;

import java.util.Collection;

public interface ProductService {
    public abstract void createProduct(Product product);
    public abstract void updateProduct(Integer id, Product product);
    public abstract void deleteProduct(Integer id);
    public abstract Collection<Product> getProducts();
}
