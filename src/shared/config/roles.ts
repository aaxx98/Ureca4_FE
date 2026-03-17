/** 로그인 API 응답의 role 값 그대로 사용 ("상담사" | "관리자") */
export type UserRole = '상담사' | '관리자';

export const MENU_KEYS = {
  // 상담업무
  CONSULTATION_LIST:     'consultation_list',
  RESULT_WRITE:          'result_write',
  CONSULTATION_SUMMARY:  'consultation_summary',
  CONSULTATION_ANALYSIS: 'consultation_analysis',

  // 대시보드
  OPERATION_POLICY:       'operation_policy',
  MANUAL:                 'manual',
  CUSTOMER_TYPE_RESPONSE: 'customer_type_response',
  EXCELLENT_CASE:         'excellent_case',
  NOTICE:                 'notice',

  // 관리
  EMPLOYEE_MANAGEMENT: 'employee_management',
  MY_ACCOUNT:          'my_account',
} as const;

export type MenuKey = (typeof MENU_KEYS)[keyof typeof MENU_KEYS];

const ADMIN_MENUS: MenuKey[] = [
  MENU_KEYS.CONSULTATION_LIST,
  MENU_KEYS.CONSULTATION_SUMMARY,
  MENU_KEYS.CONSULTATION_ANALYSIS,
  MENU_KEYS.OPERATION_POLICY,
  MENU_KEYS.MANUAL,
  MENU_KEYS.CUSTOMER_TYPE_RESPONSE,
  MENU_KEYS.EXCELLENT_CASE,
  MENU_KEYS.NOTICE,
  MENU_KEYS.EMPLOYEE_MANAGEMENT,
  MENU_KEYS.MY_ACCOUNT,
];

const COUNSELOR_MENUS: MenuKey[] = [
  MENU_KEYS.CONSULTATION_LIST,
  MENU_KEYS.RESULT_WRITE,
  MENU_KEYS.CONSULTATION_SUMMARY,
  MENU_KEYS.CONSULTATION_ANALYSIS,
  MENU_KEYS.OPERATION_POLICY,
  MENU_KEYS.MANUAL,
  MENU_KEYS.CUSTOMER_TYPE_RESPONSE,
  MENU_KEYS.EXCELLENT_CASE,
  MENU_KEYS.NOTICE,
  MENU_KEYS.MY_ACCOUNT,
];

export const ROLE_ACCESS: Record<UserRole, Set<MenuKey>> = {
  관리자: new Set(ADMIN_MENUS),
  상담사: new Set(COUNSELOR_MENUS),
};

export function hasAccess(role: UserRole, menuKey: MenuKey): boolean {
  return ROLE_ACCESS[role].has(menuKey);
}
