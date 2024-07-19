import Link from "next/link";

export default function Home() {
  return (
    <div className="
      min-h-screen
      bg-gradient-to-r from-black to-zinc-800 
    ">
      <h1>MasterClass Next</h1>

      <nav className='flex flex-col'>
          <Link href="/primeiro">Primeiro Componente</Link>
          <Link href='/flexbox'>Flexbox</Link>
      </nav>
    </div>
      
  );
}
