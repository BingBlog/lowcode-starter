import React from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";

const Page: React.FC = () => {
  return <div>preview</div>;
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Page />);
