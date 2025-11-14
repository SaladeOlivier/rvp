import type { Step, SideQuest, LocationTip } from '../types';

export const mainSteps: Step[] = [
  {
    id: 'step1',
    title: '1. Criminal Record from Home Country',
    description: 'Obtain police clearance certificate (casier judiciaire) with apostille',
    details: [
      'Request criminal record from your home country authorities',
      'Get apostille stamp on the document (required for Russia)',
      'No FBI check needed for most EU citizens',
      'Keep both original and copies - copy acceptable during visa application if apostille pending',
      'Criminal record validity: approximately 3-6 months from issue date',
    ],
    documents: [
      'Criminal record certificate',
      'Apostille stamp',
    ],
    tips: [
      'Apply early - apostille can take 2+ weeks',
      'Check for name inconsistencies (e.g., commas, spelling variations)',
      'If flagged for inconsistencies, get consulate attestation (30-50€)',
      'Russian police can do additional checks if needed',
      'Submit to migration before expiration (3-6 months validity)',
    ],
    locationTips: [
      {
        location: 'France',
        tips: [
          'Request "Casier Judiciaire N°3" online or by post https://casier-judiciaire.justice.gouv.fr',
          'Apostille from Notaires http://notaires.fr',
          'Processing: ~2 weeks total',
          'The french criminal record does not have comma between names, you will need a consulate attestation in some cities like Saint Petersburg',
          'You can apply for the private visa at the Ambassy with a copy of the criminal record if the apostille is still pending',
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step2',
    title: '2. Private Visa Application',
    description: 'Apply for Russian private visa at consulate in your home country',
    details: [
      'Find Russian consulate/embassy',
      'Get an appointment',
      'Fill visa application form online http://visa.kdmid.ru',
      'Prepare required documents (see list below)',
      'Visa validity: typically 3 months, single entry',
    ],
    documents: [
      'Valid passport',
      'Filled application form',
      'Passport photos (3.5x4.5 cm)',
      'Medical insurance (valid for stay duration, e.g., 1 year)',
      'Criminal record (copy OK if apostille pending)',
      'Check your local consulate for any additional requirements',
    ],
    tips: [
      'When looking for a slot, apply for a private visa',
      'Fill everything exactly as per passport - names, dates, etc.',
      'Keep in mind that your criminal record will be valid 3 months and that you will need some time in Russia to apply for your RVP'
    ],
    locationTips: [
      {
        location: 'France',
        tips: [
          'Use the English appointment site, they usually have more slots: https://paris.kdmid.ru/queue-en/',
          'No interview needed',
          'Processing time: ~8 days',
          'You should be able to apply trough a visa agency',
          'Put all your names in the firtname, not in patronyms (unless you do have patronyms)'
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step3',
    title: '3. Entry into Russia',
    description: 'Cross border and obtain migration card',
    details: [
      'Choose entry method: air, car, bus',
      'Get migration card at the border',
      'Border crossing can take several hours',
      'If crossing by the european ground border, DO NOT BRING EUROS or any european currency, they will get confiscated',
    ],
    documents: [
      'Valid passport',
      'Valid visa',
      'Migration card (received at border)',
    ],
    tips: [
      'Take photos/copies of migration card immediately as backup',
      'Never lose migration card - essential for everything, I suggest having a paperclip to secure it',
      'If lost, must report to police immediately for replacement',
      'SIM card will not work for 24h hours after entering. Some buses have wifi, airports should have hotspot'
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step4',
    title: '4. Registration at Place of Stay (Temporary)',
    description: 'Register your address within 7 days of arrival',
    details: [
      'Must be done within 7 working days of arrival',
      'Can be done via Gosuslugi (online government services) or at MFC (Multi functional centers), hotels usually register you withing 24h, if not ask them about it',
      'PDF from Gosuslugi is accepted',
      'Do NOT break migration laws, this can be a big red flag when applying for RVP, do your best to always have a valid registration',
      'You will need to find a landlord willing to register in the long run',
      'Make sure that no mistake is made with your Passport ID in the registration (eg. if you have ambiguous characters that could be mistkook with each other: I L 1'
    ],
    documents: [
      'Copy of all pages of the passport Passport',
      'Copy of Migration card',
      'Previous registrations if you are registering again',
      'Originals if you apply in person',
      'FILLED application form if you apply in person'
    ],
    tips: [
      'Do immediately upon arrival - mandatory requirement',
      'Gosuslugi PDF works fine - no need for physical stamp',
      'Keep your registration, or a copy of it with you as well as your passport in all time in case of police check',
      'Hotels will register you, invalidating previous registrations, make sure to not forget the paper slip they give you',
      'Check that your info are right, most importantly, passport number'
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step5',
    title: '5. Notarized Translations',
    description: 'Translate all documents to Russian with notarization',
    details: [
      'ALL passport pages must be translated (including all stamps and visas)',
      'Criminal record translation required',
      'Use certified translation agency',
      'Notarization included in service',
      'Ask to translate your names AS IN YOUR VISA, if they differ, this is ground for refusal of your application'
    ],
    documents: [
      'Passport (all pages)',
      'Criminal record with apostile',
      'Any other foreign documents you would like to add to your file',
    ],
    tips: [
      'Use reputable agency - check Yandex map for reviews and locations',
      'Full passport translation, more expensive if you have many stamps, but required',
      'Translation valid indefinitely unless passport changes',
    ],
    locationTips: [
      {
        location: 'Saint Petersburg and Leningrad oblast',
        tips: [
          'Recommended: v6translate.ru located on 6 Vosstaniya street',
          'Full passport translation mandatory (all stamps/visas)',
          'For french with multiple names, check the next section'
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step5_1',
    title: '5.1 (SPB Only - for French with multiple first names) Get a certificate from consulate',
    description: 'Document needed yo attest that your criminal record without comma is linked to you',
    details: [
      'Go to the French consulate in Saint Petersburg during opening time',
      'Ask them to write a letter indicating that your criminal record without comma between your first names is actually yours'
    ],
    documents: [
      'Passport with translation',
      'Criminal record',
    ],
    tips: [],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step6',
    title: '6. Medical Examinations (3 Certificates)',
    description: 'Complete required medical tests - HIV, drugs, general health',
    details: [
      'Three separate certificates are required: HIV, drugs, general health',
      'Must be done in region of registration',
      'Cost: ~8,000 rubles (by card)',
      'Pass all the steps, blood check, urine check, narcologue interview, infectiologue interview, fluorology',
      'Results typically ready in a few days',
    ],
    documents: [
      'Passport with translation',
    ],
    tips: [
      "You can pass medical examinations in any certified location, but it will be longer to do than just sit and wait at the migration center",
    ],
    locationTips: [
      {
        location: 'Moscow',
        tips: [
          'Please share your experience here',
        ],
      },
      {
        location: 'Saint Petersburg and Leningrad Oblast',
        tips: [
          'Go to Krasnogo Tekstilshchika 10-12 migration center',
          'Fron 8-9 AM, go make the queue at this location https://yandex.com/maps/-/CLG5EIZ2 there will be a door on the side of the building',
          'You will get a talon, wait a bit and you will be called to go upstairs',
          'Go outside, find the entrance number 2 and go to the 4th floor https://yandex.com/maps/-/CLG5IF9R',
          'Right on the left you will have a desk to get a new Talon, tell them you are here for medical examination',
          'The fluorology test is done outside',
          'Wait 3-4 days for results',
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step7',
    title: '7. Fingerprints / Dactyloscopy',
    description: 'Submit biometric data',
    details: [
      'Done at the migration center',
      'Cost: ~2000 RUB for fingerprints + 2000 RUB for photos',
    ],
    documents: [
      'Passport with translation',
      'Medical certificates (if done in another location)',
      'Registation just in case',
    ],
    tips: [],
    locationTips: [
      {
        location: 'Moscow',
        tips: [
          'Please share your experience here',
        ],
      },
      {
        location: 'Saint Petersburg and Leningrad oblast',
        tips: [
          'Come 3-4 days after medical examinations is done',
          'Go to Krasnogo Tekstilshchika 10-12 migration center',
          'From 8-9 AM, go make the queue at this location https://yandex.com/maps/-/CLG5EIZ2 there will be a door on the side of the building',
          'You will get a talon, wait a bit and you will be called to go upstairs',
          'Go outside, find the entrance number 2 and go to the 4th floor https://yandex.com/maps/-/CLG5IF9R',
          'Right on the left you will have a desk to get a new Talon, tell them you are here for fingerprints (Dactylocopycheskaya)',
          'You will be called at one of the windos on the right of the desk, you might be called by your last name, pay attention',
          'You fill some documents and pay the fees',
          'Then you will go get a new Talon to do the actual fingerprints',
          'Wait to be called, you will do fingerprints and photos there',
          'You should get all your certificates back'
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step8',
    title: '8. Get the green card',
    description: 'Submit biometric data',
    details: [
      'Done at the migration center',
    ],
    documents: [
      'Passport with translation',
      'Medical certificates',
    ],
    tips: [],
    locationTips: [
      {
        location: 'Moscow',
        tips: [
          'Please share your experience here',
        ],
      },
      {
        location: 'Saint Petersburg and Leningrad oblast',
        tips: [
          'Usually ready in 10 days after fingerprints',
          'Go to Krasnogo Tekstilshchika 15 migration center',
          'From 9 AM, enter at this door https://yandex.com/maps/-/CLG54I8h and show your passport and medical certificates to security',
          'Go to the 2nd floor, give your medical certificates at the desk, you will then receive a talon',
          'Listen carefully for your name, you might be called if the green card is not ready yet',
          'Just wait and you will get the green card',
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step9',
    title: '9. Pay the State Fee',
    description: 'Pay the government fee for RVP application',
    details: [
      'State fee for RVP application: 1920 RUB',
      'Can be aid at any bank',
      'Ask for the receipt, it is needed for application',
    ],
    documents: [],
    tips: [],
    locationTips: [
      {
        location: 'Saint Petersburg and Leningrad oblast',
        tips: [
          'KBK (payment reference): 188 1 08 06000 01 0015 110',
        ],
      }
    ],
    completed: false,
  },
  {
    id: 'step10',
    title: '10. Prepare your form and documents for RVP',
    description: 'Fill the document and print copies',
    details: [
      'Fill out the RVP application form',
      'Get copies of your documents and pictures',
      'This can be done in any copy center, check yandex map'
    ],
    documents: [
      'Filled application form (2 copies)',
      'Passport and notarized translation',
      'Migration card + copy',
      'Criminal record + apostille + notarized translation',
      'Green card + copy',
      'Registration + copy (if done online, print the PDF)',
      '4 mate photos in 35x45mm size',
      'Receipt payment of the state fee',
      'For French with multiple first name applying in SPB, certificate from consulate',
      'Any other supporting documents you want to add to your file',
    ],
    tips: [
      'If you have a specific situation, get advice from the community or a migration Jurist',
    ],
    locationTips: [
      {
        location: 'Saint Petersburg',
        tips: [
          'There is a paid service in the migration center that can assist you with filling the form',
          'PVS, they are located on the 3rd floor of the Krasnogo Tekstilshchika 10-12D building https://yandex.com/maps/-/CLG5mP5l',
          'Costs about ~10 000 rub',
          'Mention RVP 702 to them',
        ],
      }
    ],
    completed: false,
  },
  {
    id: 'step11',
    title: '11. RVP Submission',
    description: 'Submit complete application package at migration center',
    details: [
      'Go to migration center with all documents',
      'Plan to come early',
      'Get in the queue',
      'Officer reviews all documents and your situation (registration etc)',
      'May flag name inconsistencies or past violations',
      'Explain any issues',
      'Receive acceptance certificate (Spravka) with case number',
    ],
    documents: [
      'Filled application form (2 copies)',
      'Passport and notarized translation',
      'Migration card + copy',
      'Criminal record + apostille + notarized translation',
      'Green card + copy',
      'Registration + copy (if done online, print the PDF)',
      '4 mate photos in 35x45mm size',
      'Receipt payment of the state fee',
      'For French with multiple first name applying in SPB, certificate from consulate',
      'Any other supporting documents you want to add to your file',
    ],
    tips: [],
    locationTips: [
      {
        location: 'Saint Petersburg',
        tips: [
          'Migration Center: Krasnogo Tekstilshchika 10-12D https://yandex.com/maps/-/CLG5mP5l',
          'Acceptance of application on: Monday, Tuesday, Thursday, Friday mornings',
          'The doors open at 8:30, then you go on the left, at the end of the corridor on the right go the the second floor',
          'You will see a queue in front of a glass window (might be empty if the volume of applicant lowered), doors open at 8:45',
          'You will go to a desk on the left, mention RVP 702 and you will get a Talon',
          'Used to need to come at 7am or even earlier, but as of november 2025 there was no more queue at morning'
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step12',
    title: '12. Visa Extension',
    description: 'Extend visa during RVP wait',
    details: [
      'Use acceptance certificate (Spravka) to extend your visa (idealy private 702)',
      'Go to any "otdel po voprosam migratsii umvd" (Отдел по вопросам миграции УМВД)',
      'The procedure is usually called "восстановить визу" (restore/extend)',
      'You will receive an apointment for the day of expiration of your visa',
      'Come back at this time, you\'ll be instructed to pay state fee at a bank and then will receive your new visa',
    ],
    documents: [
      'Acceptance certificate (spravka)',
      'Current visa',
      'Migration card',
      'Registration',
      'State fee receipt',
    ],
    tips: [
      'Don\'t wait until last day - apply early',
      'You can always exit the country with your private single entry visa, but you will need to make a new one to come back (you can come back with a touristic visa)'
    ],
    locationTips: [
      {
        location: 'Saint Petersburg',
        tips: [
          'Aplly in central rayon, other rayon do not know this procedure well...',
          'https://yandex.com/maps/-/CLG5Z0MA',
          'Go straight and it\'s the window on the right after the arch',
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step13',
    title: '13. Waiting Period (4 Months)',
    description: 'Wait for RVP processing - travel allowed with valid visa',
    details: [
      'Processing time: usually takes 4 months from submission',
      'You CAN leave Russia during this time',
      'Must re-enter with valid visa (type doesn\'t matter)',
      'Extend visa if expiring during wait (see above)',
      'Online tracking service usualy don\t work...',
    ],
    documents: [
      'Passport',
      'Valid visa',
      'Acceptance certificate',
      'Registration'
    ],
    tips: [],
    locationTips: [
      {
        location: 'Saint Petersburg',
        tips: [
          'Come back to the same place you applied, Migration Center: Krasnogo Tekstilshchika 10-12D https://yandex.com/maps/-/CLG5mP5l',
          'Pickup on Monday, Tuesday, Thursday, Friday in the afternoon',
          'Doors open at 14:00, come a bit early as there can be a lot of queue. If you fail to get a spot, know that there are unofficial queues being formed early in the morning, you come outside the building at 6am, give your name to the unofficial queue manager, and then comeback at 13:30',
          'You will then go take fingerprints again and finally receive your visa',
        ],
      },
    ],
    completed: false,
  },
  {
    id: 'step14_1',
    title: '14.1 Temporary Registration',
    description: 'Very important',
    details: [
      'Same as step 4, you will need to register your RVP, you have 7 working day to do it, DO NOT WAIT until the last minute',
      'Valid maximum 3 months',
      'You need to register again if you leave the country, get registered in a hotel or another city',
      'Can be done in MFC'
    ],
    documents: [
      'Passport',
      'RVP',
    ],
    tips: [],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step14_2',
    title: '14.2 Permanent Registration',
    description: 'If you find a landlord willing to do so or that you have your own place',
    details: [
      'Go to MFC to register permanently with your owner',
      'Bring all required documents',
      'You will then receive a stamp in your passport, allowing you to travel freely in Russia and Abroad without having to register again',
    ],
    documents: [
      'Your passport with RVP (translated/notarized)',
      'Landlord\'s passport',
      'Property ownership proof',
      'Rental agreement (if it has your passport details)',
      'House register extract',
    ],
    tips: [],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step15',
    title: '15. Police check',
    description: 'The police might come check if you leave where you declared',
    details: [
      'They can combe before or after receiving the RVP, and multiple times (in small cities it can be every months)',
      'They will simply check your passport, RVP, registration, and ask a few informations about your owners and who you live with'
    ],
    documents: [],
    tips: [],
    completed: false,
  },
  {
    id: 'step16',
    title: '16. Annual Notification',
    description: 'Notify authorities yearly after RVP',
    details: [
      'RVP holders must submit annual address notification',
      'Deadline: within 2 months of RVP anniversary date',
      'Confirm you still reside in region that issued RVP',
      'Failure to notify results in RVP cancellation',
    ],
    documents: [
      'Passport with RVP',
      'Registration document',
      'Proof of funds, tax documents (2ndfl, 3ndfl) of the amount of the 12x the subsistence minimum'
    ],
    tips: [
      'Set yearly reminder - critical requirement',
      'Within 2 months of anniversary',
      'RVP region-specific - must live in issuing region',
      'Moving regions requires special permission',
    ],
    completed: false,
  },
];

export const sideQuests: SideQuest[] = [
  {
    id: 'snils',
    title: 'SNILS (Social Insurance Number) to then get a phone number',
    description: 'Obtain SNILS for Gosuslugi access and official services',
    steps: [
      'Bring your passport with translation, migration card, registration',
      'Apply at MFC (Multifunctional Center)',
      'Morning visit recommended - no appointment needed',
    ],
    completed: false,
    optional: false,
  },
  {
    id: 'gosuslugi',
    title: 'Gosuslugi Account Setup',
    description: 'Create and verify Gosuslugi account for online services',
    steps: [
      'Bring your passport with translation and SNILS',
      'Register on gosuslugi.ru or on the app if not already done',
      'Requires SNILS number',
      'Then verify identity in any bank "Biometriya"',
      'They will take pictures of your face and a voice fingerprint. You might be able to pass the voice verification by saying the numbers showing up on the screen in your native language',
    ],
    completed: false,
    optional: false,
  },
  {
    id: 'sim',
    title: 'Get a sim card',
    description: 'Go to any phone carrier office and get a simcard',
    steps: [
      'Bring your passport with translation',
      'Any can do, go for a big provider: MTS, Megafon, Beeline, Tele2',
    ],
    completed: false,
    optional: false,
  },
  {
    id: 'bank',
    title: 'Get a bank account',
    description: "Pick a bank",
    steps: [
      'Bring your passport with tranlation',
      "You have the choice, Sberbank for the biggest bank",
      "TBank for a more modern service, but not physical agencies, they do let you open an account with a foreign number at first",
      "Raifaisen, technically still receives SWIFT transfers, if your western bank do not block you, they have ot the best rate and their app is very simple",
      "Alpha Bank, VTB, ..., I don't have experience with those",
    ],
    completed: false,
    optional: false,
  }
];
