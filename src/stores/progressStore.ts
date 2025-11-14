import { writable } from 'svelte/store';
import type { UserProgress, TodoItem } from '../types';
import { mainSteps, sideQuests } from '../data/steps';

const STORAGE_KEY = 'rvp702_progress';

function createProgressStore() {
  // Load from localStorage or initialize
  const loadProgress = (): UserProgress => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error('Failed to parse stored progress', e);
        }
      }
    }

    // Default initial state
    return {
      steps: {},
      sideQuests: {},
      todos: [],
      formData: {},
      lastUpdated: new Date().toISOString(),
    };
  };

  const { subscribe, set, update } = writable<UserProgress>(loadProgress());

  // Save to localStorage whenever store updates
  subscribe((value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  });

  return {
    subscribe,

    toggleStep: (stepId: string) => {
      update((progress) => {
        progress.steps[stepId] = !progress.steps[stepId];
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    toggleSideQuest: (questId: string) => {
      update((progress) => {
        progress.sideQuests[questId] = !progress.sideQuests[questId];
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    addTodo: (text: string, category: 'main' | 'side' | 'custom' = 'custom', stepId?: string) => {
      update((progress) => {
        const newTodo: TodoItem = {
          id: Date.now().toString(),
          text,
          completed: false,
          category,
          stepId,
        };
        progress.todos = [...progress.todos, newTodo];
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    toggleTodo: (todoId: string) => {
      update((progress) => {
        const todo = progress.todos.find((t) => t.id === todoId);
        if (todo) {
          todo.completed = !todo.completed;
        }
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    deleteTodo: (todoId: string) => {
      update((progress) => {
        progress.todos = progress.todos.filter((t) => t.id !== todoId);
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    updateFormData: (data: Partial<UserProgress['formData']>) => {
      update((progress) => {
        progress.formData = { ...progress.formData, ...data };
        progress.lastUpdated = new Date().toISOString();
        return progress;
      });
    },

    resetProgress: () => {
      set({
        steps: {},
        sideQuests: {},
        todos: [],
        formData: {},
        lastUpdated: new Date().toISOString(),
      });
    },

    getProgress: () => {
      const stepsCompleted = mainSteps.filter((s) => {
        let completed = false;
        subscribe((p) => { completed = p.steps[s.id] || false; })();
        return completed;
      }).length;

      const totalSteps = mainSteps.length;
      return Math.round((stepsCompleted / totalSteps) * 100);
    },
  };
}

export const progressStore = createProgressStore();
