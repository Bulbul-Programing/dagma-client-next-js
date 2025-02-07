'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/src/components/icons";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/avatar";
import UserStatus from "./navbarComponent/userStatus";

export const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)
  const currentPage = usePathname()

  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", function () {
      if (scrollValue < this.scrollY) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setScrollValue(this.scrollY);
    });
  }

  // Add event listener to scroll


  return (
    <div
      className={`sticky top-0 z-10 backdrop-blur transition duration-500 ${hideNavbar ? "translate-y-[-110px]" : "top-0 translate-y-0"
        }`}
    >
      <HeroUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image height={60} width={60} alt="Duaria abdul gafur model academy logo" src='https://res.cloudinary.com/depy0i4bl/image/upload/v1738933488/New_Project_plpgem.png' />
              <p className="font-bold text-2xl text-inherit">DAGMA</p>
            </NextLink>
          </NavbarBrand>
          {/* nav link for large and medium device */}
          <div className="hidden md:block lg:block">
            <ul className={`flex gap-4 justify-start ml-2`}>
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      `data-[active=true]:text-primary data-[active=true]:font-medium ${currentPage === item.href && "bg-blue-500 text-white"}  px-2 rounded font-semibold`,
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          </div>
        </NavbarContent>

        <div className="hidden md:block lg:block">
          <UserStatus />
        </div>

        {/* navbar toggle for small device */}
        <NavbarContent className="block sm:hidden lg:hidden flex justify-between basis-1 pl-4" justify="end">
          <UserStatus />
          <NavbarMenuToggle />
        </NavbarContent>

        {/*  nav link for small device */}
        <NavbarMenu className="w-3/4 ml-auto">
          <div>
            <ul className="flex flex-col justify-end text-end">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      `data-[active=true]:text-primary data-[active=true]:font-medium font-bold mb-2 p-2 border-2 rounded-md w-full ${currentPage === item.href && "bg-blue-500 text-white"}`,
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              ))}
            </ul>
          </div>
        </NavbarMenu>
      </HeroUINavbar>

    </div>

  );
};
