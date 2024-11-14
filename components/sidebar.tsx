'use client'

import { Home, Package, PieChart, MessageSquare, BarChart3, FileText, HelpCircle, Settings, AlertCircle, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { 
    icon: Package, 
    label: "Product", 
    href: "/product",
    subItems: [
      { label: "Decoration", count: "05" },
      { label: "Fashion", count: "15" },
      { label: "Accessories", count: "10" },
      { label: "Gadget", count: "458" },
      { label: "Food", count: "149" },
      { label: "Sparepart", count: "819" },
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

  const toggleProduct = () => {
    setProductOpen(!productOpen)
  }

  return (
    <div className="w-72 bg-white border-r overflow-y-auto h-screen pr-6">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white p-1 rounded">
            <Package size={20} />
          </div>
          <span className="font-semibold">OPENSALES ®</span>
        </div>
      </div>
      
      <div className="py-4">
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

      <div className="absolute bottom-0 w-72 border-t bg-white">
        <nav className="py-4">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}