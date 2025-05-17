"use client";

import { useEffect, useState, useRef } from 'react';

const TRAIL_LENGTH = 40; // Increased trail length for a smoother appearance
const IDLE_TIMEOUT = 500; // Milliseconds of inactivity before trail clears
const UPDATE_INTERVAL = 20; // Milliseconds between trail updates/cleanup for smoother animation

const CursorTracker = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const nextId = useRef(0);
  const lastMouseMoveTime = useRef(Date.now());
  const lastMouseMovePos = useRef({ x: 0, y: 0 }); // To store the last known mouse position

  // Interval to manage trail points (add, remove old)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const isIdle = now - lastMouseMoveTime.current > IDLE_TIMEOUT;

      setTrail(currentTrail => {
        let updatedTrail = currentTrail;

        // 1. Add new point if not idle and mouse has moved significantly since last added point
        // Only add if not idle
        if (!isIdle) {
             const lastPoint = updatedTrail[updatedTrail.length - 1];
             const movedDistance = lastPoint ? Math.sqrt(Math.pow(lastMouseMovePos.current.x - lastPoint.x, 2) + Math.pow(lastMouseMovePos.current.y - lastPoint.y, 2)) : Infinity;

            // Add a new point if trail is not excessively long, and mouse has moved a bit
            if (updatedTrail.length < TRAIL_LENGTH * 2 && movedDistance > 2) {
               nextId.current += 1;
               // Add point at the last recorded mouse position
               updatedTrail = [...updatedTrail, { ...lastMouseMovePos.current, id: nextId.current }];
            }
        }

        // 2. Remove points that are too old (exceed trail length) OR if cursor is idle
        const oldestActiveId = nextId.current - TRAIL_LENGTH;
        updatedTrail = updatedTrail.filter(point => {
            // Keep points within the active trail length if not idle
            if (!isIdle) {
                return point.id > oldestActiveId;
            }
            // If idle, remove all points
            return false; // Remove all points if idle
        });

        return updatedTrail;
      });

    }, UPDATE_INTERVAL); // Run update/cleanup every UPDATE_INTERVAL milliseconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array, interval manages timing

   // Mousemove listener to update the last known mouse position and timestamp
   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        lastMouseMoveTime.current = Date.now();
        lastMouseMovePos.current = { x: e.clientX, y: e.clientY };
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
   }, []); // Empty dependency array


  return (
    <>
      {trail.map((point) => {
        // Trail points now just exist or are removed, no individual fade
        // Opacity and scale determined by age in the remaining trail
        const ageInTrail = nextId.current - point.id;
        const opacity = Math.max(0, 1 - ageInTrail / TRAIL_LENGTH);
        const scale = Math.max(0, 1 - ageInTrail / TRAIL_LENGTH);

        return (
          <div
            key={point.id}
            className="neon-cursor-tracker"
            style={{
              position: 'fixed',
              top: point.y,
              left: point.x,
              pointerEvents: 'none',
              zIndex: 9999,
              opacity: opacity,
              transform: 'translate(-50%, -50%) scale(' + scale + ')',
              transition: `transform 0.05s ease-out, opacity 0.05s linear`, // Consistent transition for movement and basic fade
            }}
          ></div>
        );
      })}
    </>
  );
};

export default CursorTracker; 