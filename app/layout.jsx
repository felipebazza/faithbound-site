import './globals.css';

export const metadata = {
  title: { default: 'Faithbound', template: '%s | Faithbound' },
  description: 'The official website of Faithbound.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
