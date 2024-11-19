import { IoIosStats } from "react-icons/io";

export default function Home() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <img
          className="object-cover w-full h-full"
            src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
            alt="Profile Image"
          />
        </div>
        <small>Hi, Cameron</small>
      </div>

      <nav className="flex items-center gap-2">
        <div><IoIosStats /></div>
        <div>Logout Button</div>
      </nav>
    </header>
  );
}
