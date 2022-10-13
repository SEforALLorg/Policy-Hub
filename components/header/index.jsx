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
const Header = () => {
  const router = useRouter();
  const location = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem("lang"))
      i18n.changeLanguage(lang)
    }
  }, [])

  return (
    <div className="header">
      <Navbar expand="md" light>
        <NavbarBrand>
          <img
            src={"/static/images/SEforALL_Logo_White.png"}
            alt="logo"
            className="logo cursor-pointer"
            onClick={() => window.open("https://www.seforall.org/")}
          />
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
                href={`/${lang}`}
              >
                {t("Home")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/resources" ? "active" : ""}`}
                href={`/${lang}/resources`}
              >
                {t("Resources")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location === "/about" ? "active" : ""}
                href={`/${lang}/about`}
              >
                {t("About")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/contact" ? "active" : ""}`}
                href={`/${lang}/contact`}
              >
                {t("Contactus")}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <UncontrolledDropdown setActiveFromChild className="customDropdown">
          <DropdownToggle className="DropdownToggle" tag="a" caret>
            <p>{lang === "en" ? "en" : "fr" }</p>
          </DropdownToggle>
          <DropdownMenu className="dropdownMenu">
            {["en", "fr"].map((lang, index) => {
              return (
                <DropdownItem
                  key={index}
                  style={{
                    backgroundColor:
                      lang === i18n.language ? "#fcb600" : "white",
                    color: lang === i18n.language ? "white" : "#000",
                  }}
                >
                  <Link href="" locale={lang}>
                    <button
                      onClick={() => {
                        const expires = new Date();
                        expires.setFullYear(expires.getFullYear() + 100);
                        localStorage.setItem("lang", lang)
                        setLang(lang)
                        cookies.set("language", lang, {
                          expires,
                          secure: true,
                        });
                        i18n.changeLanguage(lang);
                      }}

                      // className={styles.languageButton}
                    >
                      {lang.toUpperCase()}
                    </button>
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
    </div>
  );
};

export default Header;
