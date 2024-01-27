import { getByText, render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../components/App";

import Shop from "../components/Shop";

describe("Shop component", () => {
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
    initialEntries: ["/", "/shop"],
    initialIndex: 1,
  });

  it("render the heading", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getAllByRole("heading")[1].textContent).toMatch("Category");
  });
  /*it("render shop test", () => {
    render(<Shop />);
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });*/

  it("render the categories", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("link", { name: "All" })).toBeInTheDocument();
    expect(screen.getAllByRole("link")[3].textContent).toMatch(/all/i);
    expect(
      screen.getByRole("link", { name: "Men's Clothings" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Women's Clothings" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Jewelry" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Electronics" })
    ).toBeInTheDocument();
  });
});
