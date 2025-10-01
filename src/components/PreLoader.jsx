import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // hide after 3s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-95">
      {/* Logo Reveal Wrapper */}
      <div className="relative w-64 h-96 flex items-center justify-center overflow-hidden">
        {/* Overlay that slides up only inside logo box */}
        <div className="absolute inset-0 bg-transparent animate-unwarp"></div>

        {/* Logo */}
        <img
          src="/images/Voltbull.png"
          alt="Logo"
          className="relative w-64 opacity-0 animate-fadeInSlow"
        />
      </div>
    </div>
  );
};

export default PreLoader;
