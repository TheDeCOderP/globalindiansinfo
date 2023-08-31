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
import Menus from "@/api/menus/menus";
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
            <Link href="/">
              <Image
                className="site-menu-logo"
                src="/uploads/images/site-logo.png"
                alt="site_logo"
              />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {Menus.map((item) => (
              <div className="mobile_menu" key={item.id}>
                <Link
                  className="text-dark"
                  href={`${item.slug}`}
                  as={`${item.slug}`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
