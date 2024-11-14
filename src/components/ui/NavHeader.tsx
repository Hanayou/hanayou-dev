"use client"

import { useState } from "react"
import Link from "next/link"
import { Briefcase, Hammer, Home, Languages, Mail, Menu, Moon, Sun} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { MagicCard } from "@/components/ui/magic-card"
import { useTheme } from "next-themes"

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(`Theme changed to ${theme}!`);
  }

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={64}/> },
    { name: "Experience", href: "/experience", icon: <Briefcase /> },
    { name: "Projects", href: "/projects", icon: <Hammer /> },
    { name: "Contact", href: "/contact", icon: <Mail /> },
  ]

  return (
    <header className="sticky top-0 z-50">
      <nav className="m-3">
        <MagicCard gradientColor="white" gradientOpacity={0.02} className="bg-neutral-100/70 p-2 backdrop-blur-md dark:bg-neutral-900/70">
          <div className="flex justify-between">
             {/* Desktop Menu */}
            <div className="hidden md:block">
              {navItems.map((item) => (
                <Button key={item.name} className="rounded-full p-6" variant="ghost" asChild>
                  <Link href={item.href}>{item.icon}{item.name}</Link>
                </Button>
              ))}
            </div>
            {/* Mobile Menu */}
            <div className="block md:hidden">
              <Button className="relative rounded-full p-6" variant="ghost" onClick={() => {setIsOpen(!isOpen)}}>
                <Menu className="absolute" />
              </Button>
            </div>
            <div>
              <Button className="relative rounded-full p-6" variant="ghost" onClick={() => {toggleTheme()}}>
                {theme === 'light' ? <Moon className="absolute"/> : <Sun className="absolute"/>}
              </Button>
              <Button className="relative rounded-full p-6" variant="ghost">
                <Languages className="absolute" />
              </Button>
            </div>
          </div>
        </MagicCard>
      </nav>
    </header>
  )
}