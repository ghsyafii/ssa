package com.project.ssa1.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "customer")
@SecondaryTable(name = "customer_login", pkJoinColumns = @PrimaryKeyJoinColumn(name = "customer_id"))
public class Customer {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @SequenceGenerator(name = "id")
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    @NotBlank
    private String name;

    @Column(name = "customer_email", table="customer_login")
    @NotEmpty(message = "{email.notempty}")
    private String email;

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    @Column(name = "phone")
    private Integer phone;

    @Column(name = "customer_password", table="customer_login")
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "address")
    private String address;

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
