'use client'

import { Copy, Computer } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"


export default function StarterDummy() {
    const { toast } = useToast()
  const txt = 'git clone https://github.com/Naol-bm/nextjs-shadcn-starter-kit-koo.git'

  const copyText = ()=>{
    navigator.clipboard.writeText(txt)
        toast({
            title: "HAPPY CODING",
            description: "also dont forget your coffee",
          })
  }
    return (
    <div className="flex justify-between py-[2.5%] bg-primary text-secondary w-full gap-8 items-center flex-col h-screen">
          <div className="text-primary-foreground/5">YeneKoo</div>
          <div className="font-bold text-4xl flex justify-center items-center flex-col gap-6">
          <Computer size={'150px'}/>

          Next.js + Shadcn + Tailwind 🫣 
          </div>
          <div className="flex gap-2 bg-primary-foreground/20 p-2 rounded-md">{txt} <Copy className="hover:cursor-pointer" onClick={copyText}/></div>  
    </div>
  );
}
