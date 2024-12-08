import { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { username, password, email, phoneNumber } = formData;
      const { isSignUpComplete, userId, nextStep } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: phoneNumber, // Debe estar en formato E.164
        },
      });

      setMessage('Sign up successful! Please verify your email.');
    } catch (error) {
      console.error('Error during sign up:', error);
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number (+1234567890)"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
