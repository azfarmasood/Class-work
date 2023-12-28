"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const isLoggin = true;

  const handleRedirect = () => {
    if (isLoggin) {
      push("/dashboard")
    }
    else {
      push("/login")
    }
  }

  return (
    <main>
      <button onClick={handleRedirect}>Dashboard</button>
    </main>
  )
}
