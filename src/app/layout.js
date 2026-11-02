import './globals.css';

export const metadata = {
  title: 'Usama Javed | MERN Stack Developer Portfolio',
  description: 'Usama Javed is a modern MERN Stack & Next.js developer building responsive, clean, and high-performance web applications.',
  keywords: ['Usama Javed', 'MERN Stack Developer', 'React Developer', 'Next.js Developer', 'Web Developer Portfolio', 'Frontend Engineer'],
  authors: [{ name: 'Usama Javed' }],
  creator: 'Usama Javed',
  openGraph: {
    title: 'Usama Javed | MERN Stack Developer Portfolio',
    description: 'Explore the modern MERN stack developer portfolio of Usama Javed.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white antialiased min-h-screen selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
