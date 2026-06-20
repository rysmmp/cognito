import { forwardRef } from "react";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { ModelIcon } from "./ModelIcon";

interface ScreenshotTargetProps {
  scenario: Scenario;
}

/**
 * Off-screen, fixed-width card rendered purely for html2canvas. Kept in the DOM
 * (translated off-screen, not display:none) so it can be captured on demand.
 * Uses explicit M3 color values so the export is stable regardless of vars.
 */
export const ScreenshotTarget = forwardRef<HTMLDivElement, ScreenshotTargetProps>(
  function ScreenshotTarget({ scenario }, ref) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translateX(-99999px)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <div
          ref={ref}
          style={{
            width: 600,
            padding: 40,
            backgroundColor: "#141218",
            boxSizing: "border-box",
            fontFamily: "var(--font-sans), Roboto, system-ui, sans-serif",
          }}
        >
          <div
            style={{
              borderRadius: 12,
              backgroundColor: "#1d1b20",
              padding: 36,
            }}
          >
            <div
              style={{
                display: "inline-block",
                border: "1px solid #49454f",
                borderRadius: 8,
                padding: "5px 12px",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.1px",
                color: "#cac4d0",
                marginBottom: 24,
              }}
            >
              {TYPE_LABEL[scenario.type]}
            </div>

            <div
              style={{
                display: "flex",
                width: 56,
                height: 56,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                backgroundColor: "#2b2930",
                color: "#d0bcff",
                marginBottom: 20,
              }}
            >
              <ModelIcon id={scenario.id} size={32} />
            </div>

            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 1.3,
                color: "#d0bcff",
                marginBottom: 20,
              }}
            >
              {scenario.model.name}
            </div>

            <div
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                color: "#e6e1e9",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {scenario.scenario}
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                justifyContent: "flex-end",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.1px",
                color: "#938f99",
              }}
            >
              Cognito
            </div>
          </div>
        </div>
      </div>
    );
  },
);
