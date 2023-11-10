import './App.css'
import  {useState, useRef} from 'react'

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const boxElement=useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false)
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e:any) => {

    if (dragging && boxElement.current) {
      const box = boxElement.current;
      const boxRect = box.getBoundingClientRect();

      const newX = Math.min(e.clientX - boxRect.left , boxRect.width - 55);

      const newY = Math.min(e.clientY - boxRect.top, boxRect.height - 55);

      setPosition({ x: newX, y: newY });
    }
  };

  return (
<>

<div
      style={{ position: 'relative',  width: '800px', height: '500px',
      border: '2px solid gray',}}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseUp}
      ref={boxElement}
    >
      <div style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'blue',
          top: `${position.y}px`,
          left: `${position.x}px`,
          cursor: 'grav',
        }} draggable
      ></div>
</div>
</>
  );
}

export default App
