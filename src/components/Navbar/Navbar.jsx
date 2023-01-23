import { Container, SubContainer, NavNameIcon, LogoArea } from "./Navbar"
import Profile from "../../assets/profile-icon.svg"
import Notification from "../../assets/notification-icon.svg"
import Question from "../../assets/question-icon.svg"
import Logo from "../../assets/logo.svg"

export const Navbar = () => {
  return (
    <Container>
      <LogoArea><img src={Logo}/></LogoArea>
      <div/>
      <SubContainer>
        <NavNameIcon><img src={Notification}/></NavNameIcon>
        <NavNameIcon><img src={Question}/></NavNameIcon>
        <NavNameIcon><img src={Profile}/>Company Name</NavNameIcon>
      </SubContainer>
    </Container>
  )
}