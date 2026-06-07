import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive-element') ||
        e.target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
        document.body.classList.add('cursor-hovering');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      document.body.classList.remove('cursor-hovering');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block" 
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className="cursor-ring hidden md:block" 
        style={{ left: ringPosition.x, top: ringPosition.y }}
      />
    </>
  );
}
