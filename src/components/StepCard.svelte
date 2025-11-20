<script lang="ts">
  import type { Step, StepDetail, DocumentReference } from '../types';
  import { progressStore } from '../stores/progressStore';
  import { get } from 'svelte/store';

  export let step: Step;
  export let number: number;

  let expanded = false;
  let expandedLocations: Record<string, boolean> = {};
  let activeTip: string | null = null;

  $: isCompleted = $progressStore.steps[step.id] || false;

  // Create a reactive map of document IDs from this step
  let documentMap: Record<string, boolean> = {};
  $: {
    const allDocs = [...(step.documentsToGive || []), ...(step.documentsToReceive || [])];
    const newMap: Record<string, boolean> = {};
    // Use $progressStore to create reactive dependency
    const docs = $progressStore.documents || {};
    for (const doc of allDocs) {
      newMap[doc.id] = docs[doc.id] || false;
    }
    documentMap = newMap;
  }

  function toggleStep() {
    progressStore.toggleStep(step.id);
  }

  function toggleExpanded() {
    expanded = !expanded;
  }

  function toggleLocation(location: string) {
    expandedLocations[location] = !expandedLocations[location];
  }

  function toggleDocument(docName: string) {
    progressStore.toggleDocument(docName);
  }

  function showTip(tip: string) {
    activeTip = tip;
  }

  function hideTip() {
    activeTip = null;
  }

  function isStepDetail(detail: string | StepDetail): detail is StepDetail {
    return typeof detail === 'object' && 'text' in detail;
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
            <li class="detail-item">
              {#if isStepDetail(detail)}
                <span class="detail-text">{detail.text}</span>
                {#if detail.tip}
                  <button
                    class="tip-icon"
                    on:mouseenter={() => showTip(detail.tip!)}
                    on:mouseleave={hideTip}
                    on:focus={() => showTip(detail.tip!)}
                    on:blur={hideTip}
                    aria-label="Show tip"
                  >
                    💡
                  </button>
                  {#if activeTip === detail.tip}
                    <div class="tip-bubble">{detail.tip}</div>
                  {/if}
                {/if}
              {:else}
                {detail}
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      {#if step.documentsToGive && step.documentsToGive.length > 0}
        <div class="section">
          <h4>📤 Documents to Provide:</h4>
          <ul class="documents-list">
            {#each step.documentsToGive as doc}
              <li>
                <label class="document-checkbox">
                  <input
                    type="checkbox"
                    checked={documentMap[doc.id] || false}
                    on:change={() => toggleDocument(doc.id)}
                  />
                  <span>{doc.name}</span>
                </label>
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if step.documentsToReceive && step.documentsToReceive.length > 0}
        <div class="section">
          <h4>📥 Documents to Receive:</h4>
          <ul class="documents-list receive">
            {#each step.documentsToReceive as doc}
              <li>
                <label class="document-checkbox">
                  <input
                    type="checkbox"
                    checked={documentMap[doc.id] || false}
                    on:change={() => toggleDocument(doc.id)}
                  />
                  <span>{doc.name}</span>
                </label>
              </li>
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

  .detail-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .detail-text {
    flex: 1;
  }

  .tip-icon {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    flex-shrink: 0;
  }

  .tip-icon:hover {
    transform: scale(1.2);
  }

  .tip-bubble {
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 0.5rem;
    background: #fffcf5;
    border: 2px solid #ffc107;
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 0.8rem;
    line-height: 1.4;
    color: #333;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 400px;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .documents-list li {
    background: #f8f9fa;
    padding: 0.35rem 0.5rem;
    margin: 0.35rem 0;
    border-left: 3px solid #0039a6;
    font-size: 0.85rem;
    list-style: none;
  }

  .documents-list.receive li {
    border-left-color: #4caf50;
  }

  .document-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    user-select: none;
  }

  .document-checkbox input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .document-checkbox span {
    flex: 1;
    font-family: 'Courier New', monospace;
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

  /* Tablet breakpoint */
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

    .step-content {
      padding: 0 1rem 1rem 1rem;
    }

    .location-tip-card {
      padding: 0.75rem;
    }
  }

  /* Mobile breakpoint */
  @media (max-width: 480px) {
    .step-header {
      padding: 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .step-title-section {
      gap: 0.5rem;
      flex: 1 1 100%;
    }

    .step-number {
      width: 32px;
      height: 32px;
      font-size: 0.9rem;
    }

    h3 {
      font-size: 0.9rem;
    }

    .step-actions {
      gap: 0.75rem;
      margin-left: auto;
    }

    .checkbox {
      width: 26px;
      height: 26px;
      font-size: 1rem;
    }

    .expand-icon {
      font-size: 0.8rem;
    }

    .step-content {
      padding: 0 0.75rem 0.75rem 0.75rem;
    }

    .description {
      font-size: 0.85rem;
    }

    .section {
      margin: 0.75rem 0;
    }

    .section h4 {
      font-size: 0.85rem;
    }

    .section li {
      font-size: 0.8rem;
    }

    .detail-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }

    .tip-icon {
      font-size: 0.9rem;
      align-self: flex-end;
    }

    .tip-bubble {
      max-width: calc(100vw - 2rem);
      font-size: 0.75rem;
      padding: 0.5rem;
    }

    .documents-list li {
      font-size: 0.8rem;
      padding: 0.25rem 0.4rem;
    }

    .document-checkbox {
      gap: 0.4rem;
    }

    .document-checkbox input[type="checkbox"] {
      width: 16px;
      height: 16px;
    }

    .location-tips {
      margin-top: 1rem;
      padding-top: 0.75rem;
    }

    .location-tip-card {
      padding: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .location-header {
      padding: 0.5rem;
      gap: 0.5rem;
    }

    .location-flag {
      font-size: 1.25rem;
    }

    .location-tip-card h5 {
      font-size: 0.9rem;
    }

    .location-tip-card li {
      font-size: 0.8rem;
      padding: 0.3rem 0 0.3rem 1rem;
    }
  }
</style>
