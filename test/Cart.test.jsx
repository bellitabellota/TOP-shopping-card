import Cart from "../src/pages/Cart";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useOutletContext } from "react-router-dom";
import { beforeEach } from "vitest";

vi.mock("react-router-dom", () => ({
  useOutletContext: vi.fn(),
}));

describe("Cart", () => {
  beforeEach(() => {
    const selectedProductsMock = [{
      id: 5,
      title: "Selected Products 1",
      price: 20.00,
      description: "The Selected Products 1 description ...",
      category: "selected products",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      },
      quantity: 2
    },
    {
      id: 9,
      title: "Selected Products 2",
      price: 10.00,
      description: "The Selected Products 2 description ...",
      category: "selected products",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      },
      quantity: 5
    }]

    useOutletContext.mockReturnValue([null, null, selectedProductsMock]);
  });

  it("renders a page with the selected product", () => {

    const {container} = render(<Cart />);

    expect(container).toMatchSnapshot();
  })

  it("displays the total of the selected products", () => {
    render(<Cart />)
    expect(screen.getByText("Total: 90")).toBeInTheDocument();

  })
})