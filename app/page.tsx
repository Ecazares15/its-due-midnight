import { Input, Button } from "antd";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-7xl">What is due at Midnight?</div>
      <div className="text-3xl">
        Enter a task and we will provide a breakdown for you :D
      </div>
      <Input className="w-1/4 m-3" placeholder="Enter a task..." />
      <Button type="primary"> LOCK IN TIME </Button>
    </div>
  );
}
