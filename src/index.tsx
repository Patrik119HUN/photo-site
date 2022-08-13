import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import NavBar from "components/NavBar";
import { ShopifyProvider } from "utils/Shopify";
import React, { Suspense } from "react";
import "./utils/i18n";
import "./index.css";

import { NoMatch } from "views";
import Cookies from "components/Cookies";

const Main = React.lazy(() => import("./views/Main/Main"));
const Contact = React.lazy(() => import("./views/Contact/Contact"));
const Shop = React.lazy(() => import("./views/Shop/Shop"));
const About = React.lazy(() => import("./views/About/About"));
const ImageView = React.lazy(() => import("./views/Buy/Buy"));

const links = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/shop", name: "Shop" },
  { id: 3, to: "/about", name: "About" },
  { id: 4, to: "/contact", name: "Contact" },
];

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopifyProvider>
        <NavBar BreakPoint={950} routes={links} />
        <Cookies />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading component Home...</div>}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>Loading component Home...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<div>Loading component Home...</div>}>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading component Home...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/shop/:handle"
            element={
              <Suspense fallback={<div>Loading component Home...</div>}>
                <ImageView />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
          <Route path="/404" element={<NoMatch />} />
        </Routes>
      </ShopifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
