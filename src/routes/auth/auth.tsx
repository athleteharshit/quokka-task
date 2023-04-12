import { Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
    navigate('home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            value={credentials.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            value={credentials.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <Button
          disabled={
            !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(
              credentials.email
            ) ||
            !(credentials.password.length >= 6) ||
            !(credentials.password.length <= 15)
          }
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Auth;
