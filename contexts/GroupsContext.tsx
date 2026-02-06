import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getMyGroups,
  createGroup,
  deleteGroup,
} from "@/services/groups.service";
import { GroupResponse, CreateGroup } from "@/types/Group";

type GroupsContextData = {
  groups: GroupResponse[];
  loading: boolean;
  loadGroups: () => Promise<void>;
  addGroup: (data: CreateGroup) => Promise<void>;
  deleteMyGroup: (groupId: string) => Promise<void>;
};

const GroupsContext = createContext<GroupsContextData>({} as GroupsContextData);

export function GroupsProvider({ children }: { children: React.ReactNode }) {
  const [groups, setGroups] = useState<GroupResponse[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadGroups() {
    setLoading(true);
    const data = await getMyGroups();
    setGroups(data);
    setLoading(false);
  }

  async function addGroup(data: CreateGroup) {
    await createGroup(data);
    await loadGroups();
  }

  async function deleteMyGroup(groupId: string) {
    try {
      await deleteGroup(groupId);
      setGroups((prev) => prev.filter((group) => group.id !== groupId));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <GroupsContext.Provider
      value={{ groups, loading, loadGroups, addGroup, deleteMyGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
}

export function useGroups() {
  return useContext(GroupsContext);
}
