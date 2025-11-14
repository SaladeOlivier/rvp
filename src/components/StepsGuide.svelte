<script lang="ts">
  import { progressStore } from '../stores/progressStore';
  import { mainSteps } from '../data/steps';
  import StepCard from './StepCard.svelte';
</script>

<div class="steps-guide">
  <div class="intro">
    <h2>Main RVP702 Process</h2>
    <p>
      Follow these steps to successfully obtain your Russian Temporary Residency Permit (RVP)
      under the RVP702 program. Click on each step to expand details.
    </p>
  </div>

  <div class="steps-list">
    {#each mainSteps as step, index}
      <StepCard {step} number={index + 1} />
    {/each}
  </div>
</div>

<style>
  .steps-guide {
    max-width: 900px;
    margin: 0 auto;
  }

  .intro {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border-left: 4px solid #0039a6;
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

  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
