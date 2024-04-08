import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: ${props => props.isActive ? 'black' : '#666'};
  &:hover {
    color: black;
  }
`;

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#333] py-4 fixed top-0 left-0 right-0">
      <ul className="flex gap-4 uppercase font-bold text-2xl justify-center items-center bg-white w-[400px] h-[50px] m-auto rounded-full text-[#666]">
        <li>
          <StyledNavLink to="/" isActive={location.pathname === "/"}>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/gallery" isActive={location.pathname === "/gallery"}>Gallery</StyledNavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;