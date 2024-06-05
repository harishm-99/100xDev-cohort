import { useOnline } from "./hooks/useOnline";

export default function App() {

  const status = useOnline();

  if (status) {
    return "You are online."
  }
    return "You are offline! Please connect to a connection"
}