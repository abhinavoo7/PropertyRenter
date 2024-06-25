import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PropTypes from "prop-types";

export const metadata = {
  title: "PropertyRenter | Find your perfect rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
