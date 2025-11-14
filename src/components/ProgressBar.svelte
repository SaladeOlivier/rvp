<script lang="ts">
  import { progressStore } from '../stores/progressStore';
  import { mainSteps } from '../data/steps';

  let progress = 0;

  progressStore.subscribe((p) => {
    const completed = mainSteps.filter((s) => p.steps[s.id]).length;
    progress = Math.round((completed / mainSteps.length) * 100);
  });
</script>

<div class="progress-container">
  <div class="progress-info">
    <span>Overall Progress</span>
    <span class="percentage">{progress}%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: {progress}%"></div>
  </div>
  <div class="progress-text">
    {mainSteps.filter((s) => $progressStore.steps[s.id]).length} of {mainSteps.length} steps completed
  </div>
</div>

<style>
  .progress-container {
    margin-top: 1rem;
  }

  .progress-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .percentage {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .progress-bar {
    width: 100%;
    height: 24px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50 0%, #8bc34a 100%);
    transition: width 0.3s ease;
    border-radius: 12px;
  }

  .progress-text {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    opacity: 0.9;
    text-align: center;
  }
</style>
