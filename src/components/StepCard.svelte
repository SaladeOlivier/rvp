<script lang="ts">
  import type { Step } from '../types';
  import { progressStore } from '../stores/progressStore';

  export let step: Step;
  export let number: number;

  let expanded = false;
  let expandedLocations: Record<string, boolean> = {};

  $: isCompleted = $progressStore.steps[step.id] || false;

  function toggleStep() {
    progressStore.toggleStep(step.id);
  }

  function toggleExpanded() {
    expanded = !expanded;
  }

  function toggleLocation(location: string) {
    expandedLocations[location] = !expandedLocations[location];
  }

  function getFlag(location: string): string {
    const flagMap: Record<string, string> = {
      'France': '🇫🇷',
      'Saint Petersburg': '🇷🇺',
      'Russia': '🇷🇺',
    };
    return flagMap[location] || '🌍';
  }
</script>

<div class="step-card" class:completed={isCompleted}>
  <div class="step-header" on:click={toggleExpanded} on:keydown={(e) => e.key === 'Enter' && toggleExpanded()} role="button" tabindex="0">
    <div class="step-title-section">
      <div class="step-number">{number}</div>
      <h3>{step.title}</h3>
    </div>
    <div class="step-actions">
      <button
        class="checkbox"
        class:checked={isCompleted}
        on:click|stopPropagation={toggleStep}
        aria-label="Mark as complete"
      >
        {#if isCompleted}✓{/if}
      </button>
      <span class="expand-icon" class:expanded>{expanded ? '▼' : '▶'}</span>
    </div>
  </div>

  {#if expanded}
    <div class="step-content">
      <p class="description">{step.description}</p>

      <div class="section">
        <h4>📝 What to Do:</h4>
        <ul>
          {#each step.details as detail}
            <li>{detail}</li>
          {/each}
        </ul>
      </div>

      {#if step.documents && step.documents.length > 0}
        <div class="section">
          <h4>📄 Required Documents:</h4>
          <ul class="documents-list">
            {#each step.documents as doc}
              <li>{doc}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if step.tips && step.tips.length > 0}
        <div class="section tips">
          <h4>💡 Tips:</h4>
          <ul>
            {#each step.tips as tip}
              <li>{tip}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if step.locationTips && step.locationTips.length > 0}
        <div class="section location-tips">
          <h4>📍 Location-Specific Tips:</h4>
          {#each step.locationTips as locationTip}
            {@const isExpanded = expandedLocations[locationTip.location]}
            {@const flag = getFlag(locationTip.location)}
            <div class="location-tip-card">
              <button
                class="location-header"
                on:click={() => toggleLocation(locationTip.location)}
                aria-expanded={isExpanded}
              >
                <span class="location-flag">{flag}</span>
                <h5>{locationTip.location}</h5>
                <span class="expand-arrow" class:expanded={isExpanded}>▼</span>
              </button>
              {#if isExpanded}
                <ul>
                  {#each locationTip.tips as tip}
                    <li>{tip}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .step-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.2s ease;
    border: 2px solid #e0e0e0;
    border-left: 4px solid #0039a6;
  }

  .step-card:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    border-color: #0039a6;
  }

  .step-card.completed {
    border-left-color: #4caf50;
    border-color: #4caf50;
    background: #f8fdf9;
  }

  .step-header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .step-title-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }

  .step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #0039a6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .completed .step-number {
    background: #4caf50;
  }

  h3 {
    font-size: 1.05rem;
    color: #333;
    margin: 0;
    font-weight: 600;
  }

  .step-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
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
  }

  .checkbox:hover {
    border-color: #0039a6;
    transform: scale(1.1);
  }

  .checkbox.checked {
    background: #4caf50;
    border-color: #4caf50;
    color: white;
  }

  .expand-icon {
    font-size: 0.9rem;
    color: #666;
    transition: transform 0.2s;
  }

  .step-content {
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-top: 1px solid #e0e0e0;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .description {
    color: #555;
    font-size: 0.9rem;
    margin: 0.75rem 0;
    line-height: 1.5;
  }

  .section {
    margin: 1rem 0;
  }

  .section h4 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .section ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .section li {
    margin: 0.35rem 0;
    line-height: 1.5;
    color: #333;
    font-size: 0.85rem;
  }

  .documents-list li {
    font-family: 'Courier New', monospace;
    background: #f8f9fa;
    padding: 0.35rem 0.5rem;
    margin: 0.35rem 0;
    border-left: 3px solid #0039a6;
    font-size: 0.85rem;
  }

  .tips {
    background: #fffcf5;
    padding: 0.75rem;
    border-radius: 6px;
    border-left: 3px solid #ffc107;
  }

  .tips h4 {
    color: #333;
  }

  .tips li {
    color: #333;
  }

  .location-tips {
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;
  }

  .location-tips h4 {
    color: #333;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .location-tip-card {
    background: white;
    border: 2px solid #e3e8f7;
    border-left: 4px solid #0039a6;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: all 0.2s;
  }

  .location-tip-card:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-color: #0039a6;
  }

  .location-tip-card:last-child {
    margin-bottom: 0;
  }

  .location-header {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.75rem;
    margin: -0.5rem -0.5rem 0 -0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.2s;
    border-radius: 6px;
  }

  .location-header:hover {
    background: #f8f9ff;
  }

  .location-flag {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .location-tip-card h5 {
    color: #333;
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    text-align: left;
    margin: 0;
  }

  .expand-arrow {
    color: #666;
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .expand-arrow.expanded {
    transform: rotate(180deg);
  }

  .location-tip-card ul {
    margin: 1rem 0 0.5rem 0;
    padding-left: 0;
    list-style: none;
  }

  .location-tip-card li {
    color: #333;
    font-size: 0.9rem;
    line-height: 1.6;
    padding: 0.4rem 0 0.4rem 1.25rem;
    position: relative;
  }

  .location-tip-card li::before {
    content: '•';
    position: absolute;
    left: 0.4rem;
    color: #0039a6;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .step-header {
      padding: 1rem;
    }

    .step-title-section {
      gap: 0.75rem;
    }

    .step-number {
      width: 36px;
      height: 36px;
      font-size: 1rem;
    }

    h3 {
      font-size: 1rem;
    }

    .checkbox {
      width: 28px;
      height: 28px;
    }
  }
</style>
