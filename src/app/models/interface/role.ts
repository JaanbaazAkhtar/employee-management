export interface IRole {
    roleId: number,
    role: string
}

export interface APIResponse {
    message: string,
    result: boolean,
    data: any
}

export interface IDesignation {
    designationId: number,
    designation: string
}

export interface IEmployee {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}