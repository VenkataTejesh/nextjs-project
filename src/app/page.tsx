import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
      <p className="mt-2 text-lg text-gray-600">Manage your contacts easily and efficiently</p>
     </div>
     <Image 
     src="/contacts.jpg"
     alt="contact manager"
     width={300}
     height={300}
     className="rounded-lg shadow-lg"
     />
     <div className="text-center">
      <p className="mt-2 text-lg text-gray-600">Start managing your contacts today</p>
     </div>
    </div>
  );
}
