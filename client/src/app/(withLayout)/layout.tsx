"use client";
import { PageLayout } from "@/component/layout/PageLayout";
import { useAuthModalStore } from "@/lib/store/authModal";
import { useUserStore } from "@/lib/store/user";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}
