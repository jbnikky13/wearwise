import "./globals.css";

export const metadata = {
  title: "WearWise — Your Personal Style Assistant",
  description:
    "Discover what to wear for every occasion, season and mood. Get AI-powered outfit suggestions and feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
