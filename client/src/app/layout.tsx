import ReactQueryClientProvider from "@/lib/util/reactQueryProvider";
import "@/styles/Home.module.css";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { QueryClient } from "react-query";

export const metadata: Metadata = {
  title: "Shopping-Mall",
  description: "Dohui Son, Shopping-Mall",
  appleWebApp: {
    title: "Shopping-Mall",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
  viewportFit: "contain",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ReactQueryClientProvider>
          {/* <AppRouterCacheProvider
            options={{
                key:'design-system-name',
                enableCssLayer: true }}
          > */}
          {children}
          {/* </AppRouterCacheProvider> */}
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
