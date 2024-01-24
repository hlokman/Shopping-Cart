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
  const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/:name",
      element: <App />,
    },
    {
      path: "/:name/:subname",
      element: <App />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  it("render ", () => {
    const { container } = render(<RouterProvider router={router} />);

    expect(container).toMatchSnapshot();
  });

  it("render the right headings", () => {
    render(<RouterProvider router={router} />);

    const headings = screen.getAllByRole("heading");
    expect(headings[0].textContent).toMatch(/Great Shop/i);
    expect(headings[1].textContent).toMatch(/the greatest Shop/i);
  });

  it("render the shopping button", () => {
    render(<RouterProvider router={router} />);

    const buttonShop = screen.getByRole("link", { name: "Go Shopping" });
    const buttonCart = screen.getByRole("button", { name: "" });
    expect(buttonShop).toBeInTheDocument();
    expect(buttonCart).toBeInTheDocument();
  });
});

//npm run src/tests/App.test.jsx
