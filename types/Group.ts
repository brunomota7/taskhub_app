
export type GroupOwner = {
    name: string;
    email: string;
};

export type GroupResponse = {
    id: string;
    groupName: string;
    description: string;
    typeGroup: string;
    quantTasks: number;
    ower: GroupOwner;
};

export type CreateGroup = {
    groupName: string;
    description: string;
};
