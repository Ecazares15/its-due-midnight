import { Input } from "antd";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        What is due at Midnight?
      </div>
      <Input className="w-1/2" />
    </div>
  );
}
