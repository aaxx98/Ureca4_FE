import { getAgents } from "../../../shared/api/generated/meta-controller";

/** react-select AsyncSelect loadOptions 콜백 */
export function loadAgentOptions(inputValue: string) {
  if (!inputValue.trim()) return Promise.resolve([]);
  return getAgents({ name: inputValue }).then((agents) =>
    agents.map((a) => ({
      value: String(a.empId ?? ""),
      label: a.name ?? "",
    })),
  );
}
