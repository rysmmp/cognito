import fallaciesData from "@/data/fallacies.json";
import type { Scenario } from "@/lib/types";
import { ScenarioStream } from "@/components/ScenarioStream";

export default function Fallacies() {
  return <ScenarioStream data={fallaciesData as Scenario[]} mode="choice" />;
}
