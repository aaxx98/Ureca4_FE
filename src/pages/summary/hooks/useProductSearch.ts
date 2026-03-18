import { getProducts } from "../../../shared/api/generated/meta-controller";

/** react-select AsyncSelect loadOptions 콜백 */
export function loadProductOptions(inputValue: string) {
  if (!inputValue.trim()) return Promise.resolve([]);
  return getProducts({ keyword: inputValue }).then((products) =>
    products.map((p) => ({
      value: p.code ?? "",
      label: p.name ? `${p.name} (${p.type ?? ""})` : (p.code ?? ""),
    })),
  );
}
