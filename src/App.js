import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useDispatch } from "react-redux";
import { mobileActions } from "./store/mobile-slice";

import "./App.css";
import { HomePage } from "./pages/Home";
import { ShopPage } from "./pages/Shop";
import { ProductPage } from "./pages/Product";
import { ErrorPage } from "./pages/Error";
import { BlogsPage } from "./pages/Blogs";
import { BlogPage } from "./pages/Blog";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import RootLayout from "./layout/Root";
import { useEffect } from "react";
import { ContactUsPage } from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "blogs",

        children: [
          { index: true, element: <BlogsPage /> },
          {
            path: ":blogId",
            element: <BlogPage />,
          },
        ],
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      }
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = regex.test(navigator.userAgent);

  useEffect(() => {
    dispatch(mobileActions.setIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
