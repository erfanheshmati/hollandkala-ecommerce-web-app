export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] md:min-h-screen">
      {children}
    </div>
  );
}
