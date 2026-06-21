import puzzlesData from "@/data/puzzles.json";
import type { Scenario } from "@/lib/types";
import { ScenarioStream } from "@/components/ScenarioStream";

export default function Puzzles() {
  return <ScenarioStream data={puzzlesData as Scenario[]} mode="flip" />;
}
