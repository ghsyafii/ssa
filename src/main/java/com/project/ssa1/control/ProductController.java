package com.project.ssa1.control;

import com.project.ssa1.model.Product;
import com.project.ssa1.service.ProductServiceImpl;
import com.project.ssa1.service.ProductTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Collection;

@Controller
@RequestMapping(path="/ssa")
public class ProductController {
    @Autowired
    private ProductTable productRepo;
    private ProductServiceImpl productServiceimpl;

    @GetMapping(path="/new") // Temporarily using GET for testing ONLY.
    public @ResponseBody
    String addNewProduct(@RequestParam(value="name")String this_name, @RequestParam(value="price") Integer price, @RequestParam(value="quantity") Integer quantity) {
        Product new_product = new Product(this_name, price, quantity);
        productRepo.save(new_product);
        return "Added!";
    }
    //localhost:8080/darrek2?name=darrek
    @PostMapping("/darrek2")
    public void darrekFunction2(@RequestParam(value="name", defaultValue="") String your_name,
                                @RequestParam(value="email", defaultValue="") String your_email){
        System.out.println("hello, i received it");
        System.out.println("name:" +your_name);
        System.out.println("email:" + your_email);
    }
    //localhost:8080/products/test_delete
    @DeleteMapping(path="/testdel") //
    public @ResponseBody
    String test4(@RequestParam(value="name")String this_name) {
        System.out.println(this_name);
        return "Received DELETE Request!";
    }
    @GetMapping(path="/user/{id}")
    public @ResponseBody
    String showUser(@PathVariable("id") String this_id) {
        System.out.println("this is id->" + this_id);
        return "Using @PathVariable";
    }

//    @GetMapping(path=/products)
//    public ResponseEntity<Collection<Product>> all(){
//        return new ResponseEntity<Collection<Product>>(productServiceimpl.getProducts(){
//            return productRepo.values();
//        });
//    }

    @GetMapping(path="/products")
    //@CrossOrigin(origins = "http://127.0.0.1:5501")
    public @ResponseBody Iterable<Product> getAllProduct() {
        // This returns a JSON or XML with the users
        return productRepo.findAll();
    }

    @RequestMapping(path = "/delproduct", method={RequestMethod.DELETE, RequestMethod.GET})
    public @ResponseBody String deleteProduct(@RequestParam Integer id)
    {
        productRepo.deleteById(id);
        return "Deleted";
    }

    @PostMapping(value="/posting")
    @ResponseBody
    public void test(@RequestBody Product user){
        System.out.println(user.getName());
        System.out.println(user.getPrice());
        System.out.println(user.getQuantity());
    }

    @PostMapping(value="/list", produces= {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Product list(@RequestParam String name, @RequestParam Integer quantity, @RequestParam Integer price){
        //from the database.
        Product u = new Product();
        u.setName(name);
        u.setQuantity(quantity);
        u.setPrice(price);
        return u;
    }
}
