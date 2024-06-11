"use client";
import { PageLayout } from "@/component/layout/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
