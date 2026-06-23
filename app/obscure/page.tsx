import obscureData from "@/data/obscure.json";
import type { ObscureFact } from "@/lib/types";
import { FactStream } from "@/components/FactStream";

export default function Obscure() {
  return <FactStream facts={obscureData as ObscureFact[]} />;
}
