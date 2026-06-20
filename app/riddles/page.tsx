import riddlesData from "@/data/riddles.json";
import type { Scenario } from "@/lib/types";
import { ScenarioStream } from "@/components/ScenarioStream";

export default function Riddles() {
  return (
    <ScenarioStream
      data={riddlesData as Scenario[]}
      revealLabels={{ hidden: "Reveal the answer", name: "Explain" }}
    />
  );
}
