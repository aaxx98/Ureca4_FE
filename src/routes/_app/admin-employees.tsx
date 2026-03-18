import { createFileRoute } from "@tanstack/react-router";
import { EmployeePage } from "../../pages/admin/employee/EmployeePage";

export const Route = createFileRoute("/_app/admin-employees")({ component: EmployeePage });
