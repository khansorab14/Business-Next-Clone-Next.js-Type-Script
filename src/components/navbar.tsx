"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../assets/arrow-icon.png";
import Line from "../assets/Line 4.png";
import logo from "../assets/logo.webp";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

const navItems = [
  {
    label: "Products",
    path: "/products/crm-next",
    subItems: [
      { label: "CRMNEXT", path: "/products/crm-next" },
      {
        label: "CUSTOMERNEXT",
        path: "/products/customer-next",
      },
      { label: "DATANEXT", path: "/products/data-next" },
      { label: "GPTNEXT", path: "/products/gpt-next" },
    ],
  },
  { label: "Solutions", path: "/solutions" },
  { label: "Services", path: "/services" },
  { label: "Resources", path: "/resources" },
  { label: "About Us", path: "/about-us" },
  { label: "Partners", path: "/partners" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => pathname.startsWith(path);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                href={path}
                passHref
                className={isActive(path) ? "text-pink-500" : "text-black"}
              >
                <ListItemText primary={label} sx={{ color: "#000" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="nav"
        component="nav"
        sx={{
          backgroundColor: isScrolled ? "white" : "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: isScrolled ? "#000" : "#000",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 3,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link href="/">
              <Image
                width={120}
                height={60}
                className="py-2 ml-3"
                src={logo}
                alt="logo"
              />
            </Link>
          </Box>
          <Box flex={5} className="hidden md:flex w-[7000px] ">
            {navItems.map(({ label, path }) => (
              <Box
                key={label}
                sx={{ position: "relative" }}
                onMouseEnter={() => setHoveredItem(label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={path} passHref>
                  <Button
                    sx={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: isActive(path)
                        ? "#EA1D75"
                        : isScrolled
                        ? "#000"
                        : "#000",
                      padding: "8px 16px",
                      position: "relative",
                      "&:hover": {
                        color: "#EA1D75",
                      },
                    }}
                  >
                    {label}
                  </Button>
                </Link>

                {/* Dropdown Menu */}
                {hoveredItem === label &&
                  navItems.find((item) => item.label === label)?.subItems && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "200px",
                        backgroundColor: "white",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1,
                        opacity: 1,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <List>
                        {navItems
                          .find((item) => item.label === label)
                          ?.subItems?.map(
                            ({ label: subLabel, path }, index) => (
                              <ListItem key={index} disablePadding>
                                <ListItemButton>
                                  <Link href={path} passHref>
                                    <ListItemText
                                      primary={
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Box sx={{ mr: 2 }}>
                                            <Image
                                              src={ArrowIcon}
                                              alt="vygcygc"
                                            />
                                          </Box>
                                          {subLabel}
                                        </Box>
                                      }
                                      sx={{
                                        color: "#000",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                          color: "#EA1D75",
                                        },
                                      }}
                                    />
                                  </Link>
                                </ListItemButton>
                              </ListItem>
                            )
                          )}
                      </List>
                    </Box>
                  )}
              </Box>
            ))}

            {/* Additional Icons */}
            <Box
              gap={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ color: "black", paddingLeft: "10px" }}>
                <Image src={Line} alt="line" />
              </Box>
              <Box
                sx={{
                  color: "black",
                  "&:hover": { color: "#EA1D75" },
                }}
              >
                <CiGlobe strokeWidth={1} className="text-xl font-extrabold" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              gap: 1,
              color: isScrolled ? "#000" : "#000",
              "&:hover img": { transform: "rotate(-50deg)" },
            }}
          >
            <Typography
              sx={{
                color: "#EA1D75",
                fontWeight: "bold",
              }}
            >
              SCHEDULE DEMO
            </Typography>
            <Box>
              <Image
                src={ArrowIcon}
                alt="arrow-icon"
                priority
                style={{ transition: "transform 0.3s ease-in-out" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
