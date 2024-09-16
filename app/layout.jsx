import "@styles/globals.css";
import { Children } from "react";

export const medadata = {
  title: "Promptopia",
  description: "Share AI prompts",
};

function RootLayout({ Children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{Children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
