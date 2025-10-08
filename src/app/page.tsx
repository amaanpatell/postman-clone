import { currentUser } from "@/modules/auth/actions";
import UserButton from "@/modules/auth/components/user-button";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <UserButton user={user}/>
      <h1 className="mt-4 text-3xl font-bold">Welcome to Postman</h1>
      <p className="mt-2 text-lg text-gray-600">Your API development environment</p>
    </div>
    
  );
}
