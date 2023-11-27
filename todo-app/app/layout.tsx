import { Toaster } from "react-hot-toast";
import "../styles/app.scss";
import Header from "./header";

export const metadata = {
  title: "Todo App",
  description: "This is a Todo App Project made for Next.js series",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
