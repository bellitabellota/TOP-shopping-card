import { render, screen } from "@testing-library/react";
import App from "../src/App"
import { describe, it, vi, expect } from "vitest";
import useFakeStoreAPI from "../src/helpers/useFakeStoreAPI"; // this needs to be explicitly imported as I modify the mockReturnValue inside my test

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
})