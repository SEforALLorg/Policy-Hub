import React, { useState, useEffect } from "react";
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
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";
import { isMobile } from "../../utilities";
const cookies = new Cookies();
const Header = ({ selectedRes }) => {
  const router = useRouter();
  const location = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();
  const [query, setQuery] = useState({});
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(localStorage.getItem("lang"));
    }
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("body")[0].classList.add("hide-scroll");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("hide-scroll");
    }
  }, [isOpen]);

  useEffect(() => {
    if (Object.keys(query)?.length && router?.query) {
      setTimeout(() => {
        router.replace({query: {...query}}, undefined, {shallow: true});
      }, 100)
    }
  }, [query])

  const removeResource = () => {
    localStorage.removeItem("ResourceType");
  };

  return (
    <div className="header">
      <Navbar expand="md" light>
        <NavbarBrand href="https://www.seforall.org/">
          {selectedRes === ELECTRICITYACCESS && (
            <img
              src={
                isMobile()
                  ? "/static/images/electricity_access.png"
                  : "/static/images/electricity_access.svg"
              }
              alt="electricity_logo"
              className=" cursor-pointer updatedLogo"
              onClick={() => window.location.reload()}
              height={"49px"}
              width={"180px"}
            />
          )}
          {selectedRes === CLEANCOOKING && (
            <img
              src="/static/images/clean_cooking.svg"
              alt="clean_cooking_logo"
              className=" cursor-pointer updatedLogo"
              onClick={() => window.location.reload()}
              height={"49px"}
              width={"180px"}
            />
          )}
          {selectedRes === SUSTAINABLECOOLING && (
            <img
              src={"/static/images/sustainable_cooling.svg"}
              alt="sustainable_logo"
              className=" cursor-pointer updatedLogo"
              onClick={() => window.location.reload()}
              height={"49px"}
              width={"180px"}
            />
          )}
          {selectedRes === ENERGYEFFICIENCY && (
            <img
              src={"/static/images/energy_efficiency.svg"}
              alt="energy_efficiency_logo"
              className=" cursor-pointer updatedLogo"
              onClick={() => window.location.reload()}
              height={"49px"}
              width={"180px"}
            />
          )}
          {!selectedRes && (
            <div
              onClick={() => window.open("https://www.seforall.org/")}
              target={"_blank"}
            >
              <img
                src={"/static/images/SEforALL_Logo_White.png"}
                data-src={"/static/images/SEforALL_Logo_White.png"}
                alt="logo_white_logo"
                className="logo cursor-pointer "
                width={isMobile() ? "70px" : "70px"}
                height={isMobile() ? "70px" : "70px"}
              />
            </div>
          )}
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
              <div>
                <NavLink
                  className={`${location === "/" ? "active" : ""}`}
                  href={`/${lang === null ? "" : lang}`}
                  onClick={removeResource}
                >
                  {t("Home")}
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <div>
                <NavLink
                  className={`${location === "/resources" ? "active" : ""}`}
                  href={`/${lang || "en"}/resources`}
                  onClick={removeResource}
                >
                  {t("Resources")}
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <div>
                <NavLink
                  className={location === "/about" ? "active" : ""}
                  href={`/${lang || "en"}/about`}
                  onClick={removeResource}
                >
                  {t("About")}
                </NavLink>
              </div>
            </NavItem>
            <NavItem>
              <div>
                <NavLink
                  className={`${location === "/contact" ? "active" : ""}`}
                  href={`/${lang || "en"}/contact`}
                  onClick={removeResource}
                >
                  {t("Contactus")}
                </NavLink>
              </div>
            </NavItem>
          </Nav>
          <UncontrolledDropdown setActiveFromChild className="customDropdown">
            <DropdownToggle
              className="DropdownToggle"
              tag="a"
              role="button"
              caret
              aria-expanded={expanded}
              onClick={toggleDropdown}
            >
              <p>{i18n.language !== "fr" ? "EN" : "FR"}</p>
            </DropdownToggle>
            <DropdownMenu className="dropdownMenu">
              {["en", "fr"].map((lang) => {
                return (
                  <DropdownItem
                    key={lang}
                    onClick={(e) => {
                      e.preventDefault();
                      const expires = new Date();
                      const Query = router?.query;
                      setQuery(Query);
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
                    <div locale={lang}>
                      {lang.toUpperCase()}
                    </div>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
