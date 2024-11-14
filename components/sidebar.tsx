'use client'

import { useState } from 'react'
import { Home, Package, PieChart, MessageSquare, BarChart3, FileText, HelpCircle, Settings, AlertCircle, ChevronDown, Menu, X } from 'lucide-react'
import Link from "next/link"

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { 
    icon: Package, 
    label: "Product", 
    href: "/product",
    subItems: [
      { label: "Decoration", count: "33" },
      { label: "Fashion", count: "32" },
      { label: "Accessories", count: "40" },
      { label: "Gadget", count: "28" },
      { label: "Food", count: "19" },
      { label: "Sparepart", count: "19" },
    ]
  },
  { icon: PieChart, label: "Finance", href: "/finance" },
  { icon: MessageSquare, label: "Message", href: "/message" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: FileText, label: "Marketing", href: "/marketing" },
  { icon: FileText, label: "Transaction", href: "/transaction" },
]

const bottomMenuItems = [
  { icon: HelpCircle, label: "Help Center", href: "/help-center" },
  { icon: Settings, label: "Setting", href: "/settings" },
  { icon: AlertCircle, label: "Help", href: "/help" },
]

export function Sidebar() {
  const [productOpen, setProductOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleProduct = () => {
    setProductOpen(!productOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggleMobileMenu} 
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white border-r overflow-y-auto transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:w-72
      `}>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 text-white p-1 rounded">
              <Package size={20} />
            </div>
            <span className="font-semibold">OPENSALES ®</span>
          </div>
        </div>
        
        <div className="py-4 h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="px-4 text-sm font-medium text-gray-500">General Menu</div>
          <nav className="mt-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <button
                    onClick={toggleProduct}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        productOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                )}
                {item.subItems && (
                  <div className={`pl-12 py-1 ${productOpen ? 'block' : 'hidden'}`}>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href="#"
                        className="flex items-center justify-between py-1 text-sm text-gray-500 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{subItem.label}</span>
                        <span className="text-xs bg-gray-200 rounded-full px-2">{subItem.count}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full border-t bg-white">
          <nav className="py-4">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  )
}
