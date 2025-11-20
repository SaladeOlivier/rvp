<script lang="ts">
  import { writable } from 'svelte/store';
  import StepsGuide from './components/StepsGuide.svelte';
  import SideQuests from './components/SideQuests.svelte';
  import TodoList from './components/TodoList.svelte';
  import ApplicationForm from './components/ApplicationForm.svelte';
  import ProgressBar from './components/ProgressBar.svelte';
  import ImportantRules from './components/ImportantRules.svelte';

  type View = 'guide' | 'sidequests' | 'todos' | 'form' | 'rules';
  const currentView = writable<View>('guide');
</script>

<div class="app">
  <header>
    <div class="container">
      <h1>🇷🇺 RVP702 Guide</h1>
      <p class="subtitle">Your Complete Guide to Russian Temporary Residency</p>
      <ProgressBar />
    </div>
  </header>

  <nav>
    <div class="container">
      <button
        class:active={$currentView === 'guide'}
        on:click={() => currentView.set('guide')}
      >
        📋 Main Steps
      </button>
      <button
        class:active={$currentView === 'rules'}
        on:click={() => currentView.set('rules')}
      >
        ⚠️ Important Rules
      </button>
      <button
        class:active={$currentView === 'sidequests'}
        on:click={() => currentView.set('sidequests')}
      >
        ⭐ Side Quests
      </button>
      <button
        class:active={$currentView === 'todos'}
        on:click={() => currentView.set('todos')}
      >
        ✓ My Todo List
      </button>
      <button
        class:active={$currentView === 'form'}
        on:click={() => currentView.set('form')}
      >
        📄 Application Form
      </button>
    </div>
  </nav>

  <main class="container">
    {#if $currentView === 'guide'}
      <StepsGuide />
    {:else if $currentView === 'rules'}
      <ImportantRules />
    {:else if $currentView === 'sidequests'}
      <SideQuests />
    {:else if $currentView === 'todos'}
      <TodoList />
    {:else if $currentView === 'form'}
      <ApplicationForm />
    {/if}
  </main>

  <footer>
    <div class="container">
      <p>⚠️ This guide is based on real experiences from the community. This does not replace legal advices. Procedures may vary by region and time. Seek help online or with a local migration Jurist.</p>
      <p><a href="https://github.com/saladeolivier/rvp/" target="_blank">Source code</a></p>
    </div>
  </footer>
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: #f5f5f5;
    color: #333;
    text-align: left;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    text-align: left;
  }

  header {
    background: linear-gradient(135deg, #0039a6 0%, #d52b1e 100%);
    color: white;
    padding: 2rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .subtitle {
    font-size: 1.1rem;
    opacity: 0.95;
    margin-bottom: 1rem;
    text-align: left;
  }

  nav {
    background: white;
    border-bottom: 2px solid #e0e0e0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  nav .container {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav button {
    padding: 0.75rem 1.5rem;
    border: none;
    background: transparent;
    color: #666;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    white-space: nowrap;
    font-weight: 500;
  }

  nav button:hover {
    background: #f5f5f5;
    color: #333;
  }

  nav button.active {
    background: #0039a6;
    color: white;
  }

  main {
    flex: 1;
    padding: 2rem 20px;
  }

  footer {
    background: #333;
    color: white;
    padding: 2rem 0;
    margin-top: 3rem;
  }

  footer p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    text-align: left;
  }

  footer a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    transition: all 0.2s;
    display: inline-block;
  }

  footer a:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  /* Tablet breakpoint */
  @media (max-width: 768px) {
    .container {
      padding: 0 16px;
    }

    header {
      padding: 1.5rem 0;
    }

    header h1 {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    nav .container {
      padding: 0.75rem 16px;
      gap: 0.4rem;
    }

    nav button {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }

    main {
      padding: 1.5rem 16px;
    }

    footer {
      padding: 1.5rem 0;
      margin-top: 2rem;
    }
  }

  /* Mobile breakpoint */
  @media (max-width: 480px) {

    header h1 {
      font-size: 1.4rem;
    }

    .subtitle {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }

    nav .container {
      padding: 0.5rem 8px;
      gap: 0.25rem;
    }

    nav button {
      padding: 0.4rem 0.6rem;
      font-size: 0.75rem;
      flex: 1 1 auto;
      min-width: fit-content;
    }

    main {
      padding: 0.75rem 8px;
    }

    footer {
      padding: 1rem 0;
      margin-top: 1rem;
    }

    footer p {
      font-size: 0.75rem;
    }
  }
</style>
