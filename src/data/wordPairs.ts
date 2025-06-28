
export const fixedWordPairs = {
  proximity: ['near', 'far'],
  celestial: ['star', 'sun'], 
  scope: ['universe', 'cosmos'],
  essence: ['light', 'energy']
};

export const alternativeWordPairs = {
  proximity: ['quantum', 'distant'],
  celestial: ['nebula', 'galaxy'],
  scope: ['molecule', 'atom'],
  essence: ['gravity', 'magnetism']
};

export const thirdVisitWordPairs = {
  proximity: ['infinite', 'void'],
  celestial: ['comet', 'moon'],
  scope: ['dimension', 'reality'],
  essence: ['time', 'space']
};

export const fourthVisitWordPairs = {
  proximity: ['eternal', 'fleeting'],
  celestial: ['pulsar', 'quasar'],
  scope: ['microcosm', 'macrocosm'],
  essence: ['harmony', 'chaos']
};

export const fifthVisitWordPairs = {
  proximity: ['bound', 'free'],
  celestial: ['asteroid', 'meteor'],
  scope: ['particle', 'wave'],
  essence: ['rhythm', 'silence']
};

export const sixthVisitWordPairs = {
  proximity: ['parallel', 'convergent'],
  celestial: ['dwarf', 'giant'],
  scope: ['quantum', 'cosmic'],
  essence: ['vibration', 'stillness']
};

export const seventhVisitWordPairs = {
  proximity: ['adjacent', 'remote'],
  celestial: ['binary', 'solitary'],
  scope: ['nano', 'mega'],
  essence: ['flow', 'stasis']
};

export const eighthVisitWordPairs = {
  proximity: ['connected', 'isolated'],
  celestial: ['bright', 'dark'],
  scope: ['finite', 'boundless'],
  essence: ['pulse', 'calm']
};

export const ninthVisitWordPairs = {
  proximity: ['intimate', 'distant'],
  celestial: ['radiant', 'shadowed'],
  scope: ['local', 'universal'],
  essence: ['motion', 'rest']
};

export const tenthVisitWordPairs = {
  proximity: ['close', 'apart'],
  celestial: ['burning', 'cold'],
  scope: ['tiny', 'vast'],
  essence: ['force', 'peace']
};

export const categoryLabels = {
  proximity: 'Connection',
  celestial: 'Cosmic Body',
  scope: 'Scale',
  essence: 'Force'
};

export const fixedWordColors: Record<string, 'white' | 'yellow'> = {
  'far': 'white',
  'near': 'yellow',
  'star': 'white', 
  'sun': 'yellow',
  'cosmos': 'white',
  'universe': 'yellow',
  'energy': 'yellow',
  'light': 'white'
};

export const getCurrentWordPairs = (visitCount: number) => {
  if (visitCount === 0) return fixedWordPairs;
  if (visitCount === 1) return alternativeWordPairs;
  if (visitCount === 2) return thirdVisitWordPairs;
  if (visitCount === 3) return fourthVisitWordPairs;
  if (visitCount === 4) return fifthVisitWordPairs;
  if (visitCount === 5) return sixthVisitWordPairs;
  if (visitCount === 6) return seventhVisitWordPairs;
  if (visitCount === 7) return eighthVisitWordPairs;
  if (visitCount === 8) return ninthVisitWordPairs;
  return tenthVisitWordPairs;
};
