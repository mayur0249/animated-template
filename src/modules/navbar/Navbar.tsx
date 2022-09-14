import * as Styled from "./style";
import Logo from "../../assets/icons/site_logo.png";
import Logo1 from "../../assets/icons/site_logo_2.png";
import MenuIcon from "../../assets/icons/menu_icon.svg";
import DownArrowIcon from "../../assets/icons/down_arrow.svg";
import MobArrowIcon from "../../assets/icons/mob_arrow.svg";
import CountryImg1 from "../../assets/icons/country_img1.png";
import CountryImg2 from "../../assets/icons/2.png";
import CountryImg3 from "../../assets/icons/3.png";
import CountryImg4 from "../../assets/icons/4.png";
import { Button, Icon } from "../../styles/styled";
import { colors } from "../../styles/theme";
import { useEffect, useState } from "react";
import disableScroll from "disable-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openHome, setHome] = useState(false);
  const [openPage, setOpenPage] = useState(false);
  const [countryDropdown, setCountryDropdown] = useState(false);
  const [countryDropdownMob, setCountryDropdownMob] = useState(false);
  // const [showNav, setShowNav] = useState(true);
  // const [navScroll, setNavScroll] = useState<any>({
  //   show: true,
  //   scrollPos: 0,
  // });

  // const [hideOnScroll, setHideOnScroll] = useState(true);

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     const isShow = currPos.y > prevPos.y;
  //     if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  //   },
  //   [hideOnScroll]
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   console.log(document.body.getBoundingClientRect());
  //   setNavScroll({
  //     scrollPos: document.body.getBoundingClientRect().top,
  //     show: document.body.getBoundingClientRect().top > navScroll.scrollPos,
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => window.removeEventListener("scroll", controlNavbar);
  // }, []);

  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShowNav(false);
  //   } else {
  //     setShowNav(true);
  //   }
  // };

  const homeDropdownContent = [
    "Home Page",
    "Home Slider",
    "Agency",
    "Landing Wallet",
    "Landing ICO 1",
    "Landing ICO 2",
    "Landing ICO 3",
    "Landing ICO 4",
    "Mining Farm",
  ];

  const pageDropDownContent = [
    "About",
    "Services",
    "Blog",
    "Blog Massonry",
    "Blog Post",
    "Pricinag Tables",
    "Typography",
    "404 page",
    "Widgets",
    "Contact",
    "Sign In",
    "Sign Up",
  ];

  return (
    <Styled.NavbarContainer activeMenu={openMenu}>
      {/* {console.log("hideOnScroll", hideOnScroll)} */}
      <Icon
        src={openMenu ? Logo1 : Logo}
        alt="logo"
        height="42px"
        width="175px"
        background={openMenu ? colors.white : colors.bluishDark}
        className="logo"
      />
      {/* <Icon
        src={MenuIcon}
        alt="menu"
        height="40px"
        width="30px"
        className="menu"
      /> */}
      <div
        className="menu"
        onClick={() => {
          setOpenMenu((prev) => !prev);
          disableScroll[openMenu ? "off" : "on"]();
        }}
      >
        <div></div>
      </div>
      <Styled.NavItems>
        <>
          <Styled.NavItem>
            <a>Home</a>
            <Icon src={DownArrowIcon} alt="arrow" height="10px" width="10px" />
            <div className="dropdownContent">
              {homeDropdownContent.map((item) => (
                <Styled.DropdownItem>{item}</Styled.DropdownItem>
              ))}
            </div>
          </Styled.NavItem>
        </>
        <Styled.NavItem>
          <a>Pages</a>
          <Icon src={DownArrowIcon} alt="arrow" height="10px" width="10px" />
          <div className="dropdownContent">
            {pageDropDownContent.map((item) => (
              <Styled.DropdownItem>{item}</Styled.DropdownItem>
            ))}
          </div>
        </Styled.NavItem>
        <Styled.NavItem>
          <a>White Papers</a>
        </Styled.NavItem>
        <Styled.NavItem>
          <a>FAQ's</a>
        </Styled.NavItem>
        <Styled.NavItem>
          <a>Support</a>
        </Styled.NavItem>
      </Styled.NavItems>
      <Styled.ButtonContainer>
        <Button
          background={colors.lightGreen}
          color={colors.white}
          padding="12px 30px"
          borderRadius="30px"
          opacity="0.9"
        >
          Login
        </Button>
        <Styled.NavText color={colors.white}>Sign up</Styled.NavText>
        <Styled.CountryDropdown
          onClick={() => setCountryDropdown((prev) => !prev)}
          active={countryDropdown}
        >
          <Icon
            src={CountryImg1}
            alt="country"
            height="25px"
            width="25px"
            borderRadius="50%"
          />
          <Styled.CountryDropdownContent active={countryDropdown}>
            <Icon
              src={CountryImg2}
              alt="country"
              height="25px"
              width="25px"
              borderRadius="50%"
            />
            <Icon
              src={CountryImg3}
              alt="country"
              height="25px"
              width="25px"
              borderRadius="50%"
            />
            <Icon
              src={CountryImg4}
              alt="country"
              height="25px"
              width="25px"
              borderRadius="50%"
            />
          </Styled.CountryDropdownContent>
        </Styled.CountryDropdown>
      </Styled.ButtonContainer>
      <Styled.MobileMenuContainer active={openMenu}>
        <Styled.MobileMenu>
          <Styled.MobileNavItem onClick={() => setHome((prev) => !prev)}>
            <a>Home</a>
            <Icon src={MobArrowIcon} alt="arrow" height="13px" width="13px" />
          </Styled.MobileNavItem>
          <Styled.MobileDropdownContent display={openHome ? "flex" : "none"}>
            {homeDropdownContent.map((item) => (
              <Styled.MobDropDownItem>{item}</Styled.MobDropDownItem>
            ))}
          </Styled.MobileDropdownContent>
          <Styled.MobileNavItem onClick={() => setOpenPage((prev) => !prev)}>
            {" "}
            <a>Pages</a>
            <Icon src={MobArrowIcon} alt="arrow" height="13px" width="13px" />
          </Styled.MobileNavItem>
          <Styled.MobileDropdownContent display={openPage ? "flex" : "none"}>
            {pageDropDownContent.map((item) => (
              <Styled.MobDropDownItem>{item}</Styled.MobDropDownItem>
            ))}
          </Styled.MobileDropdownContent>
          <Styled.MobileNavItem>
            <a>White Papers</a>
          </Styled.MobileNavItem>
          <Styled.MobileNavItem>
            <a>FAQ's</a>
          </Styled.MobileNavItem>
          <Styled.MobileNavItem>
            <a>Support</a>
          </Styled.MobileNavItem>
          <Styled.ButtonContainer layout="flex" marginTop="85px">
            <Button
              background={colors.lightGreen}
              color={colors.white}
              padding="12px 30px"
              borderRadius="30px"
            >
              Login
            </Button>
            <Styled.NavText color={colors.darkGray}>Sign up</Styled.NavText>
            <Styled.CountryDropdown
              onClick={() => setCountryDropdownMob((prev) => !prev)}
              active={countryDropdownMob}
            >
              <Icon
                src={CountryImg1}
                alt="country"
                height="25px"
                width="25px"
                borderRadius="50%"
              />
              <Styled.CountryDropdownContent active={countryDropdownMob}>
                <Icon
                  src={CountryImg2}
                  alt="country"
                  height="25px"
                  width="25px"
                  borderRadius="50%"
                />
                <Icon
                  src={CountryImg3}
                  alt="country"
                  height="25px"
                  width="25px"
                  borderRadius="50%"
                />
                <Icon
                  src={CountryImg4}
                  alt="country"
                  height="25px"
                  width="25px"
                  borderRadius="50%"
                />
              </Styled.CountryDropdownContent>
            </Styled.CountryDropdown>
          </Styled.ButtonContainer>
        </Styled.MobileMenu>
      </Styled.MobileMenuContainer>
    </Styled.NavbarContainer>
  );
};
