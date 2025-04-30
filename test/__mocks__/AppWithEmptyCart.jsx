import { vi } from "vitest"
import { Outlet } from "react-router-dom";
import NavBar from "../../src/sections/NavBar";
import React from "react";

const productsMock = [{
  "id": 1,
  "title": "Test Product 1",
  "price": 109.95,
  "description": "The Test Product 1 description ...",
  "category": "test products",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
},
{
  "id": 2,
  "title": "Test Product 2",
  "price": 22.3,
  "description": "The Test Product 2 description ...",
  "category": "test products",
  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "rating": {
    "rate": 4.1,
    "count": 259
  }
}]

const addProductToCartMock = vi.fn();

const selectedProductsMock = [];

const MockAppCartEmpty =  () => (
  <>
    <NavBar selectedProducts={[]} />
    <Outlet context={[productsMock, addProductToCartMock, selectedProductsMock]} />
  </>
);

export default MockAppCartEmpty;