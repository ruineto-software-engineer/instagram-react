import Navbar from "./Navbar.js";
import BottomBarMobile from "./BottomBarMobile.js";
import Container from "./Container.js";

export default function App(){
  return (
    <div>
      <Navbar />
      <Container />
      <BottomBarMobile />
    </div>
  );
}