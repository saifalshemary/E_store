import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
   <main>
    <h2>DashBoard</h2>
    <Separator />

    <section className="grid grid-cols-12 gap-12 mt-12 ">
      <div className=" lg:col-span-2 ">
        <Sidebar />
      </div>
      <div className="lg:col-span-10 px-4">
        {children}
      </div>
    </section>


   </main>
  );
}
