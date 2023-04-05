import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Item = styled.li`
padding: 10px 0; 
`

export const Link = styled(NavLink)`
font-family: 'Montserrat';
font-weight: 700;
font-size: 14px;
display: flex;
align-items: center;
gap: 10px;
letter-spacing: 1.25px;
text-transform: uppercase;
color: #010101;
:hover{color: #FF6B0A;}
`