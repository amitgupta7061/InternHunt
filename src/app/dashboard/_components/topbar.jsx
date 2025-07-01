import { Menu, UserCircle } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="w-full flex items-center justify-between bg-white p-4 shadow-md">
      <div className="md:hidden">
        <Menu size={24} />
      </div>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <UserCircle size={28} className="text-gray-700" />
    </header>
  )
}
