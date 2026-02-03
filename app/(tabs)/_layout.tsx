import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Octicons name="home-fill" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name='tasks/index'
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => <Octicons name="tasklist" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name='groups/index'
        options={{
          title: 'Grupos',
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name='settings/index'
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
