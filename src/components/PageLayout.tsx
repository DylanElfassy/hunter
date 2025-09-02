// src/components/PageLayout.tsx
import React, { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default PageLayout;
