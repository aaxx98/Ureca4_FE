#!/usr/bin/env node
/**
 * 메타 API 데이터를 가져와 src/shared/config/meta.ts 파일을 생성하는 스크립트
 *
 * 사용법:
 *   LOGIN_ID=아이디 LOGIN_PW=비밀번호 node scripts/fetch-meta.mjs
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE = "https://ureca4.cloud";
const OUT_PATH = resolve("src/shared/config/meta.ts");

const loginId = process.env.LOGIN_ID;
const loginPw = process.env.LOGIN_PW;

if (!loginId || !loginPw) {
  console.error("LOGIN_ID, LOGIN_PW 환경변수를 설정해주세요.");
  console.error("  LOGIN_ID=아이디 LOGIN_PW=비밀번호 node scripts/fetch-meta.mjs");
  process.exit(1);
}

// 1. 로그인
console.log("로그인 중...");
const loginRes = await fetch(`${BASE}/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ loginId, password: loginPw }),
});

if (!loginRes.ok) {
  console.error(`로그인 실패: ${loginRes.status}`);
  process.exit(1);
}

const { accessToken } = await loginRes.json();
const headers = { Authorization: `Bearer ${accessToken}` };

// 2. 메타 API 병렬 호출
console.log("메타 데이터 fetching...");
const [riskTypes, riskLevels, grades, analysisCodes] = await Promise.all([
  fetch(`${BASE}/api/meta/risk-types`, { headers }).then((r) => r.json()),
  fetch(`${BASE}/api/meta/risk-levels`, { headers }).then((r) => r.json()),
  fetch(`${BASE}/api/meta/grades`, { headers }).then((r) => r.json()),
  fetch(`${BASE}/api/meta/analysis-codes`, { headers }).then((r) => r.json()),
]);

// 3. TypeScript 파일 생성
const lines = [
  "// 이 파일은 scripts/fetch-meta.mjs 로 자동 생성됩니다. 직접 수정하지 마세요.",
  "",
  "/* ─── Risk Types ─── */",
  "// typeCode → typeName 매핑",
  `export const RISK_TYPE_MAP: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(riskTypes.map((d) => [d.typeCode, d.typeName])),
    null,
    2,
  )};`,
  "",
  "/* ─── Risk Levels ─── */",
  "// levelCode → levelName 매핑",
  `export const RISK_LEVEL_MAP: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(riskLevels.map((d) => [d.levelCode, d.levelName])),
    null,
    2,
  )};`,
  "",
  "/* ─── Grades ─── */",
  "// gradeCode → gradeName 매핑",
  `export const GRADE_MAP: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(grades.map((d) => [d.gradeCode, d.gradeName])),
    null,
    2,
  )};`,
  "",
  "/* ─── Analysis Codes ─── */",
  "// codeName → displayName 매핑",
  `export const ANALYSIS_CODE_MAP: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(analysisCodes.map((d) => [d.codeName, d.displayName])),
    null,
    2,
  )};`,
  "",
  "/* ─── Raw Data (필요시 참조용) ─── */",
  `export const META_RISK_TYPES = ${JSON.stringify(riskTypes, null, 2)} as const;`,
  "",
  `export const META_RISK_LEVELS = ${JSON.stringify(riskLevels, null, 2)} as const;`,
  "",
  `export const META_GRADES = ${JSON.stringify(grades, null, 2)} as const;`,
  "",
  `export const META_ANALYSIS_CODES = ${JSON.stringify(analysisCodes, null, 2)} as const;`,
  "",
];

writeFileSync(OUT_PATH, lines.join("\n"), "utf-8");
console.log(`✓ ${OUT_PATH} 생성 완료`);
console.log(`  - riskTypes: ${riskTypes.length}개`);
console.log(`  - riskLevels: ${riskLevels.length}개`);
console.log(`  - grades: ${grades.length}개`);
console.log(`  - analysisCodes: ${analysisCodes.length}개`);
