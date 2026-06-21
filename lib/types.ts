export type ScenarioType =
  | "thought_experiment"
  | "real_world"
  | "puzzle"
  | "dilemma";

export interface Model {
  name: string;
  short_definition: string;
  what_it_is: string;
  why_it_matters: string;
  examples: string[];
  common_misuse: string;
}

export interface Scenario {
  id: string;
  type: ScenarioType;
  scenario: string;
  highlights: string[];
  model: Model;
  tags: string[];
  /** Fallacies only: "what would you do?" answer options shown before the reveal. */
  choices?: string[];
}

export interface SavedItem {
  scenario_id: string;
  model_name: string;
  scenario_text: string;
  short_definition: string;
  saved_at: string; // ISO timestamp
}

/** Human-readable labels for scenario type tags (the assist chip). */
export const TYPE_LABEL: Record<ScenarioType, string> = {
  thought_experiment: "Thought Experiment",
  real_world: "Real-World Case",
  puzzle: "Puzzle",
  dilemma: "What would you do?",
};
