export const advantageCategories = {
  STANDARD: 'standard',
  SPECIAL: 'special',
}

export const advantages = [
  // Standard Advantages
  {
    name: 'Stærke tænder',
    cost: -1,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får aldrig huller i tænderne eller problemer med sit tandkød. Husk at for øglemænd og andre med naturligt bite-attack koster denne fordel 3 UP og hæver grundskade på bid med 1 og AS med 0,2.',
  },
  {
    name: 'Indre ur',
    cost: -1,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren ved altid hvad tid på dagen det er, og hvor lang tid der gået siden en bestemt hændelse. For at hjælpe DM må en spiller med indre ur gerne selv notere tiden. Kan give positive modifikationer til visse INT-tjeks.',
  },
  {
    name: 'Gode smagsløg',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en meget nuanceret smagssans og har f.eks. en rimelig chance for at opdage gift eller urenheder i mad og drikke. Giver +1 til Gastronomi. Det kan dog også være lidt en ulempe, når man skal spise noget, hvor der er rullet meget over i Gastronomi.',
  },
  {
    name: 'Ateist',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Man tror ikke på nogen former for højere magter, og har gennem hele livet lært at fornægte alt der beviser det modsatte og at ignorere enhver tåbe, der påstår noget andet. Regelteknisk bevirker det, at man hverken kan få eller miste faith, og at guder generelt ikke kan gøre en noget direkte (det gælder ikke dæmoner eller lignende "guddommelige" væsner i kamp!). Samtidig mister man mindre SAN ved kosmiske rædsler, men 1 SAN mere hver gang man går op i Mythos.',
  },
  {
    name: 'Ungdommelighed',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren beholder et udseende som en 20-30 årig, selv når han/hun kommer langt op i årene.',
  },
  {
    name: 'God opdragelse',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får gratis 6 i købsværdi i Etikette-færdigheden med sit barndomsmiljø som undergruppe. Har vedkommende allerede 6 eller mere i grundværdi, gives i stedet +1. Man skal huske at spille sin char efter det og have en passende baggrundshistorie.',
  },
  {
    name: 'Indre lommeregner',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er rigtig god til hovedregning. Kan gøre det lettere at få job som revisor eller lignende. Kan give plus til Matematik i visse situationer, hvor man skal regne hurtigt.',
  },
  {
    name: 'God lugtesans',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren er god til at opdage, skelne og identificere lugte.',
  },
  {
    name: 'Hobbyist',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har to hobbyer, så får to gange 5 hobby-UP til to separate færdigheder. Disse færdigheder stiger begge via lvl-bonusser.',
  },
  {
    name: 'Stærk',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren er stærkere end gennemsnittet og får +1 til skadebonus.',
  },
  {
    name: 'Svag',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description: 'Karakteren er svagere end gennemsnittet og får -1 til skadebonus.',
  },

  // Special Advantages
  {
    name: 'Hollow Bones',
    cost: 0,
    advantage: true,
    category: advantageCategories.SPECIAL,
    description:
      'En særlig fordel der kun kan tages af særlige racer (primært mutanter eller animorphs) og kun med DMs tilladelse. Nedsætter HP med 1d6 og bevirker at ens knogler lettere brækkere men giver til gengæld +2 InIm, +3 til HUR-tjeks over korte distancer samt +1 til Hurtigtræk, Akrobatik og Flyvning.',
    requirements: 'Kun særlige racer, DMs tilladelse',
  },
  {
    name: "What doesn't kill you",
    cost: 0,
    advantage: true,
    category: advantageCategories.SPECIAL,
    description:
      'Bevirker at alle dine typer SB permanent nedsættes med 2 og alle typer resistances med 10 procentpoint. Både SB og resistance kan således godt ende på negative værdier. Til gengæld gives flere XP for kampe. Derudover kan man efter alle kampe hvor man var tæt på at dø købe sig 1 op i enten UDH eller STR med 3 UPs rabat (oveni andre evt rabatter). Denne særlige fordel kan godt købes flere gange.',
    requirements: 'DMs tilladelse',
  },
  {
    name: 'Anger Unleashed',
    cost: -5,
    advantage: true,
    category: advantageCategories.SPECIAL,
    description:
      'En fordel der kun kan tages af krigere og offensive præster. Så snart man har spildt blod i en kamp, får man +1 til SkB og OffAR i et tidsrum på 3+2d6 segmenter.',
    requirements: 'Krigere og offensive præster',
  },
  {
    name: 'Combat Medic',
    cost: -5,
    advantage: true,
    category: advantageCategories.SPECIAL,
    description:
      'Kan kun tages af folk med 14+ i Førstehjælp. Bevirker at man ikke får minusser under kamp til Healing-skills (spells såvel som Førstehjælp og Medicin) grundet evt stress og forfejlede MMM-tjeks, at man hurtigere kan stabilisere en muligvis døende person (dvs denne mister færre HP ved blødning under ens healing) og at man får +2 til alle typer healing-tjeks på folk man ofte (mere end bare 2-3 gange) har kæmpet side om side med, og som man godt kan lide.',
    requirements: 'Førstehjælp 14+',
  },
]

// Helper functions
export const getAdvantagesByCategory = (category) => {
  return advantages.filter((adv) => adv.category === category)
}

export const getStandardAdvantages = () => {
  return advantages.filter((adv) => adv.category === advantageCategories.STANDARD)
}

export const getSpecialAdvantages = () => {
  return advantages.filter((adv) => adv.category === advantageCategories.SPECIAL)
}

export const getAdvantage = (name) => {
  return advantages.find((adv) => adv.name === name)
}
