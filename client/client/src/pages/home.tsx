import { WebviewFrame } from "@/components/webview-frame";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <WebviewFrame url="https://nikhildath.github.io/aquaclima" />
    </main>
  );
}
