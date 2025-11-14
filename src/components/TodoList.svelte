<script lang="ts">
  import { progressStore } from '../stores/progressStore';
  import { mainSteps, sideQuests } from '../data/steps';

  let newTodoText = '';
  let showCompleted = true;

  function addTodo() {
    if (newTodoText.trim()) {
      progressStore.addTodo(newTodoText.trim());
      newTodoText = '';
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  $: mainTodos = mainSteps.map((step) => ({
    id: step.id,
    text: step.title,
    completed: $progressStore.steps[step.id] || false,
    category: 'main' as const,
  }));

  $: sideTodos = sideQuests.map((quest) => ({
    id: quest.id,
    text: quest.title,
    completed: $progressStore.sideQuests[quest.id] || false,
    category: 'side' as const,
  }));

  $: customTodos = $progressStore.todos;

  $: filteredCustomTodos = showCompleted
    ? customTodos
    : customTodos.filter((t) => !t.completed);

  $: totalTodos = mainTodos.length + sideTodos.length + customTodos.length;
  $: completedTodos =
    mainTodos.filter((t) => t.completed).length +
    sideTodos.filter((t) => t.completed).length +
    customTodos.filter((t) => t.completed).length;
  $: progressPercentage = Math.round((completedTodos / totalTodos) * 100);
</script>

<div class="todo-list">
  <div class="todo-header">
    <h2>My Todo List</h2>
    <div class="progress-summary">
      <span class="progress-text">{completedTodos} / {totalTodos} tasks completed</span>
      <div class="mini-progress">
        <div class="mini-progress-fill" style="width: {progressPercentage}%"></div>
      </div>
    </div>
  </div>

  <div class="add-todo">
    <input
      type="text"
      bind:value={newTodoText}
      on:keypress={handleKeyPress}
      placeholder="Add a custom todo..."
    />
    <button on:click={addTodo} disabled={!newTodoText.trim()}>+ Add</button>
  </div>

  <div class="filter-section">
    <label>
      <input type="checkbox" bind:checked={showCompleted} />
      Show completed tasks
    </label>
  </div>

  <div class="todos-container">
    <div class="todo-section">
      <h3>📋 Main RVP Steps</h3>
      <div class="todos">
        {#each mainTodos as todo}
          <div class="todo-item" class:completed={todo.completed}>
            <button
              class="todo-checkbox"
              class:checked={todo.completed}
              on:click={() => progressStore.toggleStep(todo.id)}
            >
              {#if todo.completed}✓{/if}
            </button>
            <span class="todo-text">{todo.text}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="todo-section">
      <h3>⭐ Side Quests</h3>
      <div class="todos">
        {#each sideTodos as todo}
          <div class="todo-item" class:completed={todo.completed}>
            <button
              class="todo-checkbox"
              class:checked={todo.completed}
              on:click={() => progressStore.toggleSideQuest(todo.id)}
            >
              {#if todo.completed}✓{/if}
            </button>
            <span class="todo-text">{todo.text}</span>
          </div>
        {/each}
      </div>
    </div>

    {#if customTodos.length > 0}
      <div class="todo-section">
        <h3>✏️ Custom Tasks</h3>
        <div class="todos">
          {#each filteredCustomTodos as todo}
            <div class="todo-item custom" class:completed={todo.completed}>
              <button
                class="todo-checkbox"
                class:checked={todo.completed}
                on:click={() => progressStore.toggleTodo(todo.id)}
              >
                {#if todo.completed}✓{/if}
              </button>
              <span class="todo-text">{todo.text}</span>
              <button class="delete-btn" on:click={() => progressStore.deleteTodo(todo.id)}>
                ✕
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class="reset-section">
    <button class="reset-btn" on:click={() => {
      if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        progressStore.resetProgress();
      }
    }}>
      🔄 Reset All Progress
    </button>
  </div>
</div>

<style>
  .todo-list {
    max-width: 800px;
    margin: 0 auto;
  }

  .todo-header {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border-left: 4px solid #0039a6;
  }

  .todo-header h2 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .progress-summary {
    margin-top: 1rem;
  }

  .progress-text {
    display: block;
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .mini-progress {
    width: 100%;
    height: 12px;
    background: #e0e0e0;
    border-radius: 6px;
    overflow: hidden;
  }

  .mini-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50 0%, #8bc34a 100%);
    transition: width 0.3s ease;
  }

  .add-todo {
    background: white;
    padding: 1.25rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    display: flex;
    gap: 1rem;
    border: 2px solid #e0e0e0;
  }

  .add-todo input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  .add-todo input:focus {
    outline: none;
    border-color: #0039a6;
  }

  .add-todo button {
    padding: 0.75rem 1.5rem;
    background: #0039a6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 600;
  }

  .add-todo button:hover:not(:disabled) {
    background: #002d7a;
    transform: translateY(-1px);
  }

  .add-todo button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  .filter-section {
    background: white;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border: 2px solid #e0e0e0;
  }

  .filter-section label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.85rem;
    color: #555;
  }

  .filter-section input[type='checkbox'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .todos-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .todo-section {
    background: white;
    padding: 1.25rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid #e0e0e0;
    border-left: 4px solid #0039a6;
  }

  .todo-section h3 {
    color: #333;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .todos {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .todo-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    background: #f9f9f9;
    border-radius: 8px;
    transition: all 0.2s;
  }

  .todo-item:hover {
    background: #f0f0f0;
  }

  .todo-item.completed {
    opacity: 0.6;
  }

  .todo-item.completed .todo-text {
    text-decoration: line-through;
    color: #999;
  }

  .todo-checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .todo-checkbox:hover {
    border-color: #0039a6;
    transform: scale(1.1);
  }

  .todo-checkbox.checked {
    background: #4caf50;
    border-color: #4caf50;
    color: white;
  }

  .todo-text {
    flex: 1;
    color: #333;
    font-size: 0.85rem;
    text-align: left;
  }

  .delete-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: #f44336;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all 0.2s;
    flex-shrink: 0;
    opacity: 0.7;
  }

  .delete-btn:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  .reset-section {
    margin-top: 2rem;
    text-align: center;
  }

  .reset-btn {
    padding: 0.75rem 1.5rem;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 600;
  }

  .reset-btn:hover {
    background: #d32f2f;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .add-todo {
      flex-direction: column;
    }

    .add-todo button {
      width: 100%;
    }
  }
</style>
