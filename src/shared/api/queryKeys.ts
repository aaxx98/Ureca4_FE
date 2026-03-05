import {
	getCheckEmailQueryKey,
	getGetMyInfoQueryKey,
} from "./generated/auth"
import {
	getGetEmployeeDetailQueryKey,
	getGetEmployeesQueryKey,
} from "./generated/admin-employee-management"
import { getGetPermissionsQueryKey } from "./generated/human-resources-management"
import {
	getGetFilterDefinitionsQueryKey,
	getGetFilterGroupDetailQueryKey,
	getGetMyFilterGroupsQueryKey,
} from "./generated/search-filter"

export const queryKeys = {
	auth: {
		me: getGetMyInfoQueryKey,
		checkEmail: getCheckEmailQueryKey,
	},
	adminEmployee: {
		employees: getGetEmployeesQueryKey,
		employeeDetail: getGetEmployeeDetailQueryKey,
	},
	hr: {
		permissions: getGetPermissionsQueryKey,
	},
	searchFilter: {
		filterGroupDetail: getGetFilterGroupDetailQueryKey,
		myFilterGroups: getGetMyFilterGroupsQueryKey,
		filterDefinitions: getGetFilterDefinitionsQueryKey,
	},
}
