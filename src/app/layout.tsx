import "./globals.css";

export const metadata = {
  title: "Simplilearn – Dallas Round Table",
  description: "The Skills That Matter Next: Preparing Your Workforce & Leaders for the AI Era",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
