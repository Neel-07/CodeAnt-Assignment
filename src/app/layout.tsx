
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo01.png" />
      <title>CodeAnt</title> 
     </head>
      <body       
      >
        {children}
      </body>
    </html>
  );
}
