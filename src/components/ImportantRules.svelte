<script lang="ts">
  interface Rule {
    title: string;
    icon: string;
    severity: 'critical' | 'important' | 'info';
    description: string;
    details: string[];
    consequences?: string[];
  }

  const rules: Rule[] = [
    {
      title: 'Registration at Place of Stay',
      icon: '🏠',
      severity: 'critical',
      description: 'You MUST register your address within 7 days of arrival in Russia',
      details: [
        'Registration (регистрация) is mandatory for all foreign citizens',
        'Must be completed within 7 working days of arrival',
        'Can be done via Gosuslugi online or at MFC/hotel',
        'PDF from Gosuslugi is accepted by migration center',
        'Required for medical exams and RVP submission',
        'MUST be done again after receiving RVP (new registration linked to RVP)',
      ],
      consequences: [
        'Cannot apply for RVP without valid registration',
        'Risk of deportation and fines (2,000-5,000 RUB) for non-compliance',
      ],
    },
    {
      title: 'Migration Card',
      icon: '📇',
      severity: 'critical',
      description: 'Never lose your migration card - it\'s essential for RVP',
      details: [
        'Migration card is given at the border when entering Russia',
        'Required for registration, medical exams, and RVP application',
        'Take photos/copies immediately as backup',
        'Essential for every step of the process',
      ],
      consequences: [
        'Difficult and time-consuming to replace if lost',
        'Will delay your RVP application process',
      ],
    },
    {
      title: 'Visa Validity and Overstay',
      icon: '⏰',
      severity: 'critical',
      description: 'Track visa dates carefully - but extensions possible during RVP wait',
      details: [
        'Your visa has a specific validity period - track it carefully',
        'RVP processing takes up to 4 months (expect it to be close to the max)',
        'You CAN extend visa using acceptance certificate (spravka) if expiring during wait',
        'Called "восстановить визу" (restore visa)',
        'Can leave Russia during RVP wait - re-enter with any valid visa',
      ],
      consequences: [
        'Fines: 2,000-5,000 RUB for overstay',
        'Deportation and 3-10 year entry ban possible',
        'Risk of pre-trial detention',
      ],
    },
    {
      title: 'Travel During RVP Wait',
      icon: '✈️',
      severity: 'info',
      description: 'You CAN travel during the 4-month RVP waiting period',
      details: [
        'During 4-month RVP wait: you CAN leave Russia',
        'Must re-enter with valid visa (any type works - tourist, private, etc.)',
        'Visa type for re-entry doesn\'t matter for receiving the rvp',
        'Make sure to have a valid registration as well',
      ],
      consequences: [
        'Must have valid visa for re-entry',
      ],
    },
    {
      title: 'Name Inconsistencies & Past Visas',
      icon: '📝',
      severity: 'critical',
      description: 'Different Cyrillic spellings from past visas can cause issues',
      details: [
        'Embassies may transliterate your name differently on each visa',
        'SPb migration officers flag varying Cyrillic spellings',
        'Must list ALL name variations in RVP application',
        'All your documents must match your last visa transliteration (green card, translation of passport, criminal record, ...)',
        'Criminal record must match passport exactly (including commas, formatting)',
        'French criminal records lacks commas between multiple names - Consulate attestation available if name issues arise (30-50€), especially in SPB',
      ],
      consequences: [
        'Application refused for inconsistent names',
      ],
    },
    {
      title: 'Decree 702 (Ukaz Prezidenta)',
      icon: '📜',
      severity: 'important',
      description: 'Quota-free RVP for eligible applicants',
      details: [
        'Presidential Decree 702: quota-free RVP for certain citizens',
        'Citizen of unfriendly countries are eligible',
        'Some officers unaware of decree - remind them politely',
      ],
      consequences: [],
    },
  ];

  let selectedSeverity: 'all' | 'critical' | 'important' | 'info' = 'all';

  $: filteredRules =
    selectedSeverity === 'all'
      ? rules
      : rules.filter((rule) => rule.severity === selectedSeverity);
</script>

<div class="important-rules">
  <div class="rules-header">
    <h2>⚠️ Important Rules & Regulations</h2>
    <p>
      Understanding these rules is crucial for a successful RVP application and avoiding legal
      issues in Russia
    </p>
  </div>

  <div class="filter-buttons">
    <button class:active={selectedSeverity === 'all'} on:click={() => (selectedSeverity = 'all')}>
      All Rules
    </button>
    <button
      class:active={selectedSeverity === 'critical'}
      on:click={() => (selectedSeverity = 'critical')}
    >
      🚨 Critical
    </button>
    <button
      class:active={selectedSeverity === 'important'}
      on:click={() => (selectedSeverity = 'important')}
    >
      ⚡ Important
    </button>
    <button
      class:active={selectedSeverity === 'info'}
      on:click={() => (selectedSeverity = 'info')}
    >
      ℹ️ Info
    </button>
  </div>

  <div class="rules-grid">
    {#each filteredRules as rule}
      <div class="rule-card {rule.severity}">
        <div class="rule-header">
          <span class="rule-icon">{rule.icon}</span>
          <h3>{rule.title}</h3>
          <span class="severity-badge {rule.severity}">
            {rule.severity.toUpperCase()}
          </span>
        </div>

        <p class="rule-description">{rule.description}</p>

        <div class="rule-details">
          <h4>📋 Key Points:</h4>
          <ul>
            {#each rule.details as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        </div>

        {#if rule.consequences && rule.consequences.length > 0}
          <div class="rule-consequences">
            <h4>⚠️ Consequences of Non-Compliance:</h4>
            <ul>
              {#each rule.consequences as consequence}
                <li>{consequence}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .important-rules {
    max-width: 1000px;
    margin: 0 auto;
  }

  .rules-header {
    background: white;
    border-left: 4px solid #d32f2f;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border: 2px solid #ffebee;
    border-left: 4px solid #d32f2f;
  }

  .rules-header h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
  }

  .rules-header p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }

  .filter-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .filter-buttons button {
    padding: 0.75rem 1.5rem;
    border: 2px solid #e0e0e0;
    background: white;
    color: #666;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .filter-buttons button:hover {
    border-color: #0039a6;
    color: #0039a6;
    transform: translateY(-2px);
  }

  .filter-buttons button.active {
    background: #0039a6;
    border-color: #0039a6;
    color: white;
  }

  .rules-grid {
    display: grid;
    gap: 1.5rem;
  }

  .rule-card {
    background: white;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid #e0e0e0;
    border-left: 4px solid;
  }

  .rule-card.critical {
    border-left-color: #d32f2f;
    border-color: #ffebee;
  }

  .rule-card.important {
    border-left-color: #ff9800;
    border-color: #fff3e0;
  }

  .rule-card.info {
    border-left-color: #2196f3;
    border-color: #e3f2fd;
  }

  .rule-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .rule-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .rule-header h3 {
    flex: 1;
    color: #333;
    font-size: 1.1rem;
    margin: 0;
    font-weight: 600;
  }

  .severity-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .severity-badge.critical {
    background: #ffebee;
    color: #c62828;
  }

  .severity-badge.important {
    background: #fff3e0;
    color: #e65100;
  }

  .severity-badge.info {
    background: #e3f2fd;
    color: #1565c0;
  }

  .rule-description {
    color: #555;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .rule-details,
  .rule-consequences {
    margin-top: 1rem;
  }

  .rule-details h4,
  .rule-consequences h4 {
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .rule-consequences h4 {
    color: #333;
  }

  .rule-details ul,
  .rule-consequences ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  .rule-details li,
  .rule-consequences li {
    margin: 0.35rem 0;
    color: #333;
    line-height: 1.5;
    font-size: 0.85rem;
  }

  .rule-consequences {
    background: #fffafa;
    padding: 0.75rem;
    border-radius: 6px;
    border-left: 3px solid #d32f2f;
  }

  .rule-consequences li {
    color: #c62828;
    font-weight: 500;
  }

  /* Tablet breakpoint */
  @media (max-width: 768px) {
    .filter-buttons {
      gap: 0.5rem;
    }

    .filter-buttons button {
      padding: 0.6rem 1rem;
      font-size: 0.85rem;
    }

    .rules-header {
      padding: 1.25rem;
    }

    .rules-header h2 {
      font-size: 1.3rem;
    }

    .rule-header {
      flex-wrap: wrap;
    }

    .rule-icon {
      font-size: 1.5rem;
    }

    .rule-header h3 {
      font-size: 1rem;
    }

    .rule-card {
      padding: 1rem;
    }

    .rules-grid {
      gap: 1rem;
    }
  }

  /* Mobile breakpoint */
  @media (max-width: 480px) {
    .rules-header {
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .rules-header h2 {
      font-size: 1.2rem;
    }

    .rules-header p {
      font-size: 0.85rem;
    }

    .filter-buttons {
      gap: 0.4rem;
      margin-bottom: 1.5rem;
    }

    .filter-buttons button {
      padding: 0.5rem 0.75rem;
      font-size: 0.8rem;
      flex: 1 1 auto;
    }

    .rules-grid {
      gap: 0.75rem;
    }

    .rule-card {
      padding: 0.75rem;
    }

    .rule-header {
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .rule-icon {
      font-size: 1.3rem;
    }

    .rule-header h3 {
      font-size: 0.95rem;
    }

    .severity-badge {
      padding: 0.2rem 0.5rem;
      font-size: 0.65rem;
    }

    .rule-description {
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }

    .rule-details,
    .rule-consequences {
      margin-top: 0.75rem;
    }

    .rule-details h4,
    .rule-consequences h4 {
      font-size: 0.85rem;
    }

    .rule-details li,
    .rule-consequences li {
      font-size: 0.8rem;
    }

    .rule-consequences {
      padding: 0.5rem;
    }
  }
</style>
