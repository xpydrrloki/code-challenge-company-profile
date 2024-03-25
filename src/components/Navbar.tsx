import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import SMALL_LOGO from "../../public/SmallLogo.png";
import logo from "../../public/LogoOnly.png"

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-screen bg-primary drop-shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between  py-4">
          <Link href="/">
           <div className="flex justify-start gap-1 items-center">

            <div className="relative w-16 h-16">
              <Image src={logo} alt="" fill className="object-contain"/>
            </div>
            <div className="relative w-40 h-8">
              <Image src={SMALL_LOGO} alt="" fill className="object-contain"/>
            </div>
           </div>
          </Link>
          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8 text-white">
              <Link href="/about">
                <h3 className="text-[#F0904E] hover:text-amber-200">About Us</h3>
              </Link>
              <Link href="/teams">
                <h3 className="text-[#F0904E] hover:text-amber-200">Our Teams</h3>
              </Link>
              <Link href="/services">
                <h3 className="text-[#F0904E] hover:text-amber-200">Services</h3>
              </Link>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button variant="ghost">
                <Menu className="text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/teams">Our Teams</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services">Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
