import React, {useState, useEffect, useRef } from 'react';

export default function Board({livesLeft}) { 
  const [canvas, setCanvas] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setCanvas(canvasRef.current); 
    setCanvasContext(canvasRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (canvasContext) {

      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = "white";
      drawLine(0, 5, 60, 5);
      drawLine(10, 0, 10, 150);
      drawLine(0, 144, 140, 144);

    }
  }, [canvasContext])

  

  useEffect(() => {
    
    switch(livesLeft) {
      case 6:
        drawRope();
        break;
      case 5:
        drawHead();
        break;
      case 4:
        drawBody();
        
        break;
      case 3:
        
        drawLeftHand();
        break;
      case 2:
        drawRightHand();

        
        break;
      case 1:
        
        drawLeftLeg();
        break;
    }
    
  }, [livesLeft]);

  return (
    <canvas ref={canvasRef}></canvas>
  )
  function drawLine(startX, startY, endX, endY) {
    canvasContext.moveTo(startX, startY);
		canvasContext.lineTo(endX, endY);
		canvasContext.stroke();
  }
  function drawCirc(startX, startY, radius, startAngle, endAngle) {
    canvasContext.beginPath();
    canvasContext.arc(startX, startY, radius, startAngle, endAngle);
    canvasContext.stroke();
  }
  function drawRope() {
    drawLine(55, 6, 55, 15);
  }
  function drawHead() {
    drawCirc(55, 24, 10, 0,  Math.PI*2);  
  }
  function drawBody() {
    drawLine(55, 34, 55, 74);
  }
  function drawLeftHand() {
    drawLine(55, 44, 32, 34);
  }
  function drawRightHand() {
    drawLine(55, 44, 80, 34);
  }
  function drawLeftLeg() {
    drawLine(55, 74, 25, 100)
  }
}

