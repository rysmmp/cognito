import intelligencesData from "@/data/intelligences.json";
import type { Scenario } from "@/lib/types";
import { ScenarioStream } from "@/components/ScenarioStream";

export default function Intelligence() {
  return (
    <ScenarioStream
      data={intelligencesData as Scenario[]}
      mode="reveal"
      revealLabels={{ hidden: "Reveal" }}
      category="intelligence"
    />
  );
}
