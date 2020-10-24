import React from "react";
import { Footer } from "demo-ui";
import config from "../config";

const 頁尾 = () => {
  const sites = config.頁尾連結();
  if (sites.length === 0) {
    return null;
  }
  return (
    <Footer sites={sites}/>
  );
};

export default 頁尾;
