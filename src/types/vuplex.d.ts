// src/types/vuplex.d.ts
export {};

declare global {
  interface Window {
    vuplex?: {
      postMessage: (msg: any) => void;
      // Add other methods you might need here
    };
  }
}