
import { CreateGroup, GroupResponse } from "@/types/Group";
import { api } from "./api";

export async function createGroup(data: CreateGroup): Promise<void> {
    await api.post("/groups", data);
};

export async function getMyGroups(): Promise<GroupResponse[]> {
    const response = await api.get<GroupResponse[]>("/groups/me");
    return response.data;
}

export async function getGroupById(groupId: string): Promise<GroupResponse> {
    const response = await api.get<GroupResponse>(`/groups/${groupId}`)
    return response.data;
}
