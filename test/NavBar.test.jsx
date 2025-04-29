import { render } from "@testing-library/react";
import NavBar from "../src/sections/NavBar";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

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
})