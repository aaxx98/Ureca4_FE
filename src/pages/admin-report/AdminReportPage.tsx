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
import type { Period } from "../analysis/PeriodSelector";
import { PeriodSelector } from "../analysis/PeriodSelector";
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

  // subscription / long-term keyword: daily 미지원 → daily 선택 시 weekly로 대체
  const weeklyOrMonthly = period === "daily" ? "weekly" : period;
  // customer-risk: daily/monthly만 지원 (weekly → daily로 대체)
  const dailyOrMonthly = period === "weekly" ? "daily" : period;

  const { data: performance, isPending: perfPending } = useGetPerformanceSummaryQuery(period, params);
  const { data: agentRanking, isPending: rankPending } = useGetAgentRankingQuery(period, params);
  // category-summary: daily 전용
  const { data: categorySummary, isPending: catPending } = useGetCategorySummaryQuery("daily", params);
  // time-slot-trend: daily 전용
  const { data: timeSlot, isPending: slotPending } = useGetTimeSlotTrendQuery("daily", params);
  const { data: subProducts, isPending: subProdPending } = useGetSubscriptionProductsQuery(weeklyOrMonthly, params);
  const { data: subAge, isPending: subAgePending } = useGetSubscriptionAgeGroupsQuery(weeklyOrMonthly, params);
  const { data: kwTop, isPending: kwTopPending } = useGetKeywordTopQuery(period, params);
  const { data: kwLt, isPending: kwLtPending } = useGetKeywordLongTermQuery(weeklyOrMonthly, params);
  const { data: kwCt, isPending: kwCtPending } = useGetKeywordCustomerTypesQuery(weeklyOrMonthly, params);
  // customer-risk: daily/monthly만 지원
  const { data: risk, isPending: riskPending } = useGetCustomerRiskQuery(dailyOrMonthly, params);
  // customer-risk/compare: daily only
  const { data: riskCompare, isPending: riskCmpPending } = useCompareCustomerRiskQuery("daily", compareParams);
  // churn-defense: monthly 전용
  const { data: churnSum, isPending: churnSumPending } = useGetChurnDefenseSummaryQuery("monthly", params);
  const { data: churnCt, isPending: churnCtPending } = useGetChurnDefenseCustomerTypesQuery("monthly", params);
  const { data: churnCr, isPending: churnCrPending } = useGetChurnDefenseComplaintReasonsQuery("monthly", params);
  const { data: churnAct, isPending: churnActPending } = useGetChurnDefenseActionsQuery("monthly", params);

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
          <div className={s.twoCol}>
            <CategorySummarySection data={categorySummary} isPending={catPending} period={period} />
            <TimeSlotSection data={timeSlot} isPending={slotPending} period={period} />
          </div>
          <div className={s.twoCol}>
            <SubscriptionSection products={subProducts} ageGroups={subAge} productsPending={subProdPending} agePending={subAgePending} period={period} />
            <KeywordSection top={kwTop} longTerm={kwLt} customerTypes={kwCt} topPending={kwTopPending} ltPending={kwLtPending} ctPending={kwCtPending} period={period} />
          </div>
          <CustomerRiskSection risk={risk} compare={riskCompare} riskPending={riskPending} comparePending={riskCmpPending} period={period} />
          <ChurnDefenseSection summary={churnSum} customerTypes={churnCt} complaintReasons={churnCr} actions={churnAct} summaryPending={churnSumPending} ctPending={churnCtPending} crPending={churnCrPending} actPending={churnActPending} />
        </div>
      </div>
    </main>
  );
}
