"use client";

import { useState } from "react";
import { repositories } from "@/data/repositories";
import { RepositoryList } from "@/components/custom/repolist";
import { SidebarNav } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo2 from "@/assets/auth/signup/logo2.png";

export default function RepositoriesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b sticky top-0 bg-background z-[51]">
        <div className="flex items-center gap-2">
          <Image
            src={logo2}
            alt="CodeAnt AI"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-x-0 top-[72px] z-50 w-full h-[calc(60vh-72px)] bg-background  transform transition-transform duration-200 ease-in-out overflow-y-auto
            lg:top-0 lg:relative lg:h-full lg:w-64 lg:translate-y-0 lg:border-r lg:border-b-0
            ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <div className="p-4 border-b lg:block hidden">
            <div className="flex items-center gap-2">
              <Image
                src={logo2}
                alt="CodeAnt AI"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="py-2 flex-1 flex flex-col">
            <SidebarNav />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto w-full">
          <RepositoryList repositories={repositories} />
        </main>
      </div>
    </div>
  );
}