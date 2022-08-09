import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ResponsiveBar from "components/NavBar/ResponsiveBar";
import { ShopifyProvider } from "utils/Shopify";
import React from "react";
import "./utils/i18n";
import "./index.css";

import { Main, Contact, Shop, About, ImageView, NoMatch } from "views";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
console.log(process.env.REACT_APP_SHOPIFY_DOMAIN)
root.render(
  <React.StrictMode>
    <ShopifyProvider>
      <BrowserRouter>
        <ResponsiveBar BreakPoint={950} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:handle" element={<ImageView />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/404" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ShopifyProvider>
  </React.StrictMode>
);
