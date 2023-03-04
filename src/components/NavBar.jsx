import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";


export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

        <div className="">
         
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            className="mb-2"
            color="deep-purple"
          >
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
            color="deep-purple"
          >
            <span>Sign up</span>


          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
