'use client'

import { Bell, ChevronDown, MoreHorizontal, Search, Command, User, LogOut } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function TransactionPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const orderItems = [
    { name: "ITEM 1", color: "Black", size: "42", price: "449.000", image: "/photu.jpeg"},
    { name: "Item 2", color: "Black", size: "XL", price: "439.000", image: "/window.svg" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="font-semibold">Transaction</div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search"
                className="w-[300px] pl-9 pr-12 bg-gray-100 border-0"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400">
                <Command className="h-3 w-3" />
                <span>K</span>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-lg p-2">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-lg border border-gray-600 text-gray-400 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/photu.jpeg"
                      alt="User"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <div className="text-sm font-medium">Ranjesh_Roy</div>
                      <div className="text-xs text-gray-500">Ranjeshroy978@gmail.com</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="end">
                <DropdownMenuItem className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Order ID : ASFSSDF3425S</h1>
            <p className="text-gray-500">Let's boost your sales with powerful insights and effective strategies today</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Send Invoice</Button>
            <Button className="bg-blue-200 hover:bg-orange-300">Contact Buyer</Button>
          </div>
        </div>

        <div className="grid grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-orange-100 text-green-500 rounded-full px-3 py-1">With courier en route.</Badge>
                <span className="text-gray-500 text-sm">No Resi : 34u2394y239y</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: "Order made", subtitle: "Create order", icon: "📦" },
                  { title: "Order Paid", subtitle: "Customer payment", icon: "💳" },
                  { title: "Shipped", subtitle: "On delivery", icon: "🚚" },
                  { title: "Completed", subtitle: "Order completed", icon: "✅" },
                ].map((step, index) => (
                  <div key={index} className={`flex items-start gap-2 p-4 rounded-lg ${index === 2 ? 'bg-orange-50' : 'bg-gray-50'} hover:shadow-md transition-shadow duration-200`}>
                    <div className={`p-2 rounded-lg ${index === 2 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                      {step.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium truncate">{step.title}</div>
                      <div className="text-sm text-gray-500 truncate">{step.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="font-medium flex items-center justify-between">
                    Shipping Address (Seller)
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Ranjesh Kumar</div>
                    <div className="text-sm text-gray-500">EIB-A centre of RGIPT,</div>
                    <div className="text-sm text-gray-500">Hoskote,562114</div>
                    <div className="text-sm text-gray-500">Karnatka,India</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium flex items-center justify-between">
                    Shipping Address (Buyer)
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Myank kumar</div>
                    <div className="text-sm text-gray-500">I10.AI</div>
                    <div className="text-sm text-gray-500">Bengaluru</div>
                    <div className="text-sm text-gray-500">Karnatka,India</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-medium">Order Item</div>
                <div className="space-y-4">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">Color: {item.color} | Size: {item.size}</div>
                        </div>
                      </div>
                      <div className="font-medium">1 X RP {item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="font-medium mb-4">Order Summary</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Product Price</span>
                    <span>2 Item</span>
                    <span>RP 888.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping Cost Subtotal</span>
                    <span>Shipping Discount</span>
                    <span>-RP67.500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform fees</span>
                    <span></span>
                    <span>-RP4.000</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total Sales</span>
                    <span></span>
                    <span>RP 876.500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium mb-4">Package travel</h3>
            <div className="space-y-4">
              {[
                { title: "Delivered to recipient", date: "08/22/2022 15:29" },
                { title: "With courier en route", date: "08/22/2022 15:29", resi: "(Royal)" },
                { title: "With courier en route", date: "08/22/2022 15:29", resi: "(Jobra)" },
                { title: "Arrived at Chicago facility", date: "08/22/2022 15:29" },
                { title: "Arrived at Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Arrived at Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Shipped from Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Arrived at distribution hub", date: "08/22/2022 15:29" },
                { title: "Handed over to courier", date: "08/22/2022 15:29" },
                { title: "Shipment scheduled by seller", date: "08/22/2022 15:29" },
              ].map((event, index) => (
                <div key={index} className="flex gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                  <div className="relative">
                    <div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-green-500" />
                    {index !== 9 && <div className="absolute top-3 left-2.5 h-full w-0.5 bg-gray-200" />}
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium flex justify-between">
                      <span>{event.title}</span>
                      {event.resi && <span className="text-gray-500 text-sm">{event.resi}</span>}
                    </div>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}