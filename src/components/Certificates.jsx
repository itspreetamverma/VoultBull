import React, { useState, useEffect } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const certificates = [
    {
      src: "/companyprofile/INCORPORATION-CERTIFICATE.jpg",
      title: "INCORPORATION CERTIFICATE",
    },
    {
      src: "/companyprofile/UDHYAM-REGISTRATION.jpg",
      title: "UDHYAM REGISTRATION",
    },
    {
      src: "/companyprofile/TRADEMARK-REG.-LETTER.jpg",
      title: "TRADEMARK REG. LETTER",
    },
    {
      src: "/companyprofile/GOODS-&-SERVICE-TAX-LETTER-(GST).jpg",
      title: "GOODS & SERVICE TAX LETTER (GST)",
    },
    { src: "/companyprofile/CE-CERTIFICATE.jpg", title: "CE CERTIFICATE" },
    {
      src: "/companyprofile/IMPORT-EXPORT-CODE-(IEC).jpg",
      title: "IMPORT-EXPORT CODE (IEC)",
    },
    {
      src: "/companyprofile/ISO-9001-2015-CERTIFICATE.jpg",
      title: "ISO 9001:2015 CERTIFICATE",
    },
  ];

  const openImage = (index) => {
    setSelectedIndex(index);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      document.documentElement.requestFullscreen();
    } else {
      // Exit fullscreen
      document.exitFullscreen();
    }
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const shareImage = async () => {
    if (navigator.share) {
      await navigator.share({
        title: certificates[selectedIndex].title,
        url: certificates[selectedIndex].src,
      });
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.2, 5));
      if (e.key === "-") setZoom((z) => Math.max(1, z - 0.2));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setDragging(true);
    setStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setOffset({ x: e.clientX - start.x, y: e.clientY - start.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-7 gap-6 w-full">
      {certificates.map((item, idx) => (
        <div key={idx}>
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-auto object-cover shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openImage(idx)}
          />
          <p className="text-white sm:text-xs text-lg text-center p-2">
            {item.title}
          </p>
        </div>
      ))}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          {/* Image container */}
          <div
            className="relative w-screen h-screen overflow-hidden flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={certificates[selectedIndex].src}
              alt="certificate"
              style={{
                transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
                  offset.y / zoom
                }px)`,
                cursor: zoom > 1 ? "grab" : "default",
              }}
              className="transition-transform duration-150 z-10 max-h-[80vh] max-w-[90vw]"
            />

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white text-sm bg-black/40 px-2 py-1 rounded">
              {selectedIndex + 1}/{certificates.length}
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.2, 5))}
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <ZoomIn className="text-white" />
              </button>
              <button
                onClick={() => {
                  setZoom((z) => Math.max(1, z - 0.2));
                  setOffset({ x: 0, y: 0 });
                }}
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <ZoomOut className="text-white" />
              </button>
              
              {/* Fullscreen button */}
              <button
                onClick={toggleFullscreen}
                className="top-2 right-2 p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <Maximize2 className="text-white" />
              </button>
              <button
                onClick={shareImage}
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <Share2 className="text-white" />
              </button>
              <button
                onClick={closeImage}
                className="p-2 bg-white/20 rounded-full hover:bg-white/40"
              >
                <X className="text-white" />
              </button>
            </div>

            {/* Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 z-20"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/40 z-20"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
