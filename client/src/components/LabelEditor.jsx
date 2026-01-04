import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric'; // Note: Syntax varies by fabric version, assuming v5 or v6 compatible

const LabelEditor = ({ onUpdatePreview }) => {
  const canvasRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);

  useEffect(() => {
    // Initialize Fabric Canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      height: 250,
      width: 500, // 2:1 Aspect Ratio (approx 10cm x 5cm)
      backgroundColor: '#ffffff',
    });
    setFabricCanvas(canvas);

    // Initial Text
    const text = new fabric.Text('Your Brand', {
      left: 150,
      top: 100,
      fontFamily: 'Arial',
      fill: '#0077b6',
    });
    canvas.add(text);

    return () => {
      canvas.dispose();
    };
  }, []);

  const addText = (isUrdu = false) => {
    if (!fabricCanvas) return;
    const text = new fabric.Text(isUrdu ? 'اردو ٹیکسٹ' : 'New Text', {
      left: 100,
      top: 100,
      fontFamily: isUrdu ? 'Noto Nastaliq Urdu' : 'Arial',
      fill: '#000000',
    });
    fabricCanvas.add(text);
    fabricCanvas.renderAll();
  };

  const addRect = () => {
    if (!fabricCanvas) return;
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: '#2a9d8f',
      width: 100,
      height: 100,
    });
    fabricCanvas.add(rect);
    fabricCanvas.renderAll();
  };

  const handleExport = () => {
    if (!fabricCanvas) return;
    // Export as Data URL (Base64)
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
    });
    onUpdatePreview(dataURL); // Send to 3D preview
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-gray-300 shadow-md">
        <canvas ref={canvasRef} />
      </div>
      
      {/* Controls */}
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => addText(false)} className="px-4 py-2 bg-blue-600 text-white rounded">
          + Add English
        </button>
        <button onClick={() => addText(true)} className="px-4 py-2 bg-green-600 text-white rounded font-serif">
          + شامل کریں (Urdu)
        </button>
        <button onClick={addRect} className="px-4 py-2 bg-purple-600 text-white rounded">
          + Add Shape
        </button>
        <button onClick={handleExport} className="px-4 py-2 bg-orange-500 text-white rounded font-bold">
          Update 3D Preview
        </button>
      </div>
    </div>
  );
};

export default LabelEditor;