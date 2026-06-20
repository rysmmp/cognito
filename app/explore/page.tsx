import scenariosData from "@/data/scenarios.json";
import type { Scenario } from "@/lib/types";
import { ScenarioStream } from "@/components/ScenarioStream";

export default function Explore() {
  return <ScenarioStream data={scenariosData as Scenario[]} />;
}
