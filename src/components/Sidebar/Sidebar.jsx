import { Container, SubContainer } from "./Sidebar";
import Home from "../../assets/home-icon.png";
import Profile from "../../assets/user.png";
import Folder from "../../assets/icons8-folder-50.png";

export const Sidebar = () => {
    return(
    <Container>
        <SubContainer><img src={Home}/> <p style={{margin: "0px"}}>Home</p></SubContainer>
        <SubContainer><img src={Folder} style={{height: "50%"}}/> <p style={{margin: "0px"}}>Reports</p></SubContainer> 
        <SubContainer><img src={Profile} style={{height: "35%"}}/> <p style={{margin: "0px"}}>Profile</p></SubContainer>
    </Container>
    )
}