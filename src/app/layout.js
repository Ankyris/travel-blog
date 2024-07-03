import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";


export const metadata = {
  title: {
    default:"Blog Homepage",
    template:"%s"
  },
  description: "Travel Guide Blog Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* <ClientSideProviderTest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
