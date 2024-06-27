import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { META_DATA } from "@/lib/Constants";
import PropTypes from "prop-types";

export const metadata = {
  ...META_DATA,
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
