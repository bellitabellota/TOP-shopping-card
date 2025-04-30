import { render, screen } from "@testing-library/react";
import App from "../src/App"
import { describe, it, vi, expect } from "vitest";

vi.mock("../src/helpers/useFakeStoreAPI.js", () => ({
  default: vi.fn(() => {
    return {product:[], error:null, loading:true }
  }),
}));

describe("App", ()=>{
  it("renders 'Products loading... when loading is true", () => {
    const {container} = render(<App />)
    expect(container).toMatchSnapshot();
  })
})