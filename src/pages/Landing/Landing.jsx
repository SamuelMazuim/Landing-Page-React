import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { List } from "../../components/List/List";
import { SixCards } from "../../components/SixCards/SixCards";
import { StyledBackgroundWrapper } from "../../components/General-Wrapper/StyledGeneralWrapper";
import { GlobalStyle } from "../../styles/global";
import { Technologies } from "../../components/Technologies/Technologies";
import { Comments } from "../../components/Comments/Comments";
import { Footer } from "../../components/Footer/Footer";
import { Pricing } from "../../components/Pricing/Pricing";
import { Contacts } from "../../components/Contacts/Contacts";
export const Landing = () => {
    return (
        <>
            <GlobalStyle />
            <StyledBackgroundWrapper>
                <Header />
                <Title
                    title1="Hands-on"
                    title2="Data Science Course"
                    subtitle="Led by highly qualified professionals you will learn and practice then put at test your skills. ">
                    <List />
                </Title>
            </StyledBackgroundWrapper>
            <SixCards />
            <Technologies />
            <Comments />
            <Pricing />
            <Contacts />
            <Footer />
        </>
    );
};
