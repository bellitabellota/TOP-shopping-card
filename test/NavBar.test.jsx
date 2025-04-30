import { render, screen } from "@testing-library/react";
import NavBar from "../src/sections/NavBar";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";

vi.mock("../src/helpers/calculateQuantityCartItems", () => ({
  default: vi.fn(() => 0 ),
}));

describe("NavBar", ()=>{
  it("renders the Navbar with an empty selectedProducts array and a mocked cart quantity of 0", () => { 
   const noSelectedItemsMock = [];
    const {container} = render(
    <MemoryRouter>
      <NavBar selectedProducts={noSelectedItemsMock} />
    </ MemoryRouter>
    )

    expect(container).toMatchSnapshot();
  })

  it("clicking on the cart leads to the '/cart' path", async() => {
    const memoryRouter = createMemoryRouter(routes);
    const user = userEvent.setup();
    vi.mock("../src/App.jsx", () => import("./__mocks__/AppWithEmptyCart"));

    render(
      <RouterProvider router={memoryRouter} />
    )

    const link = screen.getByRole("link", {name: /cart/i});
    await user.click(link);

    expect(memoryRouter.state.location.pathname).toBe("/cart");
  })
})