"use client";

import { Button } from "@/components/ui/button";
import {
  Home,
  Briefcase,
  Settings,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Building,
  Search,
  UserCheck,
  Network,
  FolderSearch,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Sidebar() {

    const Handlemsg = () => {
        toast.message('Working on it');
    }

  return (
    <aside className="shadow-md bg-background h-screen flex flex-col items-center lg:items-stretch w-16 lg:w-64 transition-all justify-between py-4">
      {/* Top logo or text */}
      <div className="flex items-center justify-center">
        {/* Show icon on small screens */}
        <Briefcase className="block w-6 h-6 text-blue-600 mr-1" />

        {/* Show text on large screens */}
        <div className="hidden lg:block text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          InternHunt
        </div>
      </div>

      {/* Menu items */}
      <nav className="flex-1 px-2 mt-10 flex flex-col items-center lg:items-start space-y-6 lg:space-y-4">
        <a
          href="/"
          className="flex flex-col lg:flex-row items-center lg:space-x-2  hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Home size={22} />
          <span className="hidden lg:inline ">Home</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Briefcase size={22} />
          <span className="hidden lg:inline">Internshala</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Building size={22} />
          <span className="hidden lg:inline">Naukri.com</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Search size={22} />
          <span className="hidden lg:inline">Indeed</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <UserCheck size={22} />
          <span className="hidden lg:inline">Unstop</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Network size={22} />
          <span className="hidden lg:inline">Hirect</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <FolderSearch size={22} />
          <span className="hidden lg:inline">Monster</span>
        </a>
        <a
          href="#"
          onClick={Handlemsg}
          className="flex flex-col lg:flex-row items-center lg:space-x-2 hover:text-blue-500 w-full hover:border px-4 py-1.5 rounded-md transition-all duration-300"
        >
          <Globe size={22} />
          <span className="hidden lg:inline">LinkedIn Jobs</span>
        </a>
      </nav>

      <div className="flex space-x-2 justify-center items-center">
        <Button variant="outline" size="icon">
          <Link href="https://github.com/amitgupta7061">
            <Github className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="https://x.com/home?lang=en">
            <Twitter className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="https://www.linkedin.com/feed/">
            <Linkedin className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="mailto:amittgupta.dev@gmail.com">
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}
