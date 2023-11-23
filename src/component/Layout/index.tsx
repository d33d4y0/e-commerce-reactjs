import { ReactNode } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import AdvertiseBar from '../AdvertiseBar';
  
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdvertiseBar />
      <NavBar />
      <main className="flex-grow mx-40">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout