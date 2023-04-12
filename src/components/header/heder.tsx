import { Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid rounded className="bg-slate-300">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Admin
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>Home</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
