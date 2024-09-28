import type { Metadata } from "next";

import "../scss/index.scss";



export const metadata: Metadata = {
  title: "Mafia",
  description: "Мафия в Барнауле",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body >
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
