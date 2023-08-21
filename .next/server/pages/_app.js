(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/_app.js
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
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
            /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Form.Control, {
                type: "text",
                placeholder: "Search..."
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Button, {
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

;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
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

;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
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
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiHome, {
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
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiInfo, {
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
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiBriefcase, {
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
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiMail, {
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
                                                /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiMail, {
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





const MainLayout = ({ children  })=>{
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






const OtherPageLayout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { pathname  } = router;
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






const CategoryPageLayout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { category  } = router.query;
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

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
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














const MyApp = ({ Component , pageProps  })=>{
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 987:
/***/ (() => {



/***/ }),

/***/ 3647:
/***/ (() => {



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



/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6865:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,664,618,117], () => (__webpack_exec__(4323)));
module.exports = __webpack_exports__;

})();