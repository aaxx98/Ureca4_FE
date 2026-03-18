/**
 * 메타 API 응답값을 정적으로 저장한 파일
 * GET /api/meta/* 의 항상 고정된 응답을 코드 → 한글 이름으로 매핑합니다.
 *
 * 사용 예시:
 *   RISK_TYPE_MAP["COMP"]       // "과도한 보상 요구"
 *   RISK_LEVEL_MAP["HIGH"]      // "위험"
 *   GRADE_MAP["DIAMOND"]        // "우수"
 *   PRODUCT_MAP["MOB-5G-KD"]   // "5G 키즈"
 */

/* ─── Risk Types  (/api/meta/risk-types) ─── */

export const RISK_TYPE_MAP: Record<string, string> = {
  ABUSE:    "폭언/욕설",
  CHURN:    "해지 위험",
  COMP:     "과도한 보상 요구",
  FRAUD:    "사기 의심",
  PHISHING: "피싱 피해",
  POLICY:   "정책 악용",
  REPEAT:   "반복 민원",
};

/* ─── Risk Levels  (/api/meta/risk-levels) ─── */

export const RISK_LEVEL_MAP: Record<string, string> = {
  LOW:      "주의",
  MEDIUM:   "경고",
  HIGH:     "위험",
  CRITICAL: "심각",
};

/* ─── Grades  (/api/meta/grades) ─── */

export const GRADE_MAP: Record<string, string> = {
  VVIP:    "VVIP",
  VIP:     "VIP",
  DIAMOND: "우수",
};

/* ─── Products  (/api/meta/products) ─── */

export const PRODUCT_MAP: Record<string, string> = {
  // 모바일
  "MOB-5G-KD":    "5G 키즈",
  "MOB-5G-LT":    "5G 라이트+",
  "MOB-5G-MN":    "5G 미니",
  "MOB-5G-PE":    "5G 프리미어 에센셜",
  "MOB-5G-PP":    "5G 프리미어 플러스",
  "MOB-5G-PR":    "5G 프리미어 레귤러",
  "MOB-5G-PS":    "5G 프리미어 슈퍼",
  "MOB-5G-SIG":   "5G 시그니처",
  "MOB-5G-SL":    "5G 슬림+",
  "MOB-5G-SM":    "5G 심플+",
  "MOB-5G-SR":    "5G 시니어",
  "MOB-5G-ST":    "5G 스탠다드",
  "MOB-5G-TN":    "5G 청소년",
  "MOB-5G-YSM":   "5G 유쓰 심플+",
  "MOB-5G-YST":   "5G 유쓰 스탠다드",
  "MOB-LTE-D33":  "LTE 데이터 33",
  "MOB-LTE-KD22": "LTE 키즈 22",
  "MOB-LTE-MIL":  "현역병사 데이터",
  "MOB-LTE-PM":   "LTE 프리미어",
  "MOB-LTE-SR33": "LTE 데이터 시니어 33",
  // 홈/인터넷
  "BND-NET-TV-1G":  "인터넷1G+TV프리미엄",
  "BND-NET-TV-500": "인터넷500M+TV베이직",
  "BND-NET-TV-SH":  "인터넷+TV+스마트홈",
  "NET-100M":       "U+인터넷 100M",
  "NET-500M":       "U+인터넷 500M",
  "NET-GIG-10G":    "U+인터넷 10G",
  "NET-GIG-1G":     "프리미엄 안심 1G",
  "NET-GIG-1G-R":   "프리미엄 안심 보상 1G",
  "NET-GIG-500":    "프리미엄 안심 500M",
  "SH-FREE":        "자유선택 패키지",
  "SH-GOOGLE":      "Google 패키지",
  "SH-GUARD":       "우리집 지킴이 패키지",
  "SH-KIDS":        "키즈케어 패키지",
  "SH-PET":         "펫케어 패키지",
  "TEL-HOME":       "U+홈전화",
  "TEL-HOME-UNL":   "U+홈전화 무제한",
  "TV-ADD":         "U+tv 추가TV",
  "TV-BASIC":       "U+tv 베이직",
  "TV-PREM":        "U+tv 프리미엄",
  "TV-PREM-VOD":    "U+tv 프리미엄 VOD",
  // 부가서비스
  "ADD-DATA-ADD1":  "데이터 1GB 추가",
  "ADD-DATA-ADD5":  "데이터 5GB 추가",
  "ADD-DATA-GFT":   "데이터 선물하기",
  "ADD-DATA-SH":    "데이터 쉐어링",
  "ADD-DISNEY":     "디즈니+",
  "ADD-GAME":       "U+게임팩",
  "ADD-INS-PHONE":  "U+폰케어",
  "ADD-INS-PHONE2": "U+폰케어 프리미엄",
  "ADD-KIDS":       "아이들나라",
  "ADD-MEMBERSHIP": "U+멤버십",
  "ADD-MTVI":       "U+모바일tv",
  "ADD-MUSIC":      "뮤직벨링",
  "ADD-NAVI":       "U+네비",
  "ADD-NETFLIX":    "넷플릭스",
  "ADD-ROAM-10G":   "로밍패스 10GB",
  "ADD-ROAM-3G":    "로밍패스 3GB",
  "ADD-ROAM-5G":    "로밍패스 5GB",
  "ADD-ROAM-UNL":   "로밍패스 무제한",
  "ADD-SAFE-CALL":  "스팸전화 알림",
  "ADD-SAFE-PHISH": "피싱/해킹 안심서비스",
};

/* ─── Categories  (/api/meta/categories) ─── */
// categoryCode → "대분류 › 중분류 › 소분류" 풀 경로

export const CATEGORY_FULL_MAP: Record<string, string> = {
  M_FEE_01: "요금/납부 › 요금제 변경 › 5G 요금제 안내",
  M_FEE_02: "요금/납부 › 요금제 변경 › LTE 요금제 안내",
  M_FEE_03: "요금/납부 › 요금제 변경 › 데이터 쉐어링 변경",
  M_FEE_04: "요금/납부 › 미납 안내 › 미납 요금 소멸",
  M_FEE_05: "요금/납부 › 미납 안내 › 분할 납부 신청",
  M_FEE_06: "요금/납부 › 자동이체 › 카드/계좌 변경",
  M_FEE_07: "요금/납부 › 청구서 문의 › 청구서 항목 이상",
  M_FEE_08: "요금/납부 › 요금 감면 › 신체대상 감면 안내",
  M_FEE_09: "요금/납부 › 요금 할인 › 결합 할인 적용",
  M_FEE_10: "요금/납부 › 요금 할인 › 장기고객 할인",
  M_DEV_01: "기기변경 › 기기변경 장치 › 기기 혜택 소개",
  M_DEV_02: "기기변경 › 기기변경 장치 › 공시지원금 안내",
  M_DEV_03: "기기변경 › 기기변경 할부 › 할부금 소멸",
  M_DEV_04: "기기변경 › 번호이동 › 타사→U+ 번호이동",
  M_DEV_05: "기기변경 › 기기A/S › 기기 수리 접수",
  M_DEV_06: "기기변경 › 유심/eSIM › 유심 교체/재발급",
  M_TRB_01: "장애/A/S › 인터넷 장애 › 속도 저하",
  M_TRB_02: "장애/A/S › 인터넷 장애 › 연결 불가",
  M_TRB_03: "장애/A/S › 인터넷 장애 › Wi-Fi 불안정",
  M_TRB_04: "장애/A/S › TV 장애 › 화면 재생/결함",
  M_TRB_05: "장애/A/S › TV 장애 › 리모컨 오작동",
  M_TRB_06: "장애/A/S › TV 장애 › 셋톱박스 오류",
  M_TRB_07: "장애/A/S › 모바일 장애 › 통화 품질 불량",
  M_TRB_08: "장애/A/S › 모바일 장애 › 데이터 연결 불가",
  M_TRB_09: "장애/A/S › 스마트홈 장애 › 기기 연결 불가",
  M_TRB_10: "장애/A/S › 설치/이전 › 신규 설치 접수",
  M_TRB_11: "장애/A/S › 설치/이전 › 이사 시 이전 설치",
  M_CHN_01: "해지/재약정 › 해지 접수 › 약정 만료 해지",
  M_CHN_02: "해지/재약정 › 해지 접수 › 위약금 문의",
  M_CHN_03: "해지/재약정 › 해지 접수 › 번호이동 해지",
  M_CHN_04: "해지/재약정 › 해지/재약정 › 인터넷 해지 제공",
  M_CHN_05: "해지/재약정 › 해지 방어 › 상품 업그레이드 제안",
  M_CHN_06: "해지/재약정 › 재약정 › 재약정 혜택 안내",
  M_CHN_07: "해지/재약정 › 재약정 › 약정 기간 안내",
  M_ADD_01: "부가서비스 › 부가서비스 가입 › 스마트폰즈 가입",
  M_ADD_02: "부가서비스 › 부가서비스 가입 › 멤버십 혜택 안내",
  M_ADD_03: "부가서비스 › 부가서비스 가입 › 로밍 서비스 가입",
  M_ADD_04: "부가서비스 › 부가서비스 해지 › 부가서비스 혜택 요청",
  M_ADD_05: "부가서비스 › 부가서비스 변경 › OTT 서비스 변경",
  M_ADD_06: "부가서비스 › 보험/보상 › U+ 폰케어 가입/관리",
  M_ETC_01: "기타 › 일반 문의 › 매장 위치 안내",
  M_ETC_02: "기타 › 일반 문의 › 영수증 발급 문의",
  M_ETC_03: "기타 › 칭찬/제안 › 서비스 개선 제안",
  M_ETC_04: "기타 › 민원 › 불만 접수",
  M_OTB_01: "아웃바운드 › 재약정 권유 › 약정 만료 고객 재약정 제안",
  M_OTB_02: "아웃바운드 › 요금제 업셀링 › 상위 요금제 전환 제안",
  M_OTB_03: "아웃바운드 › 해지방어 사후관리 › 해지 철회 고객 사후 만족도 확인",
  M_OTB_04: "아웃바운드 › 연체/납부 안내 › 미납 요금 납부 독려 및 분납 안내",
  M_OTB_05: "아웃바운드 › 윈백(Win-back) › 이탈 고객 복귀 유도",
  M_OTB_06: "아웃바운드 › 해피콜/만족도조사 › 설치/개통 후 만족도 확인 및 추가 니즈 발굴",
  M_OTB_07: "아웃바운드 › 신규가입권유 › 신규가입",
};

/* ─── Analysis Codes  (/api/meta/analysis-codes) ─── */
// classification: "complaint_category" — 인바운드 불만/해지 사유

export const COMPLAINT_CATEGORY_MAP: Record<string, string> = {
  COST_HIGH:    "요금 부담",
  COST_PENALTY: "위약금 부담",
  COMP_BENEFIT: "타사 혜택",
  QUAL_SPEED:   "속도 불만",
  QUAL_TECH:    "기술 장애",
  ENV_MOVE:     "이사·이전",
  ENV_UNUSED:   "미사용",
  ETC_BILLING:  "청구 오류",
  SVC_FAULT:    "서비스 불통",
  FEE_INQUIRY:  "요금 조회",
  DEVICE_CHANGE:"기기 변경",
  ADDON_CHG:    "부가서비스 변경",
  CONTRACT_END: "약정 만료",
  DUPLICATE_SVC:"중복 회선",
  OTHER:        "기타",
};

// classification: "defense_category" — 해지 방어 조치

export const DEFENSE_CATEGORY_MAP: Record<string, string> = {
  BNFT_DISCOUNT:    "요금 할인",
  BNFT_GIFT:        "사은품 제공",
  OPT_DOWNGRADE:    "요금제 다운",
  PHYS_RELOCATION:  "이전 설치",
  PHYS_TECH_CHECK:  "기술 점검",
  ADM_CLOSE_FAIL:   "방어 실패",
  ADM_GUIDE:        "안내 유지",
  CONTRACT_RENEW:   "재약정",
  LOYALTY_POINT:    "포인트 지급",
  PLAN_CHANGE:      "요금제 변경",
  OTHER:            "기타",
};

// classification: "outbound_category" — 아웃바운드 거절 사유

export const OUTBOUND_CATEGORY_MAP: Record<string, string> = {
  COST:        "비용 부담",
  NO_NEED:     "필요 없음",
  SWITCH:      "타사 전환",
  CONSIDER:    "검토 중",
  DISSATISFIED:"서비스 불만",
  OTHER:       "기타",
};
