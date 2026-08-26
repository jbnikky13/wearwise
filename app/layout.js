import "./globals.css";

export const metadata = {
  title: "VESTA — Your Personal Style Guide",
  description:
    "Get personalized outfit suggestions for every occasion, season and mood. Upload your outfit and get AI-powered feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
