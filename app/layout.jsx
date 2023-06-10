import "@/styles/globals.css";

export const metadata = {
  title: "Create-Prompts",
  description:
    "Create-Prompts is a tool to help you create prompts for your stream. Discover and share AI prompts.",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient">
            <main className="app">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
