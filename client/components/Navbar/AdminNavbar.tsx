"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Menu,
  Search,
  Settings,
  User,
  LogOut,
  X,
  ChevronDown,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

import Image from "next/image";
// --- Sub-components (Dropdown, Badge, Avatar) remain the same ---

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}

function Dropdown({ trigger, children, align = "left" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}

function Avatar({ src, alt, fallback, size = "md" }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gray-300 flex items-center justify-center overflow-hidden`}
    >
      {src && !imageError ? (
        <Image
          src={src || "/placeholder.svg"}
          alt="Espresso Logo"
          fill
          className="object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-medium text-gray-600">{fallback}</span>
      )}
    </div>
  );
}

export default function AdminNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // --- LOGOUT HANDLER ---
  const handleLogout = () => {
    Cookies.remove("token"); // Remove the authentication cookie
    router.push("/auth"); // Redirect to the login page
  };

  const navigationItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Contact Enquiry", href: "/admin/contact-enquiry" },
    { name: "Course Enquiry", href: "/admin/course-enquiry" },
  ].map((item) => ({
    ...item,
    active: pathname === item.href, // Make active state dynamic
  }));

  const notifications = [
    {
      id: 1,
      title: "New user registered",
      message: "John Doe just signed up",
      time: "2 minutes ago",
    },
    {
      id: 2,
      title: "Server maintenance",
      message: "Scheduled for tonight at 2 AM",
      time: "1 hour ago",
    },
  ];

  return (
    <nav className="bg-[#F2EDE7] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={
                  "https://espresso-organic.vercel.app/logo/espresso-brown.svg"
                }
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-t-md ${
                    item.active
                      ? "bg-red-50 text-[#E81A02] border-b-2 border-[#E81A02]"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 border-b-2 border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Center Search */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Dropdown
              align="right"
              trigger={
                <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0">
                    {notifications.length}
                  </Badge>
                </button>
              }
            >
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">
                  Notifications
                </h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                  >
                    <div className="font-medium text-sm text-gray-900">
                      {notification.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            </Dropdown>

            {/* User Profile */}
            <Dropdown
              align="right"
              trigger={
                <button className="flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Avatar
                    src="/placeholder.svg?height=32&width=32"
                    alt="Admin"
                    fallback="AD"
                  />
                  <ChevronDown className="h-4 w-4 hidden sm:block" />
                </button>
              }
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-900">
                  Admin User
                </div>
                <div className="text-xs text-gray-500">admin@example.com</div>
              </div>
              <div className="py-1">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <User className="mr-3 h-4 w-4" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                {/* Updated Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Log out
                </button>
              </div>
            </Dropdown>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.active
                    ? "bg-red-100 text-[#E81A02] border-l-4 border-[#E81A02]"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile user section */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Avatar
                src="/placeholder.svg?height=40&width=40"
                alt="Admin"
                fallback="AD"
                size="lg"
              />
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Admin User
                </div>
                <div className="text-sm text-gray-500">admin@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="flex items-center px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </a>
              <a
                href="#"
                className="flex items-center px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </a>
              {/* Updated Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-5 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
