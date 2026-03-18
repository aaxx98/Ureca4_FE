import { useQuery } from "@tanstack/react-query";
import { getAnalysisCodes } from "../../../shared/api/generated/meta-controller";

function makeQuery(classification: string) {
  return {
    queryKey: ["meta", "analysis-codes", classification],
    queryFn: ({ signal }: { signal?: AbortSignal }) =>
      getAnalysisCodes({ classification }, signal),
    select: (data: Awaited<ReturnType<typeof getAnalysisCodes>>) =>
      data.map((d) => ({ value: d.codeName ?? "", label: d.displayName ?? "" })),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  };
}

export function useComplaintCategories() {
  return useQuery(makeQuery("complaint_category"));
}

export function useDefenseCategories() {
  return useQuery(makeQuery("defense_category"));
}

export function useOutboundCategories() {
  return useQuery(makeQuery("outbound_category"));
}
