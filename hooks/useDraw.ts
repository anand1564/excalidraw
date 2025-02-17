
import { useEffect, useRef } from "react";
export const useDraw = () =>{
     const canvasRef= useRef<HTMLCanvasElement>(null);

     useEffect(()=>{
          const handler=(e:MouseEvent)=>{

          }
          const computeCanvasPosition=(e:MouseEvent)=>{
               const canvas=canvasRef.current;
               if(canvas){
                    const rect=canvas.getBoundingClientRect();
                    const x=e.clientX-rect.left;
                    const y=e.clientY-rect.top;
                    return {x,y};
               }
               return {x:0,y:0};
          }
          canvasRef.current?.addEventListener("mousemove",handler);
          return ()=>{
               canvasRef.current?.removeEventListener("mousemove",handler);
          }
     })
     return canvasRef;
}