import { Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';

function Auth() {
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
    console.log(credentials);
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Auth;
