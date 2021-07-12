import styled from "styled-components";
import Header from "./Header";
import Image from "./Image";
import ImageDescription from "./ImageDescription";

const Login = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3B3F40;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

Login.Header = Header;
Login.Image = Image;
Login.ImageDescription = ImageDescription;

export default Login;