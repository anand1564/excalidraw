// components/Toolbar.js

const Toolbar = ({ onSelectTool}) => {
     return (
       <div>
         <button onClick={() => onSelectTool("rect")}>Rectangle</button>
         <button onClick={() => onSelectTool("circle")}>Circle</button>
         <button onClick={() => onSelectTool("text")}>Text</button>
       </div>
     );
   };
   
   export default Toolbar;