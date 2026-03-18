import { useState } from "react";
import {
  useCompareCustomerRiskQuery,
  useGetAgentRankingQuery,
  useGetCategorySummaryQuery,
  useGetChurnDefenseActionsQuery,
  useGetChurnDefenseComplaintReasonsQuery,
  useGetChurnDefenseCustomerTypesQuery,
  useGetChurnDefenseSummaryQuery,
  useGetCustomerRiskQuery,
  useGetKeywordCustomerTypesQuery,
  useGetKeywordLongTermQuery,
  useGetKeywordTopQuery,
  useGetPerformanceSummaryQuery,
  useGetSubscriptionAgeGroupsQuery,
  useGetSubscriptionProductsQuery,
  useGetTimeSlotTrendQuery,
} from "../../shared/api/generated/admin-report";
import * as layout from "../../shared/ui/pageLayout.css";
import { PeriodSelector } from "../analysis/PeriodSelector";
import type { Period } from "../analysis/PeriodSelector";
import * as s from "./AdminReportPage.css";
import { AgentRankingSection } from "./AgentRankingSection";
import { CategorySummarySection } from "./CategorySummarySection";
import { ChurnDefenseSection } from "./ChurnDefenseSection";
import { CustomerRiskSection } from "./CustomerRiskSection";
import { KeywordSection } from "./KeywordSection";
import { PerformanceSection } from "./PerformanceSection";
import { SubscriptionSection } from "./SubscriptionSection";
import { TimeSlotSection } from "./TimeSlotSection";

const DEFAULT_DATE = "2026-01-02";

export function AdminReportPage() {
  const [period, setPeriod] = useState<Period>("daily");
  const [date, setDate] = useState(DEFAULT_DATE);

  const params = { date };
  const compareParams = { baseDate: date, compareDate: "2026-01-01" };

  const { data: performance, isPending: perfPending } = useGetPerformanceSummaryQuery(period, params);
  const { data: agentRanking, isPending: rankPending } = useGetAgentRankingQuery(period, params);
  const { data: categorySummary, isPending: catPending } = useGetCategorySummaryQuery(period, params);
  const { data: timeSlot, isPending: slotPending } = useGetTimeSlotTrendQuery(period, params);
  const { data: subProducts, isPending: subProdPending } = useGetSubscriptionProductsQuery(period, params);
  const { data: subAge, isPending: subAgePending } = useGetSubscriptionAgeGroupsQuery(period, params);
  const { data: kwTop, isPending: kwTopPending } = useGetKeywordTopQuery(period, params);
  const { data: kwLt, isPending: kwLtPending } = useGetKeywordLongTermQuery(period, params);
  const { data: kwCt, isPending: kwCtPending } = useGetKeywordCustomerTypesQuery(period, params);
  const { data: risk, isPending: riskPending } = useGetCustomerRiskQuery(period, params);
  const { data: riskCompare, isPending: riskCmpPending } = useCompareCustomerRiskQuery(period, compareParams);
  const { data: churnSum, isPending: churnSumPending } = useGetChurnDefenseSummaryQuery(period, params);
  const { data: churnCt, isPending: churnCtPending } = useGetChurnDefenseCustomerTypesQuery(period, params);
  const { data: churnCr, isPending: churnCrPending } = useGetChurnDefenseComplaintReasonsQuery(period, params);
  const { data: churnAct, isPending: churnActPending } = useGetChurnDefenseActionsQuery(period, params);

  return (
    <main className={layout.main}>
      <div className={s.pageWrapper}>
        <div className={s.header}>
          <h1 className={s.title}>분석 리포트</h1>
          <p className={s.subtitle}>기간별 상담 운영 통합 분석 (관리자 전용)</p>
        </div>
        <div className={s.body}>
          <div className={s.sectionCard}>
            <PeriodSelector period={period} date={date} onPeriodChange={setPeriod} onDateChange={setDate} />
          </div>
          <div className={s.twoCol}>
            <PerformanceSection data={performance} isPending={perfPending} />
            <AgentRankingSection data={agentRanking} isPending={rankPending} />
          </div>
          <CategorySummarySection data={categorySummary} isPending={catPending} />
          <TimeSlotSection data={timeSlot} isPending={slotPending} />
          <SubscriptionSection products={subProducts} ageGroups={subAge} productsPending={subProdPending} agePending={subAgePending} />
          <KeywordSection top={kwTop} longTerm={kwLt} customerTypes={kwCt} topPending={kwTopPending} ltPending={kwLtPending} ctPending={kwCtPending} />
          <CustomerRiskSection risk={risk} compare={riskCompare} riskPending={riskPending} comparePending={riskCmpPending} />
          <ChurnDefenseSection summary={churnSum} customerTypes={churnCt} complaintReasons={churnCr} actions={churnAct} summaryPending={churnSumPending} ctPending={churnCtPending} crPending={churnCrPending} actPending={churnActPending} />
        </div>
      </div>
    </main>
  );
}
