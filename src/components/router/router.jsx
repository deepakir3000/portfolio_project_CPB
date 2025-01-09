import HomePage from "../../page/home";
import AboutPage from "../../page/about";
import ProductsPage from "../../page/products";
import BlogsPage from "../../page/myBlogs";
import BlogDetailsPage from "../../page/myBlogs/blogDetails";
import CareerPage from "../../page/career";
import ContactPage from "../../page/contact";

export const nonAuthRoutes = [
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    index: true,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
    index: true,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetailsPage />,
    index: true,
  },
  {
    path: "/career",
    element: <CareerPage />,
    index: true,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    index: true,
  }
];

