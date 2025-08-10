import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Set initial position off screen to avoid flash at (0,0)
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(follower, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    
    // Variables for cursor animation
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let followerX = -100;
    let followerY = -100;
    let speed = 0.3; // Cursor follow speed (lower is slower)
    
    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Handle link hover
    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid white'
      });
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        backgroundColor: 'transparent'
      });
    };
    
    // Handle link leave
    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: 'none'
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effect to all links and buttons
    const links = document.querySelectorAll('a, button, .cursor-hover');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Animation loop
    const animate = () => {
      // Calculate cursor position with easing
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      
      // Calculate follower position with more delay
      followerX += (mouseX - followerX) * (speed * 0.5);
      followerY += (mouseY - followerY) * (speed * 0.5);
      
      // Apply positions
      gsap.set(cursor, { x: cursorX, y: cursorY });
      gsap.set(follower, { x: followerX, y: followerY });
      
      // Continue animation loop
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor fixed w-6 h-6 rounded-full bg-white bg-opacity-80 pointer-events-none z-50 mix-blend-difference"
        style={{ 
          transition: 'transform 0.3s ease-out, background-color 0.3s ease-out, border 0.3s ease-out',
          willChange: 'transform'
        }}
      />
      <div 
        ref={followerRef} 
        className="cursor-follower fixed w-12 h-12 rounded-full bg-white bg-opacity-20 pointer-events-none z-40"
        style={{ 
          transition: 'transform 0.6s ease-out, background-color 0.3s ease-out',
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default CustomCursor;
