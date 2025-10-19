import { useOnlineStatus } from "../hooks/useStatus";

export function StatusBar() {
  console.log("INIT STATUS BAR");
  const [isOnline, setIsOnline] = useOnlineStatus(false);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
