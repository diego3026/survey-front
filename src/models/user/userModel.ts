export interface RoleModel {
    id: number;
    name: 'ADMIN' | 'USER';
}


export interface UserModel {
    id: number;
    roles: RoleModel[];
    email: string;
    name: string;
}