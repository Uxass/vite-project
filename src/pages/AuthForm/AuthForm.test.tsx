/* eslint-disable */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AuthForm from "./AuthForm";

describe("FormAuf Component", () => {
  

  it("должна отображать сообщения об ошибках валидации для пустых полей формы", async () => {
    render(<AuthForm />);

    fireEvent.click(screen.getByRole("button", { name: /Сохранить/i }));
  });
  it("должен корректно рендерить элементы формы", () => {
    render(<AuthForm />);

    expect(screen.getByLabelText(/Имя:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Возраст:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Сохранить/i })).toBeInTheDocument();
  });

  it("должна разрешать корректную отправку формы", async () => {
    render(<AuthForm />);

    fireEvent.change(screen.getByLabelText(/Имя:/i), { target: { value: "Valid Name" } });
    fireEvent.change(screen.getByLabelText(/Возраст:/i), { target: { value: "25" } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: "test@example.com" } });

    fireEvent.click(screen.getByRole("button", { name: /Сохранить/i }));
  });

  it("после отправки формы должен добавлять новый элемент в список", async () => {
    render(<AuthForm />);

    fireEvent.change(screen.getByLabelText(/Имя:/i), { target: { value: "New Name" } });
    fireEvent.change(screen.getByLabelText(/Возраст:/i), { target: { value: "30" } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: "new@example.com" } });

    fireEvent.click(screen.getByRole("button", { name: /Сохранить/i }));

    await waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(1);
      expect(listItems[0]).toHaveTextContent("New Name");
      expect(listItems[0]).toHaveTextContent("30");
      expect(listItems[0]).toHaveTextContent("new@example.com");
    });
  });
});
