// Root layout: required by Next.js App Router.
// The [locale] layout handles all HTML structure, metadata, and providers.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return children;
}
