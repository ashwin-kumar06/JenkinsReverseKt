import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Addition test', () => {
  test("Rendering user interface",()=>{
    render(<App/>);
    expect(screen.getByTestId("EmailTextBox")).toBeInTheDocument();
    const textbox2 = screen.getByTestId("PasswordTextBox");
    const button = screen.getByTestId("LoginBtn");
    expect(textbox2).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Text and Label test",()=>{
    render(<App/>);
    const label1 = screen.getByTestId("Heading");
    const label2 = screen.getByPlaceholderText("Email");
    const label3 = screen.getByPlaceholderText("Password");
    const label4 = screen.getByTestId("LoginBtn");

    expect(label1).toBeInTheDocument();
    expect(label1).toHaveTextContent("Login");
    expect(label2).toBeInTheDocument();
    expect(label3).toBeInTheDocument();
    expect(label4).toBeInTheDocument();
    expect(label4).toHaveTextContent("Login");
  });

  test("Initial input test",()=>{
    render(<App/>)
    const value1 = screen.getByTestId("EmailTextBox")
    const value2 = screen.getByTestId("PasswordTextBox");
    expect(value1).toHaveTextContent("");
    expect(value2).toHaveTextContent("");
  });

  test("Empty initial input test",()=>{
    render(<App/>)
    const loginbtn = screen.getByTestId("LoginBtn");
    fireEvent.click(loginbtn);
    const label4 = screen.getByTestId("EmailError");
    expect(label4).toHaveTextContent("Fields cannot be empty");
  });

  test("Success initial input test",()=>{
    render(<App/>);
    const value1 = screen.getByTestId("EmailTextBox")
    const value2 = screen.getByTestId("PasswordTextBox");
    const alert = jest.spyOn(window, 'alert').mockImplementation(()=>{});
    const LoginBtn = screen.getByTestId("LoginBtn");
    fireEvent.change(value1, {target: {value: "ashwin@gmail.com"}});
    fireEvent.change(value2, {target: {value: "123456"}});
    fireEvent.click(LoginBtn);
    expect(alert).toHaveBeenCalledWith('Login Success')
  });
});