import { render, screen } from "@testing-library/react";
import App from "../src/App"
import { describe, it, vi, expect } from "vitest";
import useFakeStoreAPI from "../src/helpers/useFakeStoreAPI"; // this needs to be explicitly imported as I modify the mockReturnValue inside my test
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";

vi.mock("../src/helpers/useFakeStoreAPI", () => ({
  default: vi.fn()
}));

describe("App", () => {
  it("renders 'Products loading... when loading is true", () => {
    useFakeStoreAPI.mockReturnValue({ products: [], error: null, loading: true });
    const {container} = render(<App />)
    expect(container).toMatchSnapshot();
  })

  it("renders error message if useFakeStoreAPI returned an Error", () => {
    useFakeStoreAPI.mockReturnValue({ products: [], error: new Error("server error"), loading: false });
    render(<App />)
    expect(screen.getByText("server error")).toBeInTheDocument();
  })

  it("renders the default page (Home) if useFakeStoreAPI returned products", () => {
    const memoryRouter = createMemoryRouter(routes);
    useFakeStoreAPI.mockReturnValue({ products: [{
      id: 1,
      title: "Test Product",
      price: 109.95,
      description: "The Test Product description ...",
      category: "test products",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }}], 
      error: null, 
      loading: false 
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText("All Products")).toBeInTheDocument();
  })
})

describe("addProductToCart", ()=> {
  function setup() {
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

    useFakeStoreAPI.mockReturnValue({ products: productsMock, error: null, loading: false });

    const memoryRouter = createMemoryRouter(routes);

    return {
      user: userEvent.setup(),
      ...render(<RouterProvider router={memoryRouter} />)
    }
  }

  it("increments the quantity in the cart bubble", async()=> {
    const {user} = setup();
    const inputFields = screen.getAllByRole('spinbutton');
    const addToCartButtons = screen.getAllByRole("button")

    await user.clear(inputFields[0]);
    await user.type(inputFields[0], "3");
    await user.click(addToCartButtons[0]);
    await user.clear(inputFields[1]);
    await user.type(inputFields[1], "4");
    await user.click(addToCartButtons[1]);
    
    expect(screen.getByTestId("cart-bubble")).toHaveTextContent("7");
  })

  it("adds the inserted number of the selected product to the cart to show correct total", async()=> {
    const {user} = setup();
    const inputFields = screen.getAllByRole('spinbutton');
    const addToCartButtons = screen.getAllByRole("button");
    const cartLink = screen.getByRole("link", { name: /cart/i });

    await user.clear(inputFields[0]);
    await user.type(inputFields[0], "3");
    await user.click(addToCartButtons[0]);
    await user.clear(inputFields[1]);
    await user.type(inputFields[1], "4");
    await user.click(addToCartButtons[1]);
    await user.click(cartLink);

    expect(screen.getByText("Total: 419.05")).toBeInTheDocument();
  })
})