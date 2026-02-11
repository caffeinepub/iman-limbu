import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Message, UserProfile } from '../backend';
import { generateReply } from '../lib/replyEngine/generateReply';
import { useCompanionSettings } from './useCompanionSettings';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetConversation() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Message[]>({
    queryKey: ['conversation'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getConversation(null);
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useSendMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const { settings } = useCompanionSettings();

  return useMutation({
    mutationFn: async (message: string) => {
      if (!actor) throw new Error('Actor not available');
      
      // Get current conversation to calculate message count for seeding
      const currentConversation = queryClient.getQueryData<Message[]>(['conversation']) || [];
      const messageCount = currentConversation.length;
      
      // Generate companion reply using the reply engine
      const companionReply = generateReply(message, settings, messageCount);
      
      // Send user message to backend (backend will add a placeholder system message)
      await actor.appendMessage(message);
      
      // Now send the generated companion reply
      await actor.appendMessage(companionReply);
      
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversation'] });
    },
  });
}

export function useClearConversation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: null) => {
      if (!actor) throw new Error('Actor not available');
      return actor.clearConversation(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['conversation'] });
    },
  });
}
