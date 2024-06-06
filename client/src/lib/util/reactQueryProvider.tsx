"use client";
import { isAxiosError } from "axios";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: (count, error: unknown) => {
              if (isAxiosError(error) && error.response?.status === 401) {
                return count < 3;
              }
              return false;
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
