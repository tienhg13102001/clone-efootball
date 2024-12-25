// /src/app/dashboard/layout.tsx

'use client';
import ProtectedLayout from "@/common/ProtectedRoute";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedLayout>
      {children}
    </ProtectedLayout>
  );
}