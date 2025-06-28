export const fixedWordPairs = {
  proximity: ['near', 'far'],
  celestial: ['star', 'sun'], 
  scope: ['universe', 'cosmos'],
  essence: ['light', 'energy']
};

export const alternativeWordPairs = {
  proximity: ['close', 'distant'],
  celestial: ['moon', 'planet'],
  scope: ['world', 'space'],
  essence: ['warmth', 'power']
};

export const thirdVisitWordPairs = {
  proximity: ['together', 'apart'],
  celestial: ['comet', 'meteor'],
  scope: ['earth', 'sky'],
  essence: ['love', 'hope']
};

export const fourthVisitWordPairs = {
  proximity: ['united', 'separate'],
  celestial: ['bright', 'shining'],
  scope: ['small', 'vast'],
  essence: ['peace', 'joy']
};

export const fifthVisitWordPairs = {
  proximity: ['joined', 'divided'],
  celestial: ['golden', 'silver'],
  scope: ['tiny', 'endless'],
  essence: ['calm', 'strong']
};

export const sixthVisitWordPairs = {
  proximity: ['linked', 'alone'],
  celestial: ['glowing', 'radiant'],
  scope: ['little', 'massive'],
  essence: ['gentle', 'bold']
};

export const seventhVisitWordPairs = {
  proximity: ['bound', 'free'],
  celestial: ['sparkling', 'brilliant'],
  scope: ['mini', 'giant'],
  essence: ['soft', 'fierce']
};

export const eighthVisitWordPairs = {
  proximity: ['attached', 'loose'],
  celestial: ['twinkling', 'blazing'],
  scope: ['narrow', 'wide'],
  essence: ['quiet', 'loud']
};

export const ninthVisitWordPairs = {
  proximity: ['connected', 'isolated'],
  celestial: ['dancing', 'floating'],
  scope: ['focused', 'open'],
  essence: ['steady', 'wild']
};

export const tenthVisitWordPairs = {
  proximity: ['meeting', 'parting'],
  celestial: ['singing', 'whispering'],
  scope: ['centered', 'spread'],
  essence: ['flowing', 'still']
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
