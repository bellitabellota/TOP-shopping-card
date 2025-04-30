import { render } from "@testing-library/react";
import Home from "../src/pages/Home"
import { describe, it, vi, expect } from "vitest";
import { useOutletContext } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useOutletContext: vi.fn(),
}));

describe("Home", () => {
  it("renders a list of products", () => {
    const productsMock = [{
      id: 1,
      title: "Test Product 1",
      price: 109.95,
      description: "The Test Product 1 description ...",
      category: "test products",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Test Product 2",
      price: 22.3,
      description: "The Test Product 2 description ...",
      category: "test products",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    }]

    const addProductToCartMock = vi.fn();

    useOutletContext.mockReturnValue([productsMock, addProductToCartMock]);

    const {container} = render(<Home />);

    expect(container).toMatchSnapshot();
  })
})