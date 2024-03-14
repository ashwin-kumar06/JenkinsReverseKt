import './App.css';
import { useState } from 'react';

function App() {
  const [email_error, setEmailError] = useState();
  const [password_error, setPasswordError] = useState();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!formData.email && !formData.password){
      setEmailError("Fields cannot be empty");
      return;
    }
    else if(!formData.email){
      setEmailError("Invalid email");
    }
    else if(!formData.password){
      setPasswordError("Password cannot be empty");
    }
    else{
      window.alert("Login Success")
    }
  };

  return (
    <div className="login">
      <p data-testid="Heading" className="sign" align="center">Login</p>
      {email_error && <p data-testid="EmailError" className='error'>{email_error}</p>}
      {password_error && <p data-testid="PasswordError" className='error'>{password_error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input data-testid="EmailTextBox" className="un" type="text" align="center" placeholder="Email" name='email' value={formData.email} onChange={handleChange}/>
        <input data-testid="PasswordTextBox" className="pass" type="password" align="center" placeholder="Password" name='password' value={formData.password} onChange={handleChange}/>
        <button data-testid="LoginBtn" className="submit" type="submit">Login</button>
        <p data-testid="ForgotTextBox" className="forgot" align="center"><a href="/forgot">Forgot Password?</a></p>
        <label data-testid="DontHaveLabel">Don't have an account? <a data-testid="SignupTextBox" href="/signup">SignUp</a></label>
      </form>
    </div>
  );
}

export default App;
