import type { Step, SideQuest, LocationTip } from '../types';

export const mainSteps: Step[] = [
  {
    id: 'step1',
    title: '1. Clean criminal record from Home Country and Apostille',
    description: 'Obtain police clearance certificate with apostille',
    details: [
      {
        text: 'Request criminal record from your home country authorities',
        tip: 'Apply early - processing can be long depending on your country'
      },
      {
        text: 'Get apostille stamp on the document',
        tip: 'This legalizes your document for use in Russia'
      },
      {
        text: 'Criminal record validity: usually 3 months from issue date',
        tip: 'Plan your timeline carefully - you need time to get the visa and apply for RVP'
      },
      {
        text: 'Check for name inconsistencies (e.g., commas, spelling variations)',
        tip: 'Russian police can do additional checks if needed. If you can\'t fix inconsistencies, contact your consulate for an attestation'
      },
    ],
    documentsToReceive: [
      { id: 'criminal_record', name: 'Criminal record certificate' },
      { id: 'apostille_criminal', name: 'Apostille stamp or e-apostille' },
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
      {
        text: 'Get an appointment',
        tip: 'When looking for a slot, apply for a private visa. Appointments can be scarce.'
      },
      {
        text: 'Fill visa application form online http://visa.kdmid.ru',
        tip: 'Fill everything exactly as per passport - names, dates, etc. Pay attention to name order.'
      },
      'Prepare required documents (see list below)',
      {
        text: 'Visa validity: typically 3 months, single entry',
        tip: 'Plan carefully - your criminal record is valid 3 months and you need time in Russia to apply for RVP'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Valid passport' },
      { id: 'visa_application_form', name: 'Filled application form' },
      { id: 'passport_photos', name: 'Passport photos (3.5x4.5 cm)' },
      { id: 'medical_insurance', name: 'Medical insurance (valid for stay duration, e.g., 1 year)' },
      { id: 'criminal_record', name: 'Criminal record (copy OK if apostille pending)' },
    ],
    documentsToReceive: [
      { id: 'russian_visa', name: 'Russian private visa' },
    ],
    locationTips: [
      {
        location: 'France',
        tips: [
          'Use the English appointment site, they usually have more slots: https://paris.kdmid.ru/queue-en/',
          'No interview needed',
          'Processing time: ~8 days',
          'You should be able to apply trough a visa agency',
          'Put all your names in the firstname field, not in patronyms (unless you do have patronyms)'
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
      {
        text: 'Get migration card at the border',
        tip: 'Take photos/copies immediately as backup. Never lose it - essential for everything. Use a paperclip to secure it to your passport.'
      },
      {
        text: 'Border crossing can take several hours',
        tip: 'SIM card will not work for 24h hours after entering. Some buses have wifi, airports should have hotspot.'
      },
      {
        text: 'If crossing by the european ground border, DO NOT BRING EUROS or any european currency',
        tip: 'They will get confiscated at the border'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Valid passport' },
      { id: 'russian_visa', name: 'Valid visa' },
    ],
    documentsToReceive: [
      { id: 'migration_card', name: 'Migration card' },
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
      {
        text: 'Can be done via Gosuslugi (online government services) or at MFC (Multi functional centers)',
        tip: 'Hotels usually register you within 24h, if not ask them about it. Gosuslugi PDF works fine - no need for physical stamp'
      },
      {
        text: 'Do NOT break migration laws',
        tip: 'This is a big red flag when applying for RVP, do your best to always have a valid registration'
      },
      {
        text: 'You will need to find a landlord willing to register in the long run',
        tip: 'Hotels will register you, invalidating previous registrations, make sure to not forget the paper slip they give you'
      },
      {
        text: 'Make sure that no mistake is made with your Passport ID in the registration',
        tip: 'Pay attention to ambiguous characters that could be mistaken with each other: I L 1. Check that your info is right, most importantly passport number'
      },
      {
        text: 'Keep your registration with you at all times',
        tip: 'Keep a copy of your registration with your passport in case of police check'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Original of the passport (in person)' },
      { id: 'passport_copy_registration', name: 'Copy of all pages of passport' },
      { id: 'migration_card_copy_registration', name: 'Copy of Migration card' },
      { id: 'previous_registration', name: 'Previous registrations (if re-registering)' },
      { id: 'registration_form', name: 'Filled application form (if applying in person), make sure to fill it beforehand' },
    ],
    documentsToReceive: [
      { id: 'temp_registration', name: 'Temporary registration document' },
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step5',
    title: '5. Notarized Translations',
    description: 'Translate all documents to Russian with notarization',
    details: [
      {
        text: 'ALL passport pages must be translated (including all stamps and visas)',
        tip: 'Full passport translation, more expensive if you have many stamps, but required'
      },
      'Criminal record translation required',
      {
        text: 'Use certified translation agency',
        tip: 'Use reputable agency - check Yandex map for reviews and locations'
      },
      'Notarization included in service',
      {
        text: 'Ask to translate your names AS IN YOUR VISA',
        tip: 'If they differ, this is ground for refusal of your application. Translation valid indefinitely unless passport changes'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport (all pages)' },
      { id: 'criminal_record', name: 'Criminal record with apostille' },
      { id: 'other_docs', name: 'Any other foreign documents you would like to add to your file' },
    ],
    documentsToReceive: [
      { id: 'passport_translation', name: 'Notarized passport translation' },
      { id: 'criminal_record_translation', name: 'Notarized criminal record translation' },
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
    documentsToGive: [
      { id: 'passport_original', name: 'Passport' },
      { id: 'passport_translation', name: 'Passport translation' },
      { id: 'criminal_record', name: 'Criminal record' },
    ],
    documentsToReceive: [
      { id: 'consulate_attestation', name: 'Consulate attestation letter' },
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step6',
    title: '6. Medical Examinations (3 Certificates)',
    description: 'Complete required medical tests - HIV, drugs, general health',
    details: [
      'Three separate certificates are required: HIV, drugs, general health',
      {
        text: 'Must be done in region of registration / application',
        tip: 'You can pass medical examinations in any certified location, but it will be longer to do than just sit and wait at the migration center'
      },
      'Cost: ~8,000 rubles (by card)',
      'Pass all the steps, blood check, urine check, narcologue interview, infectiologue interview, fluorology',
      'Results typically ready in a few days',
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport' },
      { id: 'passport_translation', name: 'Passport translation' },
    ],
    documentsToReceive: [
      { id: 'medical_cert_hiv', name: 'HIV certificate' },
      { id: 'medical_cert_drugs', name: 'Drug test certificate' },
      { id: 'medical_cert_general', name: 'General health certificate' },
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
    documentsToGive: [
      { id: 'passport_original', name: 'Passport' },
      { id: 'passport_translation', name: 'Passport translation' },
      { id: 'medical_cert_hiv', name: 'HIV certificate (if done in another location)' },
      { id: 'medical_cert_drugs', name: 'Drug test certificate (if done in another location)' },
      { id: 'medical_cert_general', name: 'General health certificate (if done in another location)' },
      { id: 'temp_registration', name: 'Registration (just in case)' },
    ],
    documentsToReceive: [
      { id: 'medical_cert_hiv', name: 'HIV certificate (given back to get the green card)' },
      { id: 'medical_cert_drugs', name: 'Drug test certificate (given back to get the green card)' },
      { id: 'medical_cert_general', name: 'General health certificate (given back to get the green card)' },
    ],
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
    description: 'Receive plastic card attesting medical and biometric clearance',
    details: [
      {
        text: 'Done at the migration center',
        tip: 'Usually ready in 10 days after fingerprints'
      },
      'Carefully check that visa, translation and green card names match exactly',
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport' },
      { id: 'passport_translation', name: 'Passport translation' },
      { id: 'medical_cert_hiv', name: 'HIV certificate' },
      { id: 'medical_cert_drugs', name: 'Drug test certificate' },
      { id: 'medical_cert_general', name: 'General health certificate' },
    ],
    documentsToReceive: [
      { id: 'green_card', name: 'Green card (consolidated medical certificate)' },
    ],
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
      'Can be paid at any bank',
      {
        text: 'Ask for the receipt',
        tip: 'The receipt is needed for your RVP application - do not lose it'
      },
    ],
    documentsToReceive: [
      { id: 'state_fee_receipt', name: 'State fee payment receipt' },
    ],
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
      'Fill out the RVP application form (2 copies)',
      {
        text: 'Get copies of your documents and pictures',
        tip: 'This can be done in any copy center, check Yandex map'
      },
      {
        text: 'Verify all documents are prepared',
        tip: 'If you have a specific situation, get advice from the community or a migration jurist'
      },
    ],
    documentsToGive: [
      { id: 'rvp_application_form', name: 'Filled RVP application form (2 copies)' },
      { id: 'passport_original', name: 'Passport (original)' },
      { id: 'passport_translation', name: 'Notarized passport translation' },
      { id: 'migration_card', name: 'Migration card' },
      { id: 'migration_card_copy', name: 'Migration card copy' },
      { id: 'criminal_record', name: 'Criminal record with apostille (original)' },
      { id: 'criminal_record_translation', name: 'Notarized criminal record translation' },
      { id: 'green_card', name: 'Green card (original)' },
      { id: 'green_card_copy', name: 'Green card copy' },
      { id: 'temp_registration', name: 'Registration (if done online, print the PDF)' },
      { id: 'temp_registration_copy', name: 'Registration copy' },
      { id: 'rvp_photos', name: '4 matte photos in 35x45mm size' },
      { id: 'state_fee_receipt', name: 'State fee payment receipt' },
      { id: 'consulate_attestation', name: 'Certificate from consulate (if French with multiple first names in SPB)' },
      { id: 'supporting_docs', name: 'Any other supporting documents you want to add to your file' },
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
      {
        text: 'Go to migration center with all documents',
        tip: 'Plan to come early'
      },
      'Get in the queue',
      {
        text: 'Officer reviews all documents and your situation (registration etc)',
        tip: 'May flag name inconsistencies or past violations - be prepared to explain any issues'
      },
      'Receive acceptance certificate (Spravka) with case number',
    ],
    documentsToGive: [
      { id: 'rvp_application_form', name: 'Filled RVP application form (2 copies)' },
      { id: 'passport_original', name: 'Passport (original)' },
      { id: 'passport_translation', name: 'Notarized passport translation' },
      { id: 'migration_card', name: 'Migration card' },
      { id: 'migration_card_copy', name: 'Migration card copy' },
      { id: 'criminal_record', name: 'Criminal record with apostille (original)' },
      { id: 'criminal_record_translation', name: 'Notarized criminal record translation' },
      { id: 'green_card', name: 'Green card (original)' },
      { id: 'green_card_copy', name: 'Green card copy' },
      { id: 'temp_registration', name: 'Registration (if done online, print the PDF)' },
      { id: 'temp_registration_copy', name: 'Registration copy' },
      { id: 'rvp_photos', name: '4 matte photos in 35x45mm size' },
      { id: 'state_fee_receipt', name: 'State fee payment receipt' },
      { id: 'consulate_attestation', name: 'Certificate from consulate (if French with multiple first names in SPB)' },
      { id: 'supporting_docs', name: 'Any other supporting documents you want to add to your file' },
    ],
    documentsToReceive: [
      { id: 'rvp_spravka', name: 'RVP acceptance certificate (Spravka) with case number' },
    ],
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
      'Use acceptance certificate (Spravka) to extend your visa (ideally private 702)',
      'Go to any "otdel po voprosam migratsii umvd" (Отдел по вопросам миграции УМВД)',
      'The procedure is usually called "восстановить визу" (restore/extend)',
      {
        text: 'You will receive an appointment for the day of expiration of your visa',
        tip: 'Don\'t wait until last day - apply early'
      },
      'Come back at this time, you\'ll be instructed to pay state fee at a bank and then will receive your new visa',
      {
        text: 'Alternative: You can exit and re-enter Russia',
        tip: 'You can always exit the country with your private single entry visa, but you will need to make a new one to come back (you can come back with a touristic visa)'
      },
    ],
    documentsToGive: [
      { id: 'rvp_spravka', name: 'RVP acceptance certificate (Spravka)' },
      { id: 'passport_original', name: 'Passport with current visa' },
      { id: 'migration_card', name: 'Migration card' },
      { id: 'temp_registration', name: 'Registration' },
      { id: 'visa_extension_fee_receipt', name: 'State fee receipt (paid at bank as instructed)' },
    ],
    documentsToReceive: [
      { id: 'extended_visa', name: 'Extended visa' },
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
      {
        text: 'You CAN leave Russia during this time',
        tip: 'Must re-enter with valid visa (type doesn\'t matter)'
      },
      {
        text: 'Extend visa if expiring during wait (see step 12)',
        tip: 'Don\'t let your visa expire - apply for extension early'
      },
      {
        text: 'Online tracking service usually doesn\'t work',
        tip: 'Be prepared to check in person or wait for the full 4 months'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport' },
      { id: 'rvp_spravka', name: 'RVP acceptance certificate (Spravka)' },
    ],
    documentsToReceive: [
      { id: 'rvp_stamp', name: 'RVP stamp in passport' },
    ],
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
    title: '14.1 Temporary Registration with RVP',
    description: 'Register your address after receiving RVP - CRITICAL',
    details: [
      {
        text: 'You have 7 WORKING DAYS to register after receiving RVP',
        tip: 'DO NOT WAIT until the last minute - this is critical and can result in RVP cancellation'
      },
      'Same process as step 4, but now with your RVP stamp',
      'Valid maximum 3 months',
      {
        text: 'You need to register again if you leave the country, get registered in a hotel or another city',
        tip: 'Each new registration invalidates the previous one'
      },
      'Can be done at MFC',
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport with RVP stamp' },
      { id: 'passport_copy_registration', name: 'Copy of all pages of passport' },
      { id: 'registration_form', name: 'Filled application form (if applying in person)' },
    ],
    documentsToReceive: [
      { id: 'rvp_registration', name: 'RVP registration document' },
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step14_2',
    title: '14.2 Permanent Registration',
    description: 'Get permanent registration if you have landlord support or own property',
    details: [
      {
        text: 'Go to MFC to register permanently with your landlord/owner',
        tip: 'This requires landlord cooperation and property ownership documents'
      },
      'Bring all required documents',
      {
        text: 'You will receive a stamp in your passport',
        tip: 'This allows you to travel freely in Russia and abroad without having to re-register'
      },
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport with RVP stamp' },
      { id: 'passport_translation', name: 'Passport translation (notarized)' },
      { id: 'landlord_passport', name: 'Landlord\'s passport' },
      { id: 'property_ownership_proof', name: 'Property ownership proof' },
      { id: 'rental_agreement', name: 'Rental agreement (if it has your passport details)' },
      { id: 'house_register_extract', name: 'House register extract' },
    ],
    documentsToReceive: [
      { id: 'permanent_registration_stamp', name: 'Permanent registration stamp in passport' },
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step15',
    title: '15. Police Check',
    description: 'Police verification that you live where you declared',
    details: [
      {
        text: 'Police may visit before or after receiving RVP, potentially multiple times',
        tip: 'In small cities this can happen every month'
      },
      {
        text: 'They will check your passport, RVP, and registration',
        tip: 'They will ask about your landlord and who you live with - be honest and cooperative'
      },
      'Keep all documents with you at home',
      'Make sure your neighbors know about you, if you\'re not home they will ask them',
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport with RVP stamp' },
      { id: 'rvp_registration', name: 'Current registration document' },
    ],
    locationTips: [],
    completed: false,
  },
  {
    id: 'step16',
    title: '16. Annual Notification',
    description: 'Notify authorities yearly after RVP',
    details: [
      {
        text: 'RVP holders must submit annual address notification',
        tip: 'Set yearly reminder - this is a critical requirement'
      },
      {
        text: 'Deadline: within 2 months of RVP anniversary date',
        tip: 'Missing this deadline results in RVP cancellation - do not forget!'
      },
      {
        text: 'Confirm you still reside in region that issued RVP',
        tip: 'RVP is region-specific - must live in issuing region. Moving regions requires special permission'
      },
      'Submit proof of income and address',
    ],
    documentsToGive: [
      { id: 'passport_original', name: 'Passport with RVP stamp' },
      { id: 'rvp_registration', name: 'Current registration document' },
      { id: 'proof_of_funds', name: 'Proof of funds - tax documents (2-NDFL, 3-NDFL) equal to 12x the subsistence minimum' },
    ],
    locationTips: [],
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
