import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Cookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect } from "react";
const cookies = new Cookies();
const Header = ({selectedRes}) => {
  const router = useRouter();
  const location = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(localStorage.getItem("lang"));
    }
  }, []);

  return (
    <div className="header">
      <Navbar expand="md" light>
        <NavbarBrand>
          {selectedRes === "ELECTRICITY ACCESS" && <img
            src="static/images/electricity_access.svg"
            alt="logo"
            className=" cursor-pointer updatedLogo"
            onClick={() => window.location.reload()}
          />}
          {selectedRes === "CLEAN COOKING" && <img
            src="static/images/clean_cooking.svg"
            alt="logo"
            className=" cursor-pointer updatedLogo"
            onClick={() => window.location.reload()}
          />}
          {selectedRes === "SUSTAINABLE COOLING" && <img
            src={"/static/images/sustainable_cooling.svg"}
            alt="logo"
            className=" cursor-pointer updatedLogo"
            onClick={() =>  window.location.reload()}
          />}
          {selectedRes === "ENERGY EFFICIENCY" && <img
            src={"/static/images/energy_efficiency.svg"}
            alt="logo"
            className=" cursor-pointer updatedLogo"
            onClick={() =>  window.location.reload()}
          />}
          {!selectedRes && <img
            src={"/static/images/SEforALL_Logo_White.png"}
            alt="logo"
            className="logo cursor-pointer "
            onClick={() => window.open("https://www.seforall.org/")}
          />}
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div
            className={"mobile-overlay mobile-show"}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <Collapse
          navbar
          className={
            isOpen ? "transform-animation-show" : "transform-animation-hide"
          }
        >
          <IoClose
            size={20}
            className="text-text mr-[5px] mobile-show ml-auto close-icon header-close"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Nav className="m-auto items-center" navbar>
            <NavItem>
              <NavLink
                className={`${location === "/" ? "active" : ""}`}
                href={`/${lang === null ? "" : lang}`}
              >
                {t("Home")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/resources" ? "active" : ""}`}
                href={`/${lang || 'en'}/resources`}
              >
                {t("Resources")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location === "/about" ? "active" : ""}
                href={`/${lang || 'en'}/about`}
              >
                {t("About")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/contact" ? "active" : ""}`}
                href={`/${lang || 'en'}/contact`}
              >
                {t("Contactus")}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown setActiveFromChild className="customDropdown">
              <DropdownToggle className="DropdownToggle" tag="a" caret>
                <p>{ i18n.language !== 'fr' ? "EN" : "FR" }</p>
              </DropdownToggle>
              <DropdownMenu className="dropdownMenu">
                {["en", "fr"].map((lang, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      onClick={() => {
                        const expires = new Date();
                        expires.setFullYear(expires.getFullYear() + 100);
                        localStorage.setItem("lang", lang);
                        setLang(lang);
                        cookies.set("language", lang, {
                          expires,
                          secure: true,
                        });
                        i18n.changeLanguage(lang);
                      }}
                      style={{
                        backgroundColor:
                          lang === i18n.language ? "#fcb600" : "transparent",
                        borderRadius:
                          lang === "en"
                            ? "10px 10px 0px 0px"
                            : "0px 0px 10px 10px",
                        color: lang === i18n.language ? "white" : "#000",
                      }}
                    >
                      <Link href="" locale={lang}>
                        <button>
                          {lang.toUpperCase()}
                        </button>
                      </Link>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
