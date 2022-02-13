const serverVars = {
  baseUrl: "http://unknownApi.com/api/",
  adminlogin:"admin/login",
  allAdmins:"admin/all-admins?limit=",
  allRoles:"admin/get-admin-roles",
  createAdmin:"admin/create-admin",
  updateAdmin:"admin/update-admin",
  updateRole:"admin/update-admin-priviledge",
  createRole:"admin/add-admin-role"
};
export const numberFormat = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);

export function getConfig(apiName) {
  switch (apiName) {
    case "adminlogin":
      return serverVars.baseUrl + serverVars.adminlogin;
    case "allAdmins":
        return serverVars.baseUrl + serverVars.allAdmins;
    case "allRoles":
        return serverVars.baseUrl + serverVars.allRoles;
    case "createAdmin":
        return serverVars.baseUrl + serverVars.createAdmin;
    case "updateAdmin":
        return serverVars.baseUrl + serverVars.updateAdmin;
    case "updateRole":
        return serverVars.baseUrl + serverVars.updateRole;
    case "createRole":
        return serverVars.baseUrl + serverVars.createRole;
    default:
      return null;
  }
}