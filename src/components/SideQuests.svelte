<script lang="ts">
  import { progressStore } from '../stores/progressStore';
  import { sideQuests } from '../data/steps';
  import type { SideQuest } from '../types';

  function toggleQuest(questId: string) {
    progressStore.toggleSideQuest(questId);
  }
</script>

<div class="side-quests">
  <div class="intro">
    <h2>Side Quests</h2>
    <p>
      These are important tasks that run in parallel with the main RVP process.
      Complete these to make your life easier in Russia!
    </p>
  </div>

  <div class="quests-grid">
    {#each sideQuests as quest}
      <div class="quest-card" class:completed={$progressStore.sideQuests[quest.id]}>
        <div class="quest-header">
          <h3>{quest.title}</h3>
          <button
            class="checkbox"
            class:checked={$progressStore.sideQuests[quest.id]}
            on:click={() => toggleQuest(quest.id)}
          >
            {#if $progressStore.sideQuests[quest.id]}✓{/if}
          </button>
        </div>

        <p class="quest-description">{quest.description}</p>

        <div class="quest-steps">
          <h4>Steps:</h4>
          <ol>
            {#each quest.steps as step}
              <li>{step}</li>
            {/each}
          </ol>
        </div>

        {#if quest.optional}
          <span class="optional-badge">Optional</span>
        {:else}
          <span class="required-badge">Required</span>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .side-quests {
    max-width: 1000px;
    margin: 0 auto;
  }

  .intro {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border-left: 4px solid #d52b1e;
  }

  .intro h2 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .intro p {
    color: #555;
    line-height: 1.5;
    font-size: 0.95rem;
    margin: 0;
  }

  .quests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .quest-card {
    background: white;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    border: 2px solid #e0e0e0;
    border-left: 4px solid #d52b1e;
    position: relative;
  }

  .quest-card:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    border-color: #d52b1e;
  }

  .quest-card.completed {
    border-left-color: #4caf50;
    border-color: #4caf50;
    background: #f8fdf9;
  }

  .quest-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .quest-header h3 {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
    flex: 1;
    font-weight: 600;
  }

  .checkbox {
    width: 32px;
    height: 32px;
    border: 2px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.2s;
    flex-shrink: 0;
    margin-left: 1rem;
  }

  .checkbox:hover {
    border-color: #d52b1e;
    transform: scale(1.1);
  }

  .checkbox.checked {
    background: #4caf50;
    border-color: #4caf50;
    color: white;
  }

  .quest-description {
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  .quest-steps h4 {
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .quest-steps ol {
    margin: 0;
    padding-left: 1.25rem;
  }

  .quest-steps li {
    margin: 0.35rem 0;
    color: #333;
    line-height: 1.5;
    font-size: 0.85rem;
  }

  .optional-badge,
  .required-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  .optional-badge {
    background: #e3f2fd;
    color: #1976d2;
  }

  .required-badge {
    background: #ffebee;
    color: #c62828;
  }

  /* Tablet breakpoint */
  @media (max-width: 768px) {
    .quests-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .intro {
      padding: 1.25rem;
    }

    .intro h2 {
      font-size: 1.3rem;
    }

    .intro p {
      font-size: 0.9rem;
    }

    .quest-card {
      padding: 1rem;
    }

    .checkbox {
      width: 28px;
      height: 28px;
    }
  }

  /* Mobile breakpoint */
  @media (max-width: 480px) {
    .intro {
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .intro h2 {
      font-size: 1.2rem;
    }

    .intro p {
      font-size: 0.85rem;
    }

    .quests-grid {
      gap: 0.75rem;
    }

    .quest-card {
      padding: 0.75rem;
    }

    .quest-header h3 {
      font-size: 1rem;
    }

    .checkbox {
      width: 26px;
      height: 26px;
      margin-left: 0.75rem;
    }

    .quest-description {
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }

    .quest-steps h4 {
      font-size: 0.85rem;
    }

    .quest-steps li {
      font-size: 0.8rem;
    }

    .optional-badge,
    .required-badge {
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
      margin-top: 0.75rem;
    }
  }
</style>
