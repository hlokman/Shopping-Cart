import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import App from "../components/App";
import { describe, expect } from "vitest";

/*describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});*/

describe("App component", () => {
  it("render ", () => {
    const routes = [
      {
        path: "/",
        element: <App />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);

    expect(container).toMatchSnapshot();
  });
});
