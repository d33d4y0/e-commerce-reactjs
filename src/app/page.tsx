import PromoNavBar from "@components/client/PromoNavBar"
import Link from "next/link";

export default function Home(): React.JSX.Element {
  let isLoggedIn = false;
  return (
    <main>
      <PromoNavBar />
      <div>Home Page</div>
      <Link href="/signin">Sign In</Link>
      <div></div>
      <Link href="/signup">Sign Up</Link>
      <div></div>
      <div>
        {isLoggedIn && "logged in"}
      </div>
      
    </main>
  )
}
