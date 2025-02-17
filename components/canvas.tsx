"use client";

const Canvas = ()=>{
     function draw(shape: string) {
          const canvas = document.getElementById("canvas") as HTMLCanvasElement;
          if (canvas.getContext) {
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            if(shape==="Rectangle"){
                 ctx.strokeRect(45, 45, 100, 100);
            }
            else if(shape==="Circle"){
                 ctx.beginPath();
                 ctx.arc(95, 50, 40, 0, 2 * Math.PI);
                 ctx.stroke();
            }
          }
        }
        
     return(
          <div className="w-screen h-screen bg-white flex items-center justify-center">
               <canvas id="canvas" width="600" height="600" style={{border:"1px solid black"}}></canvas>
               <button onClick={() => draw("Rectangle")}>Rectangle</button>
<button onClick={() => draw("Circle")}>Circle</button>
          </div>
     )
}

export default Canvas;