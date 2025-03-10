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
  {
    name: 'G',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Bevirker at man kan drikke en given drink, så længde denne ikke overstiger 1 liter, op til 4 gange så hurtigt som ellers. Kan blandt andet bruges til at vinde drukspil og få SM, når man går i byen eller til i kamp hurtigere at kunne drikke f.eks. mana- og healing-potions.',
  },
  {
    name: 'Follower',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Kan kun tages af folk, der ikke har Lederevne eller Overtalelse, og hvis personlighed tillader det. Er et billede på at man er den fødte partisoldat, og at man har det bedst med en erfaren leder, der kan fortælle en hvad man bør gøre. Regelteknisk får man større effekter af Lederevne og lignende tjeks, og man får +2 til NPC-reaction ved autoriteter (fordi de godt kan lide, at man ser op til dem og adlyder deres ordrer).',
  },
  {
    name: 'Lange lemmer',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har længere arme, ben, hænder og fødder end normalt for hans størrelse. Regelteknisk giver det større attack range end normalt for pågældende STØ.',
  },
  {
    name: 'Flere FATIGUE',
    cost: -2,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'En fordel, der gør det muligt at få flere fatiguepoints end man regelteknisk er berettiget til. Det førte ekstra point koster 2 UP, derfra koster de alle 3 UP. Denne fordel optager kun plads som én fordel, uanset hvor ofte den købes. Man kan dog kun købe 1 FAT per level og kun hvis DM giver lov. Kan være meget nyttig for magikere.',
  },
  {
    name: 'Yndlingsfarve',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en yndlingsfarve, der skal afspejle karakterens personlighed. Så længe karakterens klæder er i denne farve, får vedkommende +2 til alle HEL-tjeks. Man bliver automatisk en smule overtroisk med hensyn til farver, og andre folk vil måske finde det underligt.',
  },
  {
    name: 'Betydningsfuld ven',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en meget betydningsfuld ven som kontakt. Prisen fastsættes efter HVOR betydningsfuld vennen er. En god baggrundshistorie er påkrævet.',
  },
  {
    name: 'Informative kontakter',
    cost: -3, // variabel, sat til -3 som default
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Dette udbygger ens liste af kontakter med en eller flere personer, der bør skrives op som informative kontakter (se reglerne for disse under Kontakt)',
  },
  {
    name: 'Tjeneste',
    cost: -3, // varierer
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Du har reddet en anden persons liv, eller på anden måde gjort noget der bevirker, at vedkommende skylder dig en tjeneste. Denne fordel sikrer dig en særlig kontakt, der vil hjælpe dig med lige meget hvad du beder om, men kun én gang. Derefter forsvinder vedkommende ud af dit liv. Prisen varierer alt efter hvilken person det er, der skylder en tjeneste, og hvor let vedkommende er at få fat i.',
  },
  {
    name: 'Stærk ryg',
    cost: -3,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakterens bæreevne forhøjes med 10-15% og man kan få plus til STR-tjeks, når man skal løfte noget.',
  },
  {
    name: 'Rejsende',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er vant til at rejse meget, og får derfor +1 til FAT og mister mindre FAT ved lange rejser. Man kan ikke tage denne fordel, medmindre man rent faktisk har en baggrundshistorie og en personlighed, der retfærdiggøre at man har rejst meget rundt.',
  },
  {
    name: 'Standhaftig',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Man får +1 til MMM, såfremt man har over 50% af sine SAN og +2, hvis man kun har mistet 5 eller mindre af sine oprindelige SAN. Man tager kun 1d2 i SAN-skade, når man er i livsfare og man får desuden +5 til MMM-tjeks man tager undervejs i en kamp, når man rammer det, der har forårsaget et fejlet MMM-tjek.',
  },
  {
    name: 'Talent',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "DM'en skal tilfældigt udvælge en Let færdighed, som kun koster det halve. Færdigheden bestemmes vha. et terningeslag.",
  },
  {
    name: 'Know creature',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren kender til en svagheder og styrker ved et bestemt væsen (f.eks. orker), og får derfor adgang til viden om væsenets fordele og ulemper etc. Hvert nyt creature koster efterfølgende kun ét UP point.',
  },
  {
    name: 'God hukommelse',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en meget skarp og detaljeret hukommelse. Han får +5 til intelligens tjeks, når det gælder om at huske noget.',
  },
  {
    name: 'Orienteringssans',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har altid en utrolig færdighed til at orientere sig, også uden hjælpemidler. Han kan fx som regel finde ud af en labyrint.',
  },
  {
    name: 'Voldstilladelse',
    cost: -4,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "Karakterens job giver ham mulighed for at bruge 'dagligdags'vold uden at blive straffet. Det kræver dog for det første et job, der giver denne mulighed. For det andet skal man ikke føle sig for sikker, da visse voldelige handlinger stadig kan føre til straf.",
  },
  {
    name: 'Modig i flok',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Man får +4 til MMM, når man kæmper i en gruppe (der defineres som tre eller flere venligsindedede personer). Rammes man af skræmmende spells, får man ikke +4 selvom man står i en gruppe. Står man pludseligt alene, skal man tage et nyt MMM-tjek uden +4. Alle orker får denne fordel gratis og uden at den optager nogen plads.',
  },
  {
    name: 'Skæbneramt',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Skæbnen har planer med karakteren, som denne ikke kan undslippe. Se Skæbnen for mere info.',
  },
  {
    name: 'Ingen tømmermænd',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Du har meget sværere ved at få tømmermænd end de fleste. Du lider stort set kun under reglerne for tømmermænd, når du havner på 13 eller 14 på forgiftnings-tabellen (de to steder, der kan medføre død!).',
  },
  {
    name: 'Geni',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får undertiden geniale ideér. Hver gang karakteren skal slå intelligens-tjek, skal spilleren først rulle 1d6. Hvis han slår 5 eller 6 fordobles karakterens intelligens til tjekket. Geni kan ikke bruges på at nedsætte indlæringstid, medmindre man researchers et eller andet eller på anden vis er i en situation, hvor en pludselig genial ide kan gøre en forskel.',
  },
  {
    name: 'Vejrkender',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en (for andre) næsten overnaturlig følsomhed overfor vejrforhold, og kan f.eks. føle i sine led, når tryk eller luftfugtighed ændrer sig. Denne fordel giver +2 til Meterologi og bevirker samtidig, at man kan købe sig op i den hurtigere end INT og UDA tillader. Man vil altid kunne samle information om vejrforhold på kort tid og selv uden måleredskaber af nogen art. Man klarer per automatik de lette "spot regnvejr"-tjeks (men må selvfølgelig stadig rulle for at forsøge at score en supersucces eller lignende). Man får ikke minusser til Meterologi, selv når klimaet er fremmed for en (medmindre det er i en helt anden verden).',
  },
  {
    name: 'Vaks',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget vågen og vaks og har kun brug for halvt så meget søvn som det er normalen for ens respektive race.',
  },
  {
    name: 'Godt helbred',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren bliver aldrig syg medmindre vedkommende direkte bliver forgiftet eller ryger ned på 4 eller mindre i FAT. Desuden får man +3, når der tjekkes for betændelser i sår, oveni hvad eventuelle tjeks i Førstehjælp eller Medicin giver en.',
  },
  {
    name: 'Rygte',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har et rygte eller omdømme i et valgt miljø. Rygtet kan være positivt eller negativt men er en fordel for karakteren.',
  },
  {
    name: 'Musikalsk',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får +3 i alle former for musisk udfoldelse, dvs færdighederne Spille (instrument og Synge.',
  },
  {
    name: 'Langsom ælde',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren ældes langsomt, og lever 10% længere end resten af sin race (hvis altså ikke man dør en (u) naturlig død). Kan tages sammen med Gammel eller Ældgammel for at fjerne enkelte af de negative modifikationer, der følger med disse ulemper (afhænger af race og baggrund så tal med DM).',
  },
  {
    name: 'Ild-resistant',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Giver +15% fire-rec.',
  },
  {
    name: 'Kulde-resistant',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Giver +15% cold-rec.',
  },
  {
    name: 'Elektrisk-resitant',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Giver +15% elec-rec.',
  },
  {
    name: 'Hurtiglæser',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Du læser to til tre gange så hurtigt som et normalt individ, hvilket bevirker at alle studier involveret læsning får nedsat studietiden mærkbart.',
  },
  {
    name: 'Mange venner',
    cost: -5,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Det modsatte af ulempen Få Venner. Giver en ret til yderligere to kontakter. Ens karakters personlighed skal retfærdiggøre, at man har mange venner.',
  },
  {
    name: 'The small things in life',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Kan kun tages af folk med en romantisk tilgang til verden. Bevirker at man kan genvinde SAN ved små hændelser som en særlig smuk solnedgang, vinden i træerne en forårsmorgen i skoven, en smuk sang der betyder meget for en, etc. For mange karakterer i Tågedalen kan denne fordel virke ret gay måske.',
  },
  {
    name: 'Push the Limit',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Man får ikke negative modifikationer ved lav FAT og kan desuden ignorere visse crit-effekter i noget tid. Kan kun tages af folk med over 10 i UDH.',
  },
  {
    name: 'Ambidextrøs',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Man kan bruge begge sine hænder med lige stor effektivitet. Regelteknisk bevirker det, at man ikke får -3 til tjeks med sin off-hand. Bemærk at denne fordel nu ikke længere er nok til at sikre bonusser ved kamp med et våben i hver hånd. Dertil kræves særlige specialfordele - se Kampregler.',
  },
  {
    name: 'Fedt job',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har været så heldig, at han har fået et ønskejob. Jobbets løn og magt afhænger af uddannelse, baggrund, andre fordele osv.',
  },
  {
    name: 'Alternativ identitet',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren må vælge en anden identitet, dog ikke en med for høj social status. De to identiter skal deles om karakterens økonomi.',
  },
  {
    name: 'Boldøje',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren får +3 til sin grundværdi i Kaste-færdigheden.',
  },
  {
    name: 'Skarpskytte',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakterens maksimale bonus til Sigte stiger med en og det første segment man sigter fås +2 til AR i stedet for +1.',
  },
  {
    name: 'Social intelligent',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren forstår at omgås andre, og får derfor +1 til alle former for Etikette og +2 til NPC-reactions.',
  },
  {
    name: 'Adrenalin',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren må én gang per dag slå en ekstra D20 i sit OffAR tjek og vælge det bedste, på bekostning af man dernæst er drænet og går i shok i sin ini+1.',
  },
  {
    name: 'Stort brød',
    cost: -6,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får 1d6 ekstra HP og forøget sin bæreevne med 10% men samtidig -1 InIM og når RT udregnes. Kan ikke tages af karakterer der har under 11 i STØ.',
  },
  {
    name: 'Født leder',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har utrolige medfødte lederfærdigheder, der giver ham +4 til grundværdien i Lederevne og +1 til UDS. Kan kun tages af karakterer der har en leder-personlighed.',
  },
  {
    name: 'Supertalent',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "DM'en skal tilfældigt udvælge en færdighed som kun koster halv pris i uddannelsespoint. Talentet/færdigheden bestemmes ved at rulle en passende terning.",
  },
  {
    name: 'Vellidt',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er social og populær og får derfor to gode venner som kontakter uden at skulle rulle for dem samt en ekstra kontakt. Han får også +1 til sin grundværdi i Etikette-færdigheden.',
  },
  {
    name: 'Bersærkergang',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Når karakteren misser et MMM-tjek, får han ikke de normale minusser men går i stedet for fuldstændigt amok. Han smadrer alting og angriber alle fjender i nærkamp, hvis det er muligt. Hvis spilleren slog tyve på sit MMM tjek er karakteren så blændet af sit raseri at han angriber alle; både venner og fjender. Mens karakteren er bersærk får han +3 til skadebonus og han kan kæmpe uanfægtet videre indtil han dør og ænser hverken skade eller smerte. Alle fjender deer bliver angrebet af en bersærker i nærkamp skal straks slå et MMM tjek med -1.',
  },
  {
    name: 'God hørelse',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren hører eksemplarisk og får +3 til OB og grundværdien i undersøge når det gælder om at lytte, og KUN når det gælder om at lytte. Ved OB tjeks får man +1.',
  },
  {
    name: 'Gode øjne',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren ser godt og får +3 til OB og grundværdien i undersøge når det gælder om at se, og KUN når det gælder om at se. Ved OB tjeks får man +1.',
  },
  {
    name: 'Reflekser',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har reflekser som en kat og får derfor en InI-modifikation på +2 til udregning af alle InI-værdier baseret på HUR.',
  },
  {
    name: 'Organisation',
    cost: -4, // mellem +0 og -8
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "Karakteren har gode relationer til en eller flere organisationer, som har en ekspertise vedkommende kan trække på. Hvor mægtig organisationen er, hvor mange andre ting der er påkrævede for at være medlem og hvor farligt det er at være medlem bestemmer UP-pris. 0 UP er for enten meget ligegyldige organisationer (som f.eks. Centrums Organiserede Kagebagende Husmødre), meget små og lokale organisationer (som Peter, Tom og Jens' Hemmemlige Hule på Karl Johansens Vej) eller organisationer hvis medlemsskab bringer en masse ulemper med sig (såsom en ulovlig undercover satanisk kult). 8 UP er for globlalt dækkende og meget store og stærke organisationer med soldater der kan stilles til rådighed såsom Paladin-ordenen. De fleste organisationer er sammenslutninger og lauge og koster mellem 3 og 5 UP samt typisk SM eller lignende for medlemsskab. Man kan sagtens tage Organisation flere gange (den skal kun skrives på én gang og tager derfor kun plads som én fordel) men der skal selvfølgelig belales UP for hver. En char kan ikke bare tage 10 0 UP organisationer for at være morsom, medmindre der er en historisk grund og en personlig baggrund for karakteren der matcher.",
  },
  {
    name: 'Daredevil',
    cost: -7,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'En noget speciel fordel, der giver bonus til tjeks, når man forsøger at gøre noget impulsivt, vovemodigt eller bare direkte skørt (som oftest er disse bonusser blot nok til at opveje diverse negative modifikationer, som handlingen ellers ville have givet en). Man får IKKE +3 til alle farlige Liste/Gemme-tjeks eller lignende. Derudover får man HeP i belønning når man udfører livsfarlige vovestykker, og man kan ikke fumble under sådanne handlinger.',
  },
  {
    name: 'Special Background',
    cost: -7, // varierende
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Giver en ret til at lave en særlig baggrundshistorie til ens char. Fungerer godt med Skæbneramt. Kan give adgang til Superfordele eller særlige evner allerede fra starten af spillet, såfremt historien er god og prisen på Special Background er af en sådan størrelsesorden, at DM finder den passende. Husk at spørge DM om lov! At købe sig op i Teknologiniveau er som tommelfingerregel 4 UP for første step, 5 UP for næste, etc, hvorved det koster den svimlende sum af ~30 UP at købe sig op til vores present day niveau fra midten af dFKa!',
  },
  {
    name: 'Lederjob',
    cost: -7, // mellem -5 og -10
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en lederstilling, der er vellønnet og giver indflydelse og magt. Kræver at de fornødne sekundære færdigheder for det gode job (se job-tabellen) haves. Jo bedre et job der er tale om, jo flere UP koster fordelen.',
  },
  {
    name: 'Overlegen fordøjelse',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har et overordentligt effektivt fordøjelsessystem. Vedkommende kan let fordøje alle madtyper, får mere ud af mindre mad og får forøget sin poison-resistance og sin regeneration fra potions med 10 procentpoint.',
  },
  {
    name: 'Magisk potentiale',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren får 2d4+6 ekstra MP',
  },
  {
    name: 'Dobbelt nationalitet',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren må vælge et ekstra modersmål. Det skal fremgå af karakterens historie, hvorfor man har to nationaliteter og om man er loyal overfor begge.',
  },
  {
    name: 'Arv',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er en mulig arving til en meget rig og/eller magtfuld person. Desværre må karakteren hele tiden kæmpe for at være i gunst hos sin rige slægtning, såsom man ser det ved Anders And og hans onkel. Der kan dog også i stedet være tale om en slægt, som hele tiden forventer noget af en, og hvor man får flere privilegier og mere magt med tiden (f.eks. efterhånden som folk dør eller som man gør sig fortjent til det).',
  },
  {
    name: 'Multitalent',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "DM'en må tilfældigt vælge tre lette færdigheder, som kun koster det halve. Færdigheden bestemmes vha. en terning.",
  },
  {
    name: 'Hypermobil',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakterens led er meget bøjelige og bløde hvilket resulterer i man er meget svært at længe og låse fast. Samtidig kan man klemme sig ind de underligste steder. Giver dog samtidig anledning til gigt og ømme led, hvilket kan give smerter og andre mén.',
  },
  {
    name: 'Senestærk',
    cost: -8,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren har særdeles stærke sener og får derfor +1 til sin skadebonus.',
  },
  {
    name: 'Rig familie',
    cost: -9,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en rig og velhavende familie, som undertiden kan (og vil) støtte vedkommende.',
  },
  {
    name: 'Stærke knogler',
    cost: -9,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får 1d6 ekstra HP. Kan i lvl 8 opgraderes til ekstra stærke knogler for -6 UP, der giver yderligere 1d6 ekstra HP. Gør samtidig også at der er en lille smule mindre sandsynlighed for, at karakterens knogler brækker, skønt en crit siger det.',
  },
  {
    name: 'Medfølelse/empati',
    cost: -9,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "Karakteren har en særlig færdighed til at mærke hvordan andre har det, selv om disse prøver at skjule det. Karakteren får +3 til PSI/Skuespil når folk prøver at snyde vedkommende med eksempelvis færdighederne Skuespil og Overtalelse, og DM kan fortælle spilleren, hvordan NPC's man taler med føler.",
  },
  {
    name: 'Juridisk immunitet',
    cost: -9,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Du er en diplomat, en adelsmand, en præst eller noget helt fjerde, der i din hjemnation og i nationer der deler samme juridiske politik, er hævet over visse lovgivninger. Kun dine egne direkte overhoveder, såsom chefen af din diplomatiske gruppe eller ærkebiskoppen, kan dømme dig (hvilket også kan være slemt nok). For at kunne købe denne fordel, skal ens baggrund selvfølgelig kunne matche den. Denne fordel giver færre UP, hvis det kun er nogle udvalgte steder, hvor man nyder immunitet.',
  },
  {
    name: 'Glimt i øjet',
    cost: -10,
    advantage: true,
    category: 'STANDARD',
    description: 'Karakteren får +5 til sin grundværdi i Forførelse og +1 til en bestemt Etikette.',
  },
  {
    name: 'Synsk',
    cost: -10,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren er synsk og får undertiden drømme og syner om fremtiden. Husk at spørge DM om lov!',
  },
  {
    name: 'Lykkebringer',
    cost: -10,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren har en ting, som bringer ham held - f.eks. en mønt. Når karakteren har tingen på sig får han 50% flere heldpoint og +5 til heldtjeks. Hvis lykkebringeren bliver væk forsvinder effekten og må ikke bruge heldpoint.',
  },
  {
    name: 'Cool',
    cost: -10,
    advantage: true,
    category: 'STANDARD',
    description: 'Karakteren får +5 til MMM tjeks.',
  },
  {
    name: 'Superior genetics',
    cost: -10,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren har ikke noget maksimum på én (selvvalgt) stat, og kan derfor putte mere end de normale 10 i den valgte stat. Samtidig får man +1 til én anden (randomvalgt) stat.',
  },
  {
    name: 'Magi i blodet',
    cost: -11,
    advantage: true,
    category: 'STANDARD',
    description:
      'Du nedstammer fra en slægt af dygtige og kendte magikere, og lige siden du blev født, har det lagt i kortene at du selv skulle være magiker. Grundet din afstamning rummer din krop langt mere magisk potentiale end normalt, og dit talent indenfor magi er ikke at kimse af. Regelteknisk udregnes MP som MAG*5 i stedet for MAG*4, og du får +3 til en af DM tilfældigt valgt Common Spell. I magikerkredse er dit slægtnavn kendt på både godt og ondt.',
  },
  {
    name: 'Unfazeable',
    cost: -11,
    advantage: true,
    category: 'STANDARD',
    description:
      'Intet i verden overrasker dig. Allerede tidligt i din barndom fandt dine søskende ud af, at der ikke var meget sjovt i at springe frem og råbe bø! foran dig med en uhyggelig maske på, fordi du overhovedet ikke ville reagere på det…måske på nær et enkelt gab. Du er typen der, hvis du står i et brændende hus der er ved at falde sammen, vil lede i din rygsæk efter en skarp pind og nogle pølser. Lige meget hvor mærkelig et væsen du møder, skal du aldrig slå for at miste SAN, og trusler virker aldrig på dig. Husk på at dette ikke er som Supercool (selvom de to vil virke ganske godt sammen), så du får ikke plusser til MMM. Du kan fortsat blive bange, om end du blot skal rollespille det ala: ”Jamen dog, en helt horde orker kommer løbende mod mig. Jeg tror det mest fornuftige ville være at løbe den modsatte vej, bare sådan i god ro og orden!” Denne fordel gør automatisk karakteren en smule følelseskold og SKAL ROLLESPILLES HELE TIDEN. Hvis ikke vurderer DM, at man har mistet fordelen. Engelske butlere er fantastiske eksempler på hvordan denne fordel bør håndteres: ”Undskyld mig Sir, men et sært væsen med orange tentakler og en mere end rigelig andel øjne er ved at ødelægge vores ellers så nydelige hoveddør. Skal jeg vente lidt med at servere teen?”',
  },
  {
    name: 'Kondi',
    cost: -11,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren har en god kondi og kan derfor løbe 50% længere end normalt og får +1 til UDH og +1 til FAT. FAT mistes langsommere ved fysisk udfoldelse.',
  },
  {
    name: 'Talegaver',
    cost: -12,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren får +4 til sin grundværdi i færdigheden overtale, +3 til sin grundværdi i etikette og +1 til forhandling.',
  },
  {
    name: 'Særlig evne',
    cost: -12,
    advantage: true,
    category: 'STANDARD',
    description:
      'Af uforklarlige årsager er man født med en særlig evne, man ikke rigtigt kan forklare hvordan man er stand til bruge men blot gør det. Denne fordel giver automatisk og gratis en værdi på 14 i en af DM tilfældig valgt "low-level" spell (termet "low-level" er her relativt til kampagnens lvl). Prisen på formularen kan betales i MP som normalt, men kan også splittes op og betales delvist i FAT og SAN, skulle man ønske det. Her er 1 SAN 3 MP værd og 1 FAT 4 MP værd (DM kan dog være sød og lade en 10 MP spell koste 3 SAN). Man kan ikke købe sig op i formularen - udover under meget særlige ingame-situationer - og man kan ikke lære andre den. Man kan godt booste formularen niveauer.',
  },
  {
    name: 'Sprogtalent',
    cost: -13,
    advantage: true,
    category: 'STANDARD',
    description: 'Alle sprog koster kun det halve.',
  },
  {
    name: 'Matematisk intelligens',
    cost: -13,
    advantage: true,
    category: 'STANDARD',
    description: 'Alle matematiske færdigheder koster kun det halve.',
  },
  {
    name: 'Rigdom',
    cost: -13,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren er rig, og tredobler sin mængde af startpenge. Har man en høj start-lvl og mange startpenge, kan DM sætte prisen lidt op på denne fordel. Kan kun erhverves hvis DM tillader det.',
  },
  {
    name: 'Jernhelbred',
    cost: -15,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren bliver aldrig syg, udover via magiske sygdomme eller poison damage, og får aldrig betændelse i sine sår. Karakteren får også 1d6 ekstra HP.',
  },
  {
    name: 'Reaktionsevne',
    cost: -15,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren reagerer med lynende hastighed og får +4 når han beregner hans reaktionstid og +1 når han beregner Ini.',
  },
  {
    name: 'Super cool',
    cost: -15,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren klarer automatisk alle almindelige MMM-tjeks og har 20 i effektiv MMM til at modstå magier eller andre særlige omstændigheder.',
  },
  {
    name: 'National helt',
    cost: '-10 til -15',
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren er meget populær i befolkningen og de vil hjælpe ham hvis de kan. Man har altid 15 i NPC-reaction i det område, hvor man er national helt. Denne fordel kan godt forsvinde, hvis ens handlinger ingame ødelægger forholdet til de, der ser en som helt. Prisen varierer alt efter landets størrelse og magt.',
  },
  {
    name: 'Svineheld',
    cost: -16,
    advantage: true,
    category: 'STANDARD',
    description: 'Karakteren er utrolig heldig. Alle hans heldpoint har dobbelt effekt.',
  },
  {
    name: 'Supersanser',
    cost: -17,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren får +2 i OB og kan se godt selv i dårlig (læs, næsten ingen) belysning. Får aldrig modifikationer til OB (medmindre det er pga. skader eller totalt buldermørke).',
  },
  {
    name: 'Hurtig healing',
    cost: -17,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren blødning stopper altid af sig selv efter 2d20 segmenter. Han healer dobbelt så hurtigt som normale mennesker.',
  },
  {
    name: 'No pain',
    cost: -20,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren bryder aldrig sammen under tortur og bliver næsten ikke forstyrret af sår og skader. Karakteren lider kun af chok halvt så længe som normalt og går generelt kun i chok ved særligt slemme criticals.',
  },
  {
    name: '6. Sans',
    cost: -20,
    advantage: true,
    category: 'STANDARD',
    description:
      'Karakteren har speciel fare-sans, der som regel kan mærke når der er fare på færde. Kan også bruges i særlige situationer til at finde fare, hvis man eksempelvis leder efter en skjult røverbande eller lignende eller til at se modstandere, der har skjult sig via magi.',
  },
  {
    name: 'Superegenskab',
    cost: -25,
    advantage: true,
    category: 'STANDARD',
    description:
      "Spillederen skal tilfældigt bestemme en egenskab, som karakteren får +5 til. Egenskaben bestemmes ved at rulle 1d12. Der rulles for egenskaben efter man har alt andet på plads end valg og køb af færdigheder. Fordele og ulemper der ikke længere giver realistisk mening for ens char efter rullet kan desuden ændres, hvis DM er sød, men statpoins er låst fast. Man kan IKKE rulle for Superegenskab selv eller uden DM's tilstedeværelse (jeg stoler på folk, men lad os lade være med at sætte os selv i situationer, hvor dette kan risikere at ændres). Evt kan en gruppe spillere også være vidner i stedet.",
  },
  {
    name: 'Bacon immunity',
    cost: -50,
    advantage: true,
    category: 'STANDARD',
    description:
      'Med denne fordel får man ikke længere minus XP af Toke, hvis man slår bacon tjek.',
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
