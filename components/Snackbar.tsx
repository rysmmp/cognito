"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface Snack {
  id: number;
  message: string;
}

const SnackbarContext = createContext<(message: string) => void>(() => {});

/** Show a transient M3 snackbar. Returns a `show(message)` function. */
export const useSnackbar = () => useContext(SnackbarContext);

/**
 * M3 snackbar host. Renders a single bottom-centered snackbar (inverse-surface
 * container, inverse-on-surface label) that auto-dismisses after 4s. Wrap the
 * app once; call the `useSnackbar()` function from anywhere beneath it.
 */
export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [snack, setSnack] = useState<Snack | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback((message: string) => {
    setSnack({ id: Date.now(), message });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSnack(null), 4000);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <SnackbarContext.Provider value={show}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4">
        <AnimatePresence>
          {snack && (
            <motion.div
              key={snack.id}
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.05, 0.7, 0.1, 1] }}
              className="md-elevation-3 pointer-events-auto flex min-h-12 max-w-[min(100%,560px)] items-center rounded-md-xs bg-inverse-surface px-4 py-3 font-sans text-body-medium text-inverse-on-surface"
            >
              {snack.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SnackbarContext.Provider>
  );
}
