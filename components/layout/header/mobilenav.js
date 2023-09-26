import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal , ModalOverlay } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Menuitems from "@/api/menus/menus";
import Dropdown from 'react-bootstrap/Dropdown';
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Add window resize listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the drawer when clicking outside
  const handleDrawerClose = () => {
    if (isOpen) {
      onClose();
    }
  };

 

  return (
    <Box>
      {/* Mobile menu button */}
      {isMobile && (
        <IconButton
          aria-label="Open Mobile Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          color={"white"}
        />
      )}
     
      {/* Drawer for mobile menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={handleDrawerClose}>
      <DrawerOverlay
  onClick={onClose}
  pointerEvents={isOpen ? "auto" : "none"} // Allow clicks only when open
/>

        <DrawerContent>
          <DrawerHeader>
            <Link href="/" onClick={onClose}>
              <Image
                className="site-menu-logo"
                src="/uploads/images/site-logo.png"
                alt="site_logo"
                width={200}
                height={100}
              />
            </Link>
          </DrawerHeader>
          <DrawerBody>
          {Menuitems.map((ele) =>
            ele.submenu ? (
              <Dropdown key={ele.id} className="mobile_menu" >
                <Dropdown.Toggle id={`dropdown-${ele.id}`} className='' >
                 <Link      key={ele.id} className='mobile_links'  href={ele.slug} as={`${ele.slug}`} >{ele.icon} <span>{ele.name}</span></Link>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {ele.submenu.map((ele1) => (
                    <Dropdown.Item key={ele1.id}>
                      <Link  onClick={()=> ele1.name=='Upskill' && console.log(ele1.slug) }  className='links' href={ele1.slug} as={`${ele1.slug}`}  >{ele1.icon} <span className="button-content">{ele1.name}</span></Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link   key={ele.id} className={ele.name=="Apply For Jobs" || ele.name=="Hire Talent" || ele.name=="MagicA10"?'navlinks':'links'} href={ele.slug} as={`${ele.slug}`} onClick={onClose} >{ele.icon}<span className="button-content">{ele.name} </span></Link>
            )
          )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
