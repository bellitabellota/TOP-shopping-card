import { render, screen } from "@testing-library/react";

import App from "../src/App"
import { describe, it } from "vitest";

describe("App", ()=>{
  it("renders", () => {
    render(<App />)
  })
})