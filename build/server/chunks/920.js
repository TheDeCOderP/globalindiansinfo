exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 5920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);
;// CONCATENATED MODULE: ./components/header/SearchBar.js





const SearchComponent = ()=>{
    /* const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHeadings = headings.filter((heading) =>
    heading.toLowerCase().includes(searchTerm.toLowerCase())
  ); */ return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Form_default()).Control, {
                type: "text",
                placeholder: "Search..."
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                variant: "dark",
                type: "submit",
                className: "search_button",
                children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaSearch, {})
            })
        ]
    });
};
/* harmony default export */ const SearchBar = (SearchComponent);

;// CONCATENATED MODULE: ./components/GoogleTranslate.js


const TranslatePage = ()=>{
    (0,external_react_.useEffect)(()=>{
        // Load Google Translate script
        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        // Function to initialize the Google Translate Element
        window.googleTranslateElementInit = ()=>{
            new window.google.translate.TranslateElement({
                pageLanguage: "en",
                includedLanguages: "en,es,fr,hi"
            }, "google_translate_element");
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "google_translate_element"
    });
};
/* harmony default export */ const GoogleTranslate = (TranslatePage);

;// CONCATENATED MODULE: ./components/header/TopBar.js







function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()), {
            collapseOnSelect: true,
            expand: "lg",
            variant: "dark",
            className: "header_nav topbar ",
            children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "logo_bar col col-sm-6 col-md-2 col-lg-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "site-logo",
                                    src: "/uploads/images/site-logo.png",
                                    alt: "site_logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col col-sm-6 col-md-6 col-lg-6 searchBar",
                            children: /*#__PURE__*/ jsx_runtime.jsx(SearchBar, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col col-sm-6 col-md-2 col-lg-2 social-icons hide_on_mobile",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://www.facebook.com/groups/globalindiansinfo/",
                                    target: "blank",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaFacebook, {
                                        className: "mr-2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://twitter.com/globalindian_in",
                                    target: "blank",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaTwitter, {
                                        className: "mr-2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://www.instagram.com/global_indian_official/",
                                    target: "blank",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaInstagram, {
                                        className: "mr-2"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in",
                                    target: "blank",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx(fa_.FaLinkedin, {
                                            className: "mr-2"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col col-sm-6 col-md-2 col-lg-2 google_translate hide_on_mobile",
                            children: /*#__PURE__*/ jsx_runtime.jsx(GoogleTranslate, {})
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const TopBar = (Header);

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
;// CONCATENATED MODULE: ./api/menus/menus.js
const menus = [
    {
        "id": 1,
        "name": "Home",
        "slug": "/"
    },
    {
        "id": 2,
        "name": "About",
        "slug": "/about"
    },
    {
        "id": 3,
        "name": "Education",
        "slug": "/category/education"
    },
    {
        "id": 4,
        "name": "Jobs",
        "slug": "/category/jobs"
    },
    {
        "id": 5,
        "name": "Business",
        "slug": "/category/business"
    },
    {
        "id": 6,
        "name": "Travel",
        "slug": "/category/travel"
    },
    {
        "id": 7,
        "name": "News",
        "slug": "/category/news"
    },
    {
        "id": 8,
        "name": "Events",
        "slug": "/category/events"
    },
    {
        "id": 9,
        "name": "Blogs",
        "slug": "/blogs"
    },
    {
        "id": 10,
        "name": "Contact",
        "slug": "/contact"
    },
    {
        "id": 11,
        "name": "FAQs",
        "slug": "/faqs"
    }
];
/* harmony default export */ const menus_menus = (menus);

;// CONCATENATED MODULE: ./components/header/BottomBar.js







function BottomBar_Header() {
    return /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()), {
        collapseOnSelect: true,
        expand: "lg",
        variant: "dark",
        sticky: "top",
        className: "header_nav bottombar",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "responsive-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()).Collapse, {
                    id: "responsive-navbar-nav",
                    className: "nav_menu",
                    children: /*#__PURE__*/ jsx_runtime.jsx((Nav_default()), {
                        className: "menu_links",
                        children: menus_menus.map((item)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: `${item.slug}`,
                                children: item.name
                            }, item.id))
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const BottomBar = (BottomBar_Header);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./components/Footer.js





const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "bg-light text-dark",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-md-3",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "site-footer-logo",
                                    src: "/uploads/images/site-logo.png",
                                    alt: "site_logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-md-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-unstyled",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiHome, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiInfo, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "About Us"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiBriefcase, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/blogs",
                                                    children: "Blogs"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiMail, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: "Contact"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-md-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    children: "Follow Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-unstyled",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaFacebook, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://www.facebook.com/groups/globalindiansinfo/",
                                                    target: "blank",
                                                    children: "Facebook"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaTwitter, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://twitter.com/globalindian_in",
                                                    target: "blank",
                                                    children: "Twitter"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaInstagram, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://www.instagram.com/global_indian_official/",
                                                    target: "blank",
                                                    children: "Instagram"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaLinkedin, {
                                                    className: "mr-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in",
                                                    target: "blank",
                                                    children: "Linkedin"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-md-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-unstyled",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(fa_.FaMobileAlt, {
                                                    className: "mr-2"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "tel:+44-7867090363",
                                                    children: "+44-7867090363"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "  ",
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiMail, {
                                                    className: "mr-2"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "mailto:info@prabisha.com",
                                                    children: "info@prabisha.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "copyrights",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                    children: [
                        "Global Indians Info \xa9 2023 . All Rights Reserved . || Powered by ",
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://prabisha.co.uk/",
                            children: "Prabisha Consulting Limited UK"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                class: "whatsapp-container",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: `https://api.whatsapp.com/send?phone=+44-7867090363&text=I%20want%20to%20find%20out%20about%20your%20support%20and%20services`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "/social/icons8-whatsapp.svg",
                        alt: "WhatsApp Logo",
                        width: "30",
                        height: "30"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/MainLayout.js
// components/MainLayout.js





const MainLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx(TopBar, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(BottomBar, {})
                ]
            }),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            })
        ]
    });
};
/* harmony default export */ const layout_MainLayout = (MainLayout);

// EXTERNAL MODULE: ./pages/admin/AdminLayout.js
var AdminLayout = __webpack_require__(9117);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/layout/OtherPagesLayout.js






const OtherPageLayout = ({ children })=>{
    const router = (0,router_.useRouter)();
    const { pathname } = router;
    const pageName = pathname.substring(1); // Remove the leading slash if needed
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx(TopBar, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(BottomBar, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "other_pages",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "other_pages_banner",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "page_title",
                        children: pageName
                    })
                })
            }),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            })
        ]
    });
};
/* harmony default export */ const OtherPagesLayout = (OtherPageLayout);

;// CONCATENATED MODULE: ./components/layout/CategoryPagesLayout.js






const CategoryPageLayout = ({ children })=>{
    const router = (0,router_.useRouter)();
    const { category } = router.query;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime.jsx(TopBar, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(BottomBar, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "category_pages_banner",
                children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "capitalize text-center",
                    children: category
                })
            }),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            })
        ]
    });
};
/* harmony default export */ const CategoryPagesLayout = (CategoryPageLayout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/typeface-raleway/index.css
var typeface_raleway = __webpack_require__(3647);
// EXTERNAL MODULE: ./node_modules/typeface-league-spartan/index.css
var typeface_league_spartan = __webpack_require__(987);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./styles/aanchal.css
var aanchal = __webpack_require__(1169);
// EXTERNAL MODULE: ./styles/sai.css
var sai = __webpack_require__(4219);
// EXTERNAL MODULE: ./styles/mobile_globals.css
var mobile_globals = __webpack_require__(4170);
;// CONCATENATED MODULE: ./pages/_app.js
// pages/_app.js














const MyApp = ({ Component, pageProps })=>{
    // Determine if the Component has a custom layout
    let CustomLayout = layout_MainLayout;
    if (Component.layout === "admin") {
        CustomLayout = AdminLayout["default"];
    } else if (Component.layout === "other") {
        CustomLayout = OtherPagesLayout;
    } else if (Component.layout === "category") {
        CustomLayout = CategoryPagesLayout;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Global Indians Info - Connecting Indians Globally"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/uploads/images/site-logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CustomLayout, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_components_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1618);
// components/MainLayout.js



const AdminLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container-fluid",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row admin_panel",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-sm-12 col-lg-12 col-md-12 dashboard",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "bg-primary text-light p-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row admin_header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_admin_components_sideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-9",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Welcome To Admin Panel"
                                    })
                                })
                            ]
                        })
                    }),
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "bg-success text-light p-4",
                        children: "Admin Footer"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);


/***/ }),

/***/ 1618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6865);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function SideBar() {
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                variant: "light",
                onClick: handleShow,
                className: "admin_sidebar_button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/menu-icon.png",
                    style: {
                        width: 30
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3___default()), {
                show: show,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3___default().Header), {
                        closeButton: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "site-logo",
                                src: "/uploads/images/site-logo.png",
                                alt: "Third slide"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3___default().Body), {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);


/***/ }),

/***/ 1169:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4170:
/***/ (() => {



/***/ }),

/***/ 4219:
/***/ (() => {



/***/ })

};
;