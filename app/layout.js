import "@/app/globals.css";

export const metadata = {
  title: "YT Collab",
  description: "Collab and produce videos easily with YT Collab.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
