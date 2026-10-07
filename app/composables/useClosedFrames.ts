// ponytail: closed WindowFrames park their reopen chips in the navbar.
// Frames register on close and unregister on reopen/unmount (no ghost chips).
export interface ClosedFrame {
  id: string;
  title: string;
  reopen: () => void;
}

export const useClosedFrames = () => {
  const frames = useState<ClosedFrame[]>('closed-frames', () => []);

  const unregister = (id: string) => {
    frames.value = frames.value.filter((f) => f.id !== id);
  };

  const register = (frame: ClosedFrame) => {
    unregister(frame.id);
    frames.value.push(frame);
  };

  return { frames, register, unregister };
};
