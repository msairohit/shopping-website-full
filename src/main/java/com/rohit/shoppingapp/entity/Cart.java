package com.rohit.shoppingapp.entity;

import javax.persistence.*;

@Entity
@Table(name = "CART")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "CUSTOMER_NAME", nullable = false, unique = true)
    private String customerName;

    @Column(name = "PRODUCT_NAME", unique = true)
    private String name;

    @Column(name = "COST_OF_EACH_ITEM", nullable = false)
    private Float costOfEachItem;

    @Column(name = "QUANTITY", nullable = false)
    private Float quantity;

    @Column(name = "TOTAL_COST", nullable = false)
    private Float totalCost;

    public void updateTotalCost() {
        this.totalCost = this.costOfEachItem * this.quantity;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getCostOfEachItem() {
        return costOfEachItem;
    }

    public void setCostOfEachItem(Float costOfEachItem) {
        this.costOfEachItem = costOfEachItem;
    }

    public Float getQuantity() {
        return quantity;
    }

    public void setQuantity(Float quantity) {
        this.quantity = quantity;
    }

    public Float getTotalCost() {
        return totalCost;
    }
}
