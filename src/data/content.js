// Wording updated as per client requirements and audio instructions.
// Background song; put the file at public/audio/preet-re.mp3
export const music = { src: 'audio/sajna.mp3', title: 'Sajna', volume: 0.6 }

export const couple = {
  bride: 'Prarthana',
  groom: 'Yatin',
  tagline: 'United as one - two souls, one journey.',
}

export const mantra = {
  shri: 'શ્રી',
  ganesh: '॥ શ્રી ગણેશાય નમઃ ॥',
  jalaram: '॥ શ્રી જલારામ બાપા ની જય ॥',
  kuldevi: ['॥ કુલદેવી શ્રી હિંગળાજ માતા ॥', '॥ રાજ રાજેશ્વરી અંબાજી મા ની કૃપાથી ॥'],
}

// MAIN PAGE 1: GANESH
export const opening = {
  shloka: [
    'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।',
    'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
  ],
  intro: 'The Wedding Invite of',
  groom: { name: 'Yatin', parents: '(Son of Sona and Pritesh Karia)' },
  bride: { name: 'Prarthana', parents: '(Daughter of Hema and Bhrugesh Bhatt)' },
}

export const description = {
  title: 'Saptabandhan',
  subtitle: 'Our Wedding Journey in Seven Sacred Chapters',
  paragraphs: [
    [
      { text: "Our wedding journey unfolds in seven sacred chapters beginning with the decision to celebrate our " },
      { text: "Lotus", type: "element" },
      { text: "-like souls' union with all of you in the " },
      { text: "Kankotri Lekhan", type: "function" },
      { text: ". The groom and his family then introduced the bride to their customs and bound the souls in a " },
      { text: "“Sacred Wedding Knot”", type: "element" },
      { text: " during the " },
      { text: "Chundadi (Vivah Khel) Function", type: "function" },
      { text: " followed by the fragrant, love-filled " },
      { text: "Waves", type: "element" },
      { text: " of the " },
      { text: "Mehandi Celebration", type: "function" },
      { text: " to both families." },
    ],
    [
      { text: "We then sought auspicious planetary blessings to direct us through life, like the " },
      { text: "North Star", type: "element" },
      { text: " with the auspicious " },
      { text: "Grah Shanti", type: "function" },
      { text: " before we go back to our roots, where all near and dear ones bless us " },
      { text: "Infinity", type: "element" },
      { text: " with health and prosperity through the customary healthy " },
      { text: "Haldi", type: "function" },
      { text: "." },
    ],
    [
      { text: "In the penultimate stage, all of us gather under the stars to dance and celebrate to the " },
      { text: "Moon and back", type: "element" },
      { text: " in " },
      { text: "Sangeet Night", type: "function" },
      { text: " leading finally to the ultimate " },
      { text: "Vivah", type: "function" },
      { text: ", where " },
      { text: "Agnidev (Agni)", type: "element" },
      { text: " witnesses and blesses our eternal union." },
    ],
  ],
}

// SEQUENCE OF ELEMENTS: LOTUS, the sacred knot, waves, the north star, infinity, sunmoon, agni
export const sequenceOfElements = [
  { icon: 'lotus', name: 'Lotus', meaning: 'Purity, spiritual awakening and divine blessings.' },
  { icon: 'knot', name: 'The Sacred Knot', meaning: 'The sacred knot of marriage, symbolizing unity and commitment.' },
  { icon: 'waves', name: 'Waves', meaning: 'Love that comes in fragrant, joyous waves.' },
  { icon: 'north-star', name: 'The North Star', meaning: 'Guidance and protection of celestial bodies.' },
  { icon: 'infinity', name: 'Infinity', meaning: 'Deep roots and an unending bond of health and prosperity.' },
  { icon: 'sun-moon', name: 'Sun-Moon', meaning: 'Harmonious celebration balancing energies in the galaxy.' },
  { icon: 'agni', name: 'Agni', meaning: 'The sacred fire witnessing and blessing our eternal union.' },
]

const KAMLA_AMRUT = ['Kamla Amrut Farm']

// Wedding events
export const events = [
  {
    id: 'sangeet',
    title: 'Sangeet – Walking to the moon',
    theme: 'golden',
    element: 'sun-moon',
    invocation: { lang: 'gu', text: '॥ શ્રી ગણેશાય નમઃ ॥' },
    blessing: {
      lines: [
        'Where galaxies glow beneath a moonlit sky,',
        'join us for a Sufi night where soulful melodies meet a celebration written in the stars.',
      ],
    },
    date: 'Monday, 23rd November 2026',
    schedule: [{ label: 'Sangeet', time: '7:00 PM onwards', note: '(followed by DINNER)' }],
    dressCode: { label: 'Blue/Black', colors: ['#1f3c88', '#111111'] },
    venue: KAMLA_AMRUT,
    description:
      'It is probably the peak of festivities where everyone celebrates with music in our galaxy, right among “the Sun and the Moon”, balancing their energies.',
  },
  {
    id: 'wedding',
    title: 'Wedding – Eternity',
    theme: 'eternity',
    element: 'agni',
    invocation: { lang: 'gu', text: '॥ શ્રી ગણેશાય નમઃ ॥' },
    blessing: {
      verse: { lang: 'hi', lines: ['जेहि कें जेहि पर सत्य सनेहू।', 'सो तेहि मिलइ न कछु संदेहू॥'] },
      lines: [
        'With mantras in the air, blessings in our hearts, and the grace of the divine,',
        'We invite you to witness the sacred union of two hearts and two families.',
      ],
    },
    date: 'Tuesday, 24th November 2026',
    dateNote: 'Shukla Purnima,Vikram Samvant 2083',
    schedule: [
      { label: 'Jaan Prasthan', time: '3:05 PM', note: '(From Home)' },
      { label: 'Hastmelap', time: '6:35 PM', note: '(followed by DINNER)' },
    ],
    dressCode: { label: 'Indian Traditional', colors: [] },
    venue: KAMLA_AMRUT,
    description:
      'The souls unite again in their eternal journey and vow togetherness in the presence of the most efficient purifiers – “The Agni”. The bond continues…',
  },
]

// PAGE: FAMILY
export const family = {
  divineTitle: '|| DIVINE BLESSINGS ||',
  divineCouples: [
    ['Late Mr. Kantibhai Valjibhai Karia', 'Late Mrs. Kantaben Kantibhai Karia'],
    ['Late Mr. Babubhai Valjibhai Karia', 'Late Mrs. Heeraben Babubhai Karia'],
    ['Late Mr. Jayantibhai Valjibhai Karia', 'Late Mrs. Manjulaben Jayantibhai Karia'],
    ['Late Mr. Batukbhai Valjibhai Karia', 'Late Mrs. Ramaben Batukbhai Karia'],
  ],
  greetingsTitle: '|| A CORDIAL INVITATION FROM ||',
  greetingsCouples: [
    ['Mr. (Late) Rameshbhai Jayantibhai Karia', 'Mrs. Jayshreeben Rameshbhai Karia'],
    ['Mr. Bakulbhai Jayantibhai Karia', 'Mrs. Meenaben Bakulbhai Karia'],
    ['Mr. Mukundbhai Jayantibhai Karia', 'Mrs. Amitaben Mukundbhai Karia'],
    ['Mr. Shyambhai Jayantibhai Karia', 'Mrs. Rupaben Shyambhai Karia'],
    ['Mr. Rambhai Jayantibhai Karia', 'Mrs. Sonaben Rambhai Karia'],
    ['Mr. Kaushikbhai Babubhai Karia', 'Mrs. Parulben Kaushikbhai Karia'],
    ['Mr. Prakashbhai Babubhai Karia', 'Mrs. Beenaben Prakashbhai Karia'],
  ],
  specialMembers: [
    'Mr. Dhawalbhai Rambhai Karia',
    'Mrs. Hardikaben Dhawal Karia',
    'Ms. Aastha Rambhai Karia',
  ],
  awaits: 'And the entire Karia family wishes you — Jai Shri Krishna!',
  regards: {
    title: '|| RAM RAM ||',
    text: 'With warm regards from Nathwani family',
  },
  tahuko: {
    title: 'Tahuko',
    lines: [
      'સોનાનો સૂરજ ઉગ્યો, રૂડો અવસર આવ્યો અમ ઘેર, રૂડા માંડવા રોપાશે, લીલા તોરણિયા બંધાશે,',
      'ઢબુક ઢોલ વાગશે, મીઠી શરણાઈ વાગશે મારા કાકા / મામા ના લગ્ન લેવાય છે, માટે તમે જરૂર આવજો ભુલાઈ નહિ.....',
    ],
    from: '– Jena, Mishti, Krisha, Kiyansh, Rishiv',
  },
}

export const mapsLink = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(' '))}`
