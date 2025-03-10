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
    category: advantageCategories.STANDARD,
    description: 'Karakteren får +5 til sin grundværdi i Forførelse og +1 til en bestemt Etikette.',
  },
  {
    name: 'Synsk',
    cost: -10,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er synsk og får undertiden drømme og syner om fremtiden. Husk at spørge DM om lov!',
  },
  {
    name: 'Lykkebringer',
    cost: -10,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en ting, som bringer ham held - f.eks. en mønt. Når karakteren har tingen på sig får han 50% flere heldpoint og +5 til heldtjeks. Hvis lykkebringeren bliver væk forsvinder effekten og må ikke bruge heldpoint.',
  },
  {
    name: 'Cool',
    cost: -10,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren får +5 til MMM tjeks.',
  },
  {
    name: 'Superior genetics',
    cost: -10,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har ikke noget maksimum på én (selvvalgt) stat, og kan derfor putte mere end de normale 10 i den valgte stat. Samtidig får man +1 til én anden (randomvalgt) stat.',
  },
  {
    name: 'Magi i blodet',
    cost: -11,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Du nedstammer fra en slægt af dygtige og kendte magikere, og lige siden du blev født, har det lagt i kortene at du selv skulle være magiker. Grundet din afstamning rummer din krop langt mere magisk potentiale end normalt, og dit talent indenfor magi er ikke at kimse af. Regelteknisk udregnes MP som MAG*5 i stedet for MAG*4, og du får +3 til en af DM tilfældigt valgt Common Spell. I magikerkredse er dit slægtnavn kendt på både godt og ondt.',
  },
  {
    name: 'Unfazeable',
    cost: -11,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Intet i verden overrasker dig. Allerede tidligt i din barndom fandt dine søskende ud af, at der ikke var meget sjovt i at springe frem og råbe bø! foran dig med en uhyggelig maske på, fordi du overhovedet ikke ville reagere på det…måske på nær et enkelt gab. Du er typen der, hvis du står i et brændende hus der er ved at falde sammen, vil lede i din rygsæk efter en skarp pind og nogle pølser. Lige meget hvor mærkelig et væsen du møder, skal du aldrig slå for at miste SAN, og trusler virker aldrig på dig. Husk på at dette ikke er som Supercool (selvom de to vil virke ganske godt sammen), så du får ikke plusser til MMM. Du kan fortsat blive bange, om end du blot skal rollespille det ala: ”Jamen dog, en helt horde orker kommer løbende mod mig. Jeg tror det mest fornuftige ville være at løbe den modsatte vej, bare sådan i god ro og orden!” Denne fordel gør automatisk karakteren en smule følelseskold og SKAL ROLLESPILLES HELE TIDEN. Hvis ikke vurderer DM, at man har mistet fordelen. Engelske butlere er fantastiske eksempler på hvordan denne fordel bør håndteres: ”Undskyld mig Sir, men et sært væsen med orange tentakler og en mere end rigelig andel øjne er ved at ødelægge vores ellers så nydelige hoveddør. Skal jeg vente lidt med at servere teen?”',
  },
  {
    name: 'Kondi',
    cost: -11,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en god kondi og kan derfor løbe 50% længere end normalt og får +1 til UDH og +1 til FAT. FAT mistes langsommere ved fysisk udfoldelse.',
  },
  {
    name: 'Talegaver',
    cost: -12,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får +4 til sin grundværdi i færdigheden overtale, +3 til sin grundværdi i etikette og +1 til forhandling.',
  },
  {
    name: 'Særlig evne',
    cost: -12,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Af uforklarlige årsager er man født med en særlig evne, man ikke rigtigt kan forklare hvordan man er stand til bruge men blot gør det. Denne fordel giver automatisk og gratis en værdi på 14 i en af DM tilfældig valgt "low-level" spell (termet "low-level" er her relativt til kampagnens lvl). Prisen på formularen kan betales i MP som normalt, men kan også splittes op og betales delvist i FAT og SAN, skulle man ønske det. Her er 1 SAN 3 MP værd og 1 FAT 4 MP værd (DM kan dog være sød og lade en 10 MP spell koste 3 SAN). Man kan ikke købe sig op i formularen - udover under meget særlige ingame-situationer - og man kan ikke lære andre den. Man kan godt booste formularen niveauer.',
  },
  {
    name: 'Sprogtalent',
    cost: -13,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Alle sprog koster kun det halve.',
  },
  {
    name: 'Matematisk intelligens',
    cost: -13,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Alle matematiske færdigheder koster kun det halve.',
  },
  {
    name: 'Rigdom',
    cost: -13,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er rig, og tredobler sin mængde af startpenge. Har man en høj start-lvl og mange startpenge, kan DM sætte prisen lidt op på denne fordel. Kan kun erhverves hvis DM tillader det.',
  },
  {
    name: 'Jernhelbred',
    cost: -15,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren bliver aldrig syg, udover via magiske sygdomme eller poison damage, og får aldrig betændelse i sine sår. Karakteren får også 1d6 ekstra HP.',
  },
  {
    name: 'Reaktionsevne',
    cost: -15,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren reagerer med lynende hastighed og får +4 når han beregner hans reaktionstid og +1 når han beregner Ini.',
  },
  {
    name: 'Super cool',
    cost: -15,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren klarer automatisk alle almindelige MMM-tjeks og har 20 i effektiv MMM til at modstå magier eller andre særlige omstændigheder.',
  },
  {
    name: 'National helt',
    cost: -13, // '-10 til -15',
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget populær i befolkningen og de vil hjælpe ham hvis de kan. Man har altid 15 i NPC-reaction i det område, hvor man er national helt. Denne fordel kan godt forsvinde, hvis ens handlinger ingame ødelægger forholdet til de, der ser en som helt. Prisen varierer alt efter landets størrelse og magt.',
  },
  {
    name: 'Svineheld',
    cost: -16,
    advantage: true,
    category: advantageCategories.STANDARD,
    description: 'Karakteren er utrolig heldig. Alle hans heldpoint har dobbelt effekt.',
  },
  {
    name: 'Supersanser',
    cost: -17,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får +2 i OB og kan se godt selv i dårlig (læs, næsten ingen) belysning. Får aldrig modifikationer til OB (medmindre det er pga. skader eller totalt buldermørke).',
  },
  {
    name: 'Hurtig healing',
    cost: -17,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren blødning stopper altid af sig selv efter 2d20 segmenter. Han healer dobbelt så hurtigt som normale mennesker.',
  },
  {
    name: 'No pain',
    cost: -20,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren bryder aldrig sammen under tortur og bliver næsten ikke forstyrret af sår og skader. Karakteren lider kun af chok halvt så længe som normalt og går generelt kun i chok ved særligt slemme criticals.',
  },
  {
    name: '6. Sans',
    cost: -20,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har speciel fare-sans, der som regel kan mærke når der er fare på færde. Kan også bruges i særlige situationer til at finde fare, hvis man eksempelvis leder efter en skjult røverbande eller lignende eller til at se modstandere, der har skjult sig via magi.',
  },
  {
    name: 'Superegenskab',
    cost: -25,
    advantage: true,
    category: advantageCategories.STANDARD,
    description:
      "Spillederen skal tilfældigt bestemme en egenskab, som karakteren får +5 til. Egenskaben bestemmes ved at rulle 1d12. Der rulles for egenskaben efter man har alt andet på plads end valg og køb af færdigheder. Fordele og ulemper der ikke længere giver realistisk mening for ens char efter rullet kan desuden ændres, hvis DM er sød, men statpoins er låst fast. Man kan IKKE rulle for Superegenskab selv eller uden DM's tilstedeværelse (jeg stoler på folk, men lad os lade være med at sætte os selv i situationer, hvor dette kan risikere at ændres). Evt kan en gruppe spillere også være vidner i stedet.",
  },
  {
    name: 'Bacon immunity',
    cost: -50,
    advantage: true,
    category: advantageCategories.STANDARD,
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

  // Disadvantages
  {
    name: 'Religiøs (etableret)',
    cost: 0,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er religiøs og tileder guddom(me) fra et etableret funtionelt pantheon, der rent faktisk kan give ingame bonusser. Denne ulempe giver ingen UP idet den i stedet giver adgang til Faith-points. Ulempen ligger selvfølgelig i, at man skal ensrette sin karakter til en hvis grad efter den valgte trosretning, og bede hyppigt til den (eller de) valgte guddom(me). Før man direkte vil kæmpe for sin religion, er andre ulemper nødvendige (Pligtopfyldende eller Fanatisme kan gå fint i spænd). Visse religioner kræver, at man vælger ulempen Æreskodex. Ulempen åbner desuden op for muligheden for både at blive belønnet men også skadet direkte af guddomme. Alle præstetyper SKAL have denne ulempe.',
  },
  {
    name: 'Religiøs (nonsens)',
    cost: 2, // varierende
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er religiøs men tilbeder en ikke-eksisterende guddom eller spirituel kraft, og derfor er der ikke nogen Faith-points eller blessings at få. Ens bønner har absolut ingen som helst regelteknisk effekt. Denne ulempe giver enten rabat på fordelen Organisation (såfremt ens trosretning er organiseret) eller et par UP bestemt af, hvad det kræver for en at udføre ens trosretnings "ritualer".',
  },
  {
    name: 'Inkompetent',
    cost: 1,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Af uforklarlige årsager er der en eller flere ting man bare er komplet umulig til. For hver gang man tager denne ulempe (den tager kun én ulempes plads lige meget hvad), vælger DM tilfældigt en færdighed, man er uduelig til. Denne færdighed kan man ikke få pr default, og det koster det dobbelte i UP-pris og indlæringstid at købe sig op i den. Det kan IKKE være skole-relevante færdigheder.',
  },
  {
    name: 'Dårlig vane',
    cost: 2, // og opefter
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en dårlig vane, der er til gene for sine omgivelser. Egentligt en quirk men fordi dårlige vaner kan variere meget i intensitet og alvorlighed, kan dette også være en ulempe givende væsentligt mere end blot 2 UP.',
  },
  {
    name: 'Glemsom',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en elendig hukommelse og skal derfor klare et INT tjek hver gang han skal huske et navn, sted, tidspunkt, tal eller lignende, som ikke er meget familiære eller kendte for ham.',
  },
  {
    name: 'Pralende',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description: 'Karakterens pralen er irriterende. Kan egentligt også fungere som quirk.',
  },
  {
    name: 'Sexistisk',
    cost: 2, // +2 / +5
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en ide om, at et af de to køn er det klart stærkeste i stort set alle kontekster. Er din karakter mand, giver denne ulempe kun 2 UP, siden Tågedalens lande typisk favoriserer mænd i forvejen. Er du kvinde (Ultra feminist) derimod får du 5 UP, fordi det blot forøger det sociale stigma det til tider kan være, at være et hunkønsvæsen i Tågedalen.',
  },
  {
    name: 'Amnosmia',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har meget svært ved at registrere lugte, og får -5 til OB når lugtesansen er den primære. Kan give problemer ift at undgå gift, men kan også i nogle situationer være en fordel (eksempelvis hvis man er tæt på Wardar).',
  },
  {
    name: 'Hader Fortsdag',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er specielt uheldig om Fortsdag(mandag), primært grundet en syg spøg fra (U)Heldets Engel og må ikke bruge heldpoint denne dag. Kan ikke tages af Fortiel-præster.',
  },
  {
    name: 'Humorløs',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren kan ikke forstå jokes, smiler aldrig og bidrager aldrig useriøst (morsomt) til en samtale. Får -1 til NPC-reactions, hvis folk opdager det. Ulempen skal selvfølgelig rollespilles.',
  },
  {
    name: 'Buttet',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en bette vom. Dette bevirker at personen mister flere FAT, når der skal gås langt og får -1 til HUR-tjeks, når der rulles om hvem der kommer først til noget.',
  },
  {
    name: 'Laktoseintolerant',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren kan ikke optage mælkesukker i tarmsystemet grundet mangel på enyzmet laktase, hvilket medfører at indtaget mælkesukker vil gære i tarmen og forårsage mavesmerter, diaré og oppustethed. Når karakteren drikker mælk, vil det altid medfører mavesmerter og diaré på kort sigt. Karakteren skal også passe på med mælkeprodukter, og mens eksempelvis ost kan spises i begrænsede mængder uden de store problemer, kan man ikke bare tankeløst guffe løs af mælkeprodukter.',
  },
  {
    name: 'Farveblind',
    cost: 2,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er farveblind og kan ikke skelne ml. fx grøn og rød. Karakteren får -2 til OB tjeks i omgivelser med mange afvekslende farver.',
  },
  {
    name: 'Konfliktsky',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du bryder dig ikke om, når folk råber af hinanden (eller endnu værre, når de råber af dig), du vil helst ikke diskutere og du ønsker i det hele taget bare at alle ville være venner. Du får -1 til Overtalelse.',
  },
  {
    name: 'Gal debatør',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har det lige omvendt end den konfliktsky person beskrevet overfor. Du elsker en god, lang og hed debat og vil strate disse så ofte som muligt, ofte også bare for at få lidt rav i gaden. Du skal købe dig op på mindst 10 i Overtalelse.',
  },
  {
    name: 'Dårligt syn',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får -3 til OB mht. til syn, hvis han tager sine briller af. Kan give op til dobbelt antal UP hvis man lever i en tid eller et sted, hvor briller ikke findes.',
  },
  {
    name: 'Homoseksuel',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren holder af sit eget køn, hvilket godt kan give problemer i flere situationer; i Tågedalen er homoseksualitet de fleste steder ikke noget, man ser på med venlige øjne, selv blandt troende i Semillions Kirke hvor kun Patronuel godkender homoseksualitet. I visse områder hersker "Uganda-love", hvor man kan fængsles eller få bødestraf og i andre mere sjældne steder har de iranske tilstande, hvor døden er den eneste rigtige straf for den "sygdom", de mener homoseksualitet er. Alt afhængig af hvilket område ens char kommer fra, kan UP-prisen ændres en smule.',
  },
  {
    name: 'Nattemenneske',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Virker altid meget uoplagt om dagen, og er altid langt friskere om natten. Alle rejser eller andre ting, der kan klassificeres som hårdt fysisk arbejde tærer flere FAT end normalt, når de udføres om dagen.',
  },
  {
    name: 'Nyctalopia',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du ser abnormt dårligt i mørke eller meget svag belysning og fungerer i sådanne situationer som blind. Du kan aldrig lære spells eller få fordele, der giver dig dark vision eller lignende.',
  },
  {
    name: 'Uskadelig paraphilia',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du bliver ekstremt seksuelt opstemt af en bestemt ting (og har svært ved at blive seksuelt opstemt uden), hvilket bevirker at andre ser dig som en seksuel afviger og lidt af en freak. Denne ulempe dækker IKKE over paraphilias potentielt farlige eller skadelige for en selv (såsom masochisme eller vouyisme) eller seksuelle afvigelser der er skadelige for andre, ulovlige og ekstremt socialt uaccepterede (såsom pædofili eller biastophilia). Alle disse er individuelle ulemper, der giver langt flere UP. Eksempler som denne ulempe dækker over er gerontofili (ældre), Menofili (menstruationsblod), Lactofili (modersmælk) eller dendrofili (træer).',
  },
  {
    name: 'Primitiv',
    cost: 3, // og opefter
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren kommer fra et mere lavtstående samfund end det gængse. Regelteknisk gives der 3 UP for hver tech-level man er under kampagneverdenens tidsmæssige gennemsnit.',
  },
  {
    name: 'Melanic',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har for meget pigment, hvilket forårsager at hans hud er meget mørk, håret er helt sort. Dog har man et lidt svagere immunsystem grundet manglende vitaminer fra solen.',
  },
  {
    name: 'Albino',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren mangler pigment, hvilket forårsager at han hud er meget bleg, håret er helt lyst og hans øjne er røde. Albinoer er ret sjældne og vækker meget opsigt. De har også problemer med sollys. En meget sjælden ulempe.',
  },
  {
    name: 'Selvsikker',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er overdrevet selvsikker og mener aldrig han tager fejl. Han nægter at acceptere et nederlag.',
  },
  {
    name: 'Stædig',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description: 'Karakteren er meget stædig og nægter konsekvent at ændre sin mening.',
  },
  {
    name: 'Frygter døden',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du frygter at dø mere end gennemsnittet. Meget naturligt falder din MMM i takt med dine HP. Er du under halvdelen af dine HP får du -1 til MMM, og er du under 10 får du -2. Er du i en situation der kan være en potentiel livsfare og alene får du også -2. Du kan aldrig med overlæg ofre dit liv for en anden.',
  },
  {
    name: 'Dyr hobby',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Den færdighed du har brugt dine hobby-UP på kræver månedligt en ikke ubetydelig del af din indkomst. Alternativt kan du også bare have en hang til en dyr alkoholisk drink, som du er nødt til at købe fra tid til anden...eller lignende...',
  },
  {
    name: 'Tidskrævende hobby',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Den færdighed du har brugt dine hobby-UP på kræver en del af din tid dagligt (det kunne f.eks. være at være DM og udvikler af Tågedalen!). Denne ulempe kan kombineres med ovenfor stående til én ulempe.',
  },
  {
    name: 'Grådighed',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget grisk og relativt egoistisk. Han varetager egne interesser og gør ikke mange ting uden betaling. En af hans primære motivationsfaktorer er at få fat i nogle værdigenstande.',
  },
  {
    name: 'Pligtopfyldende',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren lider af den grusomme (og i virkelighedens verden meget sjældne) ulempe, at han er pligtopfyldende. Karakteren skal altid gøre hvad der forventes af ham, og han vil altid tage sin tørn.',
  },
  {
    name: 'Romantiker',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en romantisk sjæl og lever sig altid ind i en romantisk fantasiverden. Giver ikke direkte nogle regeltekniske ulemper men kan være ret irriterende og til tider svær at spille.',
  },
  {
    name: 'Ædedolk',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren holder ekstra meget af bordets glæder. Vil ikke tage til takke med føde- og drikkevarere af lavere standard (kan blive lidt dyrt i længden), og spiser ofte mere end nødvendigt er.',
  },
  {
    name: 'Forgældet',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description: 'Karakteren skylder en masse penge væk.',
  },
  {
    name: 'Intolerance',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er generelt intolerant over for alt, som ikke er normalt efter hans målestok.',
  },
  {
    name: 'Misbrug af lette rusmidler',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er afhængig af alkohol, rygning eller et let rusmiddel som f.eks. hash eller nervemedicin. (se rusmiddel-tabel )',
  },
  {
    name: 'Impulsiv',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren kaster sig tit ud i uovervejede handlinger og situationer. Hvis en oplagt lejlighed byder sig, skal han klare et PSI tjek for ikke at gøre noget overilet.',
  },
  {
    name: 'Naiv',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er et godt menneske der altid tror på sine medmennesker. En ulempe mange små 16-årige piger besidder. Karakteren får -5 til PSI når han skal modstå Overtalelse og eventuelt også minusser til at modstå visse Skuespils-tjek.',
  },
  {
    name: 'Mindreværdskompleks',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Vedkommende føler sig dårlig og mindreværdig over for en person, eller inde for et specielt område - f.eks. det seksuelle.',
  },
  {
    name: 'Social Stigma',
    cost: 3, // (Se effekt)
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      "Karakteren lider under at være af en 'lavere' social klasse end den gængse i samfundet. Ofte bør kvindelige chars overveje denne ulempe, hvis de er mennesker. Prisen varierer = Andenklasses-borger: eks. kvinder i det forrige århundrede, -1 til NPC-reactions samt dårligere løn (3 UP). Lav-interlekt = eks. kvinder i middelalderen eller i Japan, - folk ser automatisk en som dum, grænser for hvilket job man kan få (6 UP). Minoritetsgruppe: eks. sigøjnere, jøder etc. -3 til NPC-reaction for alle andre end din egen gruppe, folk er ofte intolerante (8 UP). Fredløs, forbryder, særlige minoritetsgrupper: eks. indianere, gotere i Romerriget, negerslaver i USA 1800-tallet, -4 til NPC-reaction for alle andre end din egen gruppe, folk meget intolerante (ofte voldelige), du kan kun få dårlige og dermed lavtlønende jobs (12 UP).",
  },
  {
    name: 'Imaginary Advantage',
    cost: 3, // Varierer
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du tror, du har en fordel, som du ikke har, og skal spille efter det. Måske tror du, at du kan navigere, men i virkeligheden farer du konstant vild. Eller du tror du er modig, men opdager altid i sidste øjeblik, at du ikke er. Igen, UP varierer alt efter den fordel, man vælger at tro, man har.',
  },
  {
    name: 'Blasfemisk mærket',
    cost: 3, // Varierer
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har et eller andet der bevirker, at alle troende af en bestemt religion hader dig som pesten, og at guderne fra den religion gør alt for at gøre dit liv surt. Jo stærkere religion, jo flere UP.',
  },
  {
    name: 'Eunuk',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren (skal være af mandligt køn) har af en eller anden årsag mistet sin manddom, eller i hvert fald fungerer den ikke. Man kan ikke formere sig på nogen måde, og samtidig er man hverken interesseret i at forføre, eller blive forført. Nogen ser ned på eunuker.',
  },
  {
    name: 'Vejrhumør',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Dit humør hænger nøje sammen med vejret. Når det regner og/eller blæser voldsomt, bliver du automatisk i et dårligere humør, hvorimod du har lettere ved at være glad og energirig, når solen skinner fra en skyfri himmel.',
  },
  {
    name: 'Dårlige tænder',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du får lettere huller i tænderne og tandpine. Er især et problem i Tågedalen for ældre karakterer, hvor tænderne begynder at knække eller falde ud.',
  },
  {
    name: 'Stendhalsyndromet',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'En neurotisk lidelse, der ofte giver sig til udtryk ved forøget hjertebanken, svimmelhed, forvirring og til tider endda hallucinationer. Fænomenet opstår ofte når en person oplever kunst, specielt kunst der betager personen, eller store mængder af kunst på et lille område.',
  },
  {
    name: 'Tourettes',
    cost: 3, // og opefter
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren lider af tourettes, og skal vælge sit et "tick", samt hyppigheden af hvor tit det forekommer. UP gives alt afhængig af valget, men blinken med øjet konstant når man bliver stresset eller voldsom råben hver gang man bliver bange giver 3 UP...mens at sige assrapingdonkeyfucker i hver sætning giver meget mere.',
  },
  {
    name: 'Nedgroede negle',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du får ret let nedgroede negle, og dette smerter til tider så meget at MiB og antal km du kan rejse per dag nedsættes.',
  },
  {
    name: 'Nervøs blære',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en tendens til at skulle tisse ofte, når vedkommende bliver sat under press. Samtidig skal vedkommende lade vandet mindst én gang for hver øl vedkommende drikker.',
  },
  {
    name: 'Elending afstandsbedømmelse',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har meget svært ved at på øjemål bedømme hvor langt der er mellem to punkter og dermed også hvor lang en genstand er. Kan give problemer ved en række håndværker-færdigheder, når man skal købe ting til huset eller når man vil benytte sig af skyde- og kastevåben. Kan IKKE tages af karakterer med over 10 i OB.',
  },
  {
    name: 'Uren hud',
    cost: 3,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er hårdt plaget af uren hud, der manifisterer sig som bumser, kraftige røde områder, irriterede steder på huden eller sågar små sår. Ofte følger kløen med som irritationsmoment. Der gives ofte negative modifikationer til alle UDS-baserede færdigheder, herunder NPC-reactions. Cremer og hyppig hudpleje kan afhjælpe problemet.',
  },
  {
    name: 'Ærlig',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har ikke nødvendigvis en god moral, men har et meget fast princip på aldrig at lyve. Hvis karakteren alligevel forsøger at lyve, bliver det ofte opdaget, hvilket regelteknisk kommer til udtryk via plusser til modpartens INT eller PSI.',
  },
  {
    name: 'Migræne',
    cost: 3, // fra +3 til +10
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'UP-gevinst baseret på hvor voldsomme og hvor hyppige anfald man får. En irriterende hovedpine to gange om måneden der gør en i dårlig humør og giver negative modifikationer til et par relevante skills giver +3 mens smertefulde, ugentlige anfald med kraftige negative modifikationer til rigtigt mange tjeks til en grad hvor man egentligt bør forblive sengeliggende giver +10.',
  },
  {
    name: 'Let at læse',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Dette er IKKE det samme som at man siger sandheden altid, bare at man er virkelig dårlig til at lyve, fordi ens kropssprog er så let at læse. Skuespil og lignende færdigheder gives -2 generelt og yderligere -2 i relation til at lyve eller skjule sine intentioner. I alle Spil hvor man skal bluffe kan gives mellem -3 og -10 (afhængig af hvor vigtig bluffelementet er). Alle der står overfor dig, som ikke selv er dårlige til at læse folk, kan rulle PSI for at gennemskue dig og dine følelser og intentioner som havde de fordelen Empati.',
  },
  {
    name: 'Doven',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er luddoven og vil helst lave så lidt som muligt. Karakteren må aldrig udføre en fysisk aktivitet som ikke er aldeles nødvendig. Kan forlænge studietid for især fysiske færdigheder en smule og kan formindske ens jobmuligheder.',
  },
  {
    name: 'Larmende',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du trækker vejret tungt, går tungt, taler generelt meget højt og ofte - kort sagt, så larmer du hele tiden. Det giver modifikationer til Liste og Gemme (eller, mere præcist plusser til fjendens OB, hvis de kan høre en). Derudover kan det gøre dig ret irriterende i længden.',
  },
  {
    name: 'Genert',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget genert og sky og holder sig altid i baggrunden. Karakteren får -1 til sin grundværdi i Etikette, Overtalelse, Forførelse, Skuespil og Lederevne.',
  },
  {
    name: 'Forfjamsket overfor det modsatte køn',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er ikke nødvendigvis genert men forstår sig bare overhovedet ikke på det modsatte køn. Karakteren får -1 til sin grundværdi i NPC-reaction, Etikette og Lederevne overfor folk af modsat køn af samme race (eller en race, der minder meget om en (elvere og mennesker). Derudover får man -2 til Forførelse. Der gives +4 for mandlige karakterer men +5 for kvindelige (der er bare typisk flere mænd i vigtige positioner og dermed er det en lidt større ulempe at være forfjamsket overfor disse). I en særlig sexistisk (læs, realistisk middelalder) setting kan man sågar give +3 til mandlige karakterer og +6 til kvindelige.',
  },
  {
    name: 'Dårlig hørelse',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren får -3 til OB mht. til hørelse. Karakteren skal spilles en smule tunghør og sige "hva?" ofte.',
  },
  {
    name: 'Stammer',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren stammer, hvilket giver ham -2 til grundværdien i Forførelse og Overtalelse og -1 til visse tjeks i Etikette. Samtidig kan det være rigtigt irriterende at rollespille og at høre på (bare spørg Jens).',
  },
  {
    name: 'Ekstrem off-handed',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Man er meget dårligere til at udføre handlinger med ens sekundære hånd end normalt. Man får -5 til AR med sin off-hand i stedet for de normale -3, får ingen bonusser af at kæmpe med et våben i hvert hånd og kan aldrig købe evner indenfor two-weapon fighting (se Kampregler).',
  },
  {
    name: 'Racist',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er overbevist racist og afskyr alle, der ikke er som ham selv. I Tågedalen hvor der findes en lang række forskellige intelligente racer anderledes end mennesker, er man ikke som menneske racist overfor mennesker med anden hudfarve men overfor disse andre racer. Hvis man er en sjælden race, såsom alf, giver denne ulempe selvfølgelig flere UP: Elvere og dværge får 5 UP, darogarer 6 UP og uroxer og alfer 7 UP.',
  },
  {
    name: 'Tvangsspendering',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du elsker at bruge penge, og det er komplet umuligt for dig at holde på dem i længere tid af gangen. Kan købes i forskellige grader. Mild grad: Din leveomkostninger stiger med 10%, og du får -2 til forhandling. Du kan aldrig bare gå forbi et stort marked, men behøver ikke nødvendigvis at købe noget der (PSI-tjeks vil ofte hjælpe en). Giver 4 UP. Middelmådig grad: Dine leveomkostninger stiger med 30-40%, og du får -5 til forhandling. Hver eneste gang du går forbi en butik eller et marked skal du klare et PSI-tjek, for IKKE at købe et eller andet. Giver 9 UP. Ekstrem grad: Dine leveomkostninger stiger med 60-70%,, du kan aldrig få færdigheden Forhandle og skal dagligt klare PSI-tjeks for ikke at bruge alle kontanter du har på dig på diverse ting. Giver 13 UP. Husk på, at du stadig selv har kontrol over hvad du køber…eller i hvert fald et stykke hen af vejen.',
  },
  {
    name: 'Sover let',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren sover meget let, hvilket udover at være en ulempe også har den fordel, at det er sværere at snige sig ind på vedkommende mens personen sover, end for andre individer. Dog kan der i situationer hvor man sover tæt sammen med andre eller udenfor med en masse dyrelyde omkring sig kræves, at man slår over OB-tjeks for at kunne falde i søvn. Sover man et farligt sted, eksempelvis med mange vilde dyr i nærheden man kan høre, skal man også slå under MMM. Sover man sammen med en person med quirken Snorker Højt, skal rulles et PSI-tjek med modifikationer.',
  },
  {
    name: 'Family Man',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'En lidt mildere version af ulempen Ansvar, hvor du har efterladt en familie et eller andet sted, da du drog ud på eventyr. Du er ingame tvunget til at sende midler og breve til denne familie løbende, og samtidig er du nødsaget til at besøge dem en gang imellem. Det ligger i kortene, at din eventyr-karriere er midlertidigt, da du og din samlever jo skal "blive gamle sammen" og alt det halløj.',
  },
  {
    name: 'Storhedsvanvid',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har storhedsvanvid og har meget overdrevne forestillinger om sine egne færdigheder.',
  },
  {
    name: 'Moralsk',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren plages af god, humanistisk, borgerlig moral dvs. at han ikke så gerne lyver eller snyder andre. Denne ulempe giver +2 til Morale.',
  },
  {
    name: 'Voyeurism',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Hver gang du har en mistanke om, at der er nogle i nærheden der er nøgne eller ved at lave noget frækt, skal du slå PSI med -3 for ikke at lure. Dette kan ofte bevirke, at man går på jagt efter steder at lure, når man er i storbyer. Seksuelt har du desuden ret svært ved at komme, hvis du aktivt skal deltage i en akt ift blot at kigge på. Det siger sig selv, at man bliver meget upopulær, hvis man opdages i at lure.',
  },
  {
    name: 'Skrupelløs',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er skrupelløs, og kan bl.a. godt forråde uden moralske skrupler. Giver -2 til ens Morale.',
  },
  {
    name: 'Sovetryne',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren skal (så vidt muligt) sove 50% længere end normale mennesker. En time eller to ekstra på øjet kan gøre det i krævende situationer, men får man ikke nok søvn (efter ens egen standard) vil man med tiden miste mere FAT end normalt og ofte begynde at brokke sig højlydt.',
  },
  {
    name: 'Kræsen',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du spiser ikke hvad som helst. Faktisk er der flere retter du ikke spiser, end retter du gerne vil spise. På eventyr hvor man ofte æder det samme junk dag efter dag kan det være svært for dig at få stillet sulten. Derudover bliver din generelle leveomkostninger pr måned hævet med nogle procentpoints.',
  },
  {
    name: 'Langsom læring',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren lærer langsomt. Det betyder ikke, at tingene sidder dårligere fast men blot, at det ikke må gå for hurtigt, når noget nyt skal indstuderes. Regelteknisk forøges studietid for færdigheder en smule, hvilket også kan have konsekvenser for studie-UP. Hvis ens char er meget ung, kan det desuden sætte klare begrænsninger for ens maksimum-værdi i UDA.',
  },
  {
    name: 'Fummelfod',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Giver -4 til HUR når MiB udregnes, -2 til alle HUR-tjeks relateret til at løbe samt -2 til grundværdien i Løb. Bevirker samtidig at man også fumler på 19ere i alle tjeks relateret til at bevæge sig frem (HUR, Løb, Spring, Akrobatik, visse SMI).',
  },
  {
    name: 'Ydmyg',
    cost: 4,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har en tendens til ikke at fortælle direkte, hvis du har en brugbar skill, fordi andre sikkert er bedre til det end dig. Du opfatter de fleste af dine skills som værende lavere end de egentligt er, især hvis andre i partyet også har dem. Du skal spille din karakter meget ydmyg og underdanig.',
  },
  {
    name: 'Skyldfølelse',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du påtager dig meget hurtigt automatisk skylden for ting der går galt omkring dig, især vedrørende folk du godt kan lide, også selvom det er kompet urealistisk at tro at det på nogen måde var din skyld. Kan lede til depression.',
  },
  {
    name: 'Svimmelhed',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Fra tid til anden bliver karakteren svimmel, selv uden nogen egentlig grund. Samtidig bliver man altid meget svimmel, på grænsen til at besvimme, når man kommer op i højderne. Man får -3 til Klatre og kan aldrig lære at flyve eller lignende. Ofte følger fobien højdeskræk med som en matchende ulempe.',
  },
  {
    name: 'Skæbneramt',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description: 'Skæbnen har noget skidt i skuffen for karakteren. Se Skæbnen for detaljerne.',
  },
  {
    name: 'Søvngænger',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren går fra tid til anden i søvne. Dette sker især når vedkommende har urolige drømme og PSI styrer, om det sker og hvis ja, hvor alvorligt. Hvor ofte man går i søvne og hvor mange handlinger man kan udføre mens man går i søvne bestemmer hvor mange UP, ulempen giver. De +5 er for en søvngænger-risiko en eller to gange om ugen, hvor man kan bevæge sig rundt og åbne døre, men ikke direkte kan bringe sig selv i livsfare eller eksempelvis direkte angribe folk. De +11 er for folk der lider af en søvngængersyge a la sexomni (hvor man kan voldtage i søvne uden at opdage det).',
  },
  {
    name: 'Irritated Bowel Syndrome (IBS)',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'IBS kan være super irriterende og kan føre til hyppge tarmsmerter, oppustet mave og enten diarré eller forstoppelse (afhængig af typen af IBS). IBS er indirekte kædet sammen med mental velvære, hvor mange IBS-ramte lider af depressioner, men er en reel fysisk sygdom. IBS-patienters tarm reagerer anderledes i mødet med enkelte tungt fordøjelige kulhydrater, og får mere væske i tyndtarmene, muligvis fordi tyndtarmen ikke formår at tømme sig godt videre over i tyktarmen. Dette kan være koblet til serotonin og evt forklare det føromtalte bindeled mellem mental velvære og IBS. Alle menneskers tarmflora opfører sig forskelligt ud fra ens humør, graden af stress, etc., og for IBS-ramte er denne forbindelse endnu mere markant. Graden af IBS kan variere meget (og ligeså kan de UP man får for ulempen): Der berettes om IBS-ramte, der ikke kan have et fast arbejde pga meget hyppige mavesmerter og dage med kraftig diarè. Ligeledes kan det også bare være en gene, hvor man har problemer med at komme af med sin afføring (hvilket kan afhjælpes med afføringsmiddel), eller ofte skal på toilet (hvilket kan afhjælpes ved ikke at bringe sig selv i situationer, hvor man ikke let kan finde et sådant, og acceptere, at man skal rende frem og tilbage fra en 6 timers Wagner-opera). Grundet den mentale kobling kan IBS medføre SAN-tab (og omvendt).',
  },
  {
    name: 'Distræt',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget distræt og har svært ved at samle tankerne om en ting. Karakteren får -1 til sin grundværdi i Overtalelse, Etikette, Navigation, Skuespil og Forførelse. Samtidig tager det 1-3 segmenter mere at finde ting i ens sæk eller på ens krop (også til tider selv hvis de sidder i et potionbælte). Man skal huske at spille sin char lettere forvirret og glemsom.',
  },
  {
    name: 'Ulækker',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget vammel og ulækker (og skal spilles sådan!). -3 til grundværdien i Etikette og til NPC-reaction og -8 til grundværdien i Forførelse.',
  },
  {
    name: 'Tvangsfester',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du kan simpelthen aldrig styre din trang til at FESTE! Alle lokale kroværter kender dit navn (og en del af dem bryder sig ikke om det). Dette er ikke alkoholisme, idet du ikke nødvendigvis har brug for at drikke (selvom du ofte gør det), men bare ikke kan sige nej til enhver form for social aktivitet. Hver eneste dag SKAL du lede efter et sted at fyre den af, du forlader altid beværtninger der er tilnærmelsesvis tomme med det samme, hver gang du ser en fest eller et andet større socialt arrangement skal du klare et PSI-tjek for ikke at crashe festen og selv i situationer hvor det ikke er passende, forsøger du at live stemningen op ved larmende bemærkninger, spontan dansen og lignende. Denne ulempe kan både give plusser og minusser til NPC-reaction.',
  },
  {
    name: 'Få venner',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Man har ikke rigtigt noget behov for at have venner, og er i det hele taget også dårlig til at holde på dem. Denne ulempe bevirker, at man får to kontakter mindre, end man er berettiget til og har sværere ved at få nye kontakter ingame.',
  },
  {
    name: 'Orienteringsløs',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Din evne til at finde rundt alle andre steder end de områder, der er totalt familiære er stort set ikke eksisterende. Du kan aldring finde verdenshjørnerne, og bare du drejer tre gange rundt om dig selv, er du faret vild. Du kan aldrig få Navigation, du kan kun få Områdekendskab de steder du har opholdt dig meget længe og bevæger du dig rundt på egen hånd, skal INT altid rulles - også selv hvis du bare skal ud og købe mælk nede om hjørnet. DM har denne ulempe og er glad for at have erhvervet sig en smartphone med GPS (det kan man dog ikke i Tågedalen).',
  },
  {
    name: 'Ekshibitionist',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en sygelig tendens til hele tiden at ville vise sin nøgne krop frem foran alt og alle. Kan give mange negative modifikationer til NPC-reaction og i visse lande sikre en nat eller to i spjældet for blufærdighedskrænkelse (eller bare en god gang bank fra vrede borgere). Da det mest er mænd man finder på krostuer og lignende i Tågedalen, vil reaktioner mod mandlige blottere ofte være voldelige, mens reaktioner mod kvindelige blottere ofte vil være seksuelle (og derigennem eventuelt voldelige).',
  },
  {
    name: 'Analfabet',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er fuldkommen analfabet og kan hverken læse eller skrive. Karakteren er heller ikke nogen knag til matematik. Karakteren kan ikke lære at læse og skrive, og kan ikke have en UDA over 6. Læg mærke til at nogle krigerskoler får denne ulempe uden at få UP for den (såsom Barbar). Man kan aldrig spille præst eller magiker med denne ulempe.',
  },
  {
    name: 'Høj, skinger stemme',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Man taler med en høj og skinger stemme, der for alle der lytter er som at få tvunget en roterende savklinge i øregangen. Udover at man skal rollespille dette, hvilket kan blive ret irriterende i længden, kan der gives alt fra -1 til -3 til NPC-reaction og visse tjek (som Forhandling og Overtalelse) i situationer, hvor man skal tale meget',
  },
  {
    name: 'Forelskelse',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er dybt forelsket i en anden person. Overfor denne person er karakteren til tider som en viljeløs slave, der adlyder personens mindste vink (medmindre disse er direkte tåbelige eller livsfarlige). Hvis målet for forelsket dør, vil karakteren bryde totalt sammen for en stund, resulterende i en række SAN-tab. Forelskelse kan gives en uden UP-gevinst ingame, hvis man forføres af en anden med en meget god succes.',
  },
  {
    name: 'Misanthrope',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du afskyr din egen race, hvilket - udover at nedsætte dit eget selvværd - bevirker at du foretrækker at være sammen med andre væsner. Kan ikke tages hvis din race er meget sjælden (da det så er ret begrænset, hvor meget det er en ulempe). Skal derfor typisk tages af mennesker, elvere eller dværge.',
  },
  {
    name: 'Dobbeltgænger',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Tilfældighedernes spil vil at karakteren og en kendt og magtfuld person ligner hinanden som to dråber vand. Karakteren bliver ofte på ubehagelig vis forvekslet med sin dublet. Dette bør i realiteten være en sjælden ulempe, så tjek lige at ikke andre i partyet har den!',
  },
  {
    name: 'Dårlig personlig egenskab',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en dårlig egenskab, der gør ham træls og ubehagelig. Det kan fx være nærighed, arrogance, barnagtighed, løgnagtighed, uvenlighed etc. Karakteren får -1 til Etikette og mister en kontakt.',
  },
  {
    name: 'Kasanova',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Vedkommende er en skørtejæger, der ikke kan se en person af det modsatte køn uden at forsøge på en erobring. Praler ofte over sine bedrifter og er forfængelig.',
  },
  {
    name: 'Sadist',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en skrue løs, og nyder derfor at tildele andre smerte. Meget udbredt hos russere og arabere i amerikanske actionfilm.',
  },
  {
    name: 'Forstyrrende spisevaner',
    cost: 9, //'3 til 12',
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakterens livret som han aktivt skal forsøge at finde og spise er noget mærkeligt noget der enten er farligt at indtage i store mænger, meget dyrt eller et taboo (eller det hele på en gang). Denne ulempe varierer meget i UP-gain og det er op til DM at bestemme, hvor meget der gives. Der gives 3 UP hvis der er tale om en eller anden meget dyr madvare, der vil dræne lidt på ens pengekasse mens der gives 12 UP, hvis man er kannibal (såfremt det er et taboo, hvilket det meget ofte er). VIGTIG NOTE: I en eventuel kampagne hvor karaktererne er "onde" og hvor mord og kannibalisme ikke ses ned på, er DM i sin gode ret til at reducere UP-gain så meget han finder nødvendigt. YDERLIGERE VIGTIG NOTE: UP der gives for forstyrrende spisevaner kan ændres afh af ens race (en animorph-bæver der spiser bark er ikke mærkelig, fordi den spiser bark - men fordi det er en menneskelig bæver).',
  },
  {
    name: 'Stemmer',
    cost: 10, // '5/10/15',
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du hører stemmer i dit hoved, der kan komme af forskellige årsager. I langt de fleste tilfælde er det dog bare dig, der er psykisk syg. Hver dag rulles 3d6 og på 6 eller mindre høres disse stemmer. Hvis man er stresset eller er i en situation, hvor det virker naturligt at høre stemmer, kan kravet sættes op til 8. PSI kan også bruges i stedet.\n\nTrælse stemmer (+5): Disse stemmer er blot irriterende og dumme. Du er ret sikker på, at de ikke er virkelige og bare dig selv, der er lidt underlig. Kan give dig tab af SAN samt -2 til NPC-reactions i visse situationer. Nogle gange kan de gøre det svært for dig at sove. Giver 5 UP.\nSkræmmende stemmer (+10): Disse stemmer kan drukne al anden lyd omkring dig, og du skal slå PSI-tjeks for ikke at lytte til dem eller for ikke at tro, at de er virkelige. De vil sjældent bede dig om noget alt for grusomt, men kan være bevirkende til mange uheldige episoder og selvfølgelig SAN-tab. Giver 10 UP.\nDiabolske stemmer (+15): Dette er hvad seriemordere og lignende galninge ofte lider af. Uhyggelige stemmer vil forsøge at tvinge en til drab og lignende forfærdelige ting. Som altid kan PSI bruges til at modvirke det. Giver 15 UP.',
  },
  {
    name: 'Skrøbelige organer',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du skal lægge 1 til alle rul for permanente skader og samtidig heler organskader fra Permanent skade 25% langsommere end normalt.',
  },
  {
    name: 'Hyperhidrose',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du sveder hele tiden og meget voldsomt, hvilket nedsætter de fleste sociale færdigheder med nogle stykker alt afhængig af temperaturen og nervøsitet, mens du også tit må døjes med eksem de mest svedige steder på kroppen.',
  },
  {
    name: 'Dårlig ryg',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en dårlig ryg, der generer vedkommende fra tid til anden. Ens bæreevne nedsættes med 10% og i ny og næ kan DM give en negative modifikationer til diverse fysiske tjeks, hovedsageligt STR når der skal løftes noget. En ulempe DM selv lider under i perioder.',
  },
  {
    name: 'Kan ikke klare pres',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har voldsom præsentationsangst og kan slet ikke klare at et stort ansvar placeres på dine færdigheder. Hvis du skal rulle et tjek der er den direkte årsag til om noget fungerer eller ej, får du -3 til tjekket, hvis du ikke klarer et PSI-tjek og håndterer presset. Hvis nogle kigger på dig samtidig får du -3 til PSI-tjekket hvis det er venner, -7 hvis de ikke er og -5 hvis det er en blandet flok. Et forfejlet PSI-tjek med 7 over eller mere får dig til at bryde psykisk sammen og tage 1d2 SAN-skade. Denne ulempe bevirker samtidig at du ikke kan tage ansvarsrelaterede ulemper som Pligtopfyldene eller Ansvar.',
  },
  {
    name: 'Hader at være alene',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du forsøger altid at have folk omkring dig og falder meget let hen i depression og viljeløshed når du er alene, givende -4 til PSI og SAN-tab bestemt af PSI-tjeks samt -2 til alle andre færdigheder (udover de hvor det ikke mening såsom HEL, MAG, STØ...). Du kan til tider være lettere irriterende, fordi du altid følger efter folk og altid spørger, hvor de går hen eller hvad de laver.',
  },
  {
    name: 'Lav koncentrationsevne',
    cost: 5,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du kan ikke koncentrere dig om det samme ret lang tid af gangen, hvilket adderer (10+1d10)% til grundtiden for alle tjeks med en grundtid over en halv time. Hvis du skal forsøge at nærstudere én specifik ting kræves PSI for ikke også at få -3 til tjekket. Du kan ikke have UDA højere end INT.',
  },
  {
    name: 'OCD',
    cost: 5, //'1 til 10'
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Man lider af en eller flere "tvanstanker" i form af handlinger man SKAL udføre under givne omstændigheder. Afhængig af graden og antallet kan denne ulempe være en quirk i stedet (hvis ens OCD blot er at man skal vaske hænder flere gange om dagen) men multiple og stærkt hindrende tvangstanker kan let blive en dybt irreterende ulempe, der kan give op til 10 UP.',
  },
  {
    name: 'Hypersensitivitet',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du er hypersensitiv overfor en bestemt ting, som man ofte kommer i kontakt med og som ellers for andre er totalt uskadelig og uden gener. For dig derimod kan det give en mild følelse af panik og ubehag (dvs det er både fysisk og mentalt). Kan være enten Osmophobia (lugte), Phonophobia (lyde højere end sagte tale) eller Photophobia (skarpt lys).',
  },
  {
    name: 'Type 2 diabetes',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Diabetes (sukkersyge) er en sygdom, hvor blodets glukoseindholdet er øget ud over det normale. Der findes to væsentlige former for diabetes der er permanente: type 1 diabetes og type 2 diabetes (eller gammelmands-sukkersyge). Derudover findes midlertidige diabetes-syndromer ved f.eks. bugspytkirtelbetændelse, men disse er ikke medtaget i denne ulempe. Type 1 grundes en ødelæggelse af de insulinskabende celler i bugspytskirtlen, kan i teorien ramme alle og kan ikke forebygges. Sygdommen giver sukker i urinen og bevirker derudover, at man er træt, meget tørstig, har hyppig vandladning, mavesmerter og kvalme, kan miste appetitten og lettere kan få infektioner i hud, mund og kønsorganer. Type 2 diabetes skyldes en kombination af utilstrækkelig insulinproduktion i bugspytkirtlen og nedsat følsomhed i cellerne for insulin (også kaldet insulinresistens), og er set som en livsstilssygdom, der rammer overvægtige i voksenalderen. Type 2 diabetes kan ofte behandles med en livstilsændring; bedre kost (sund og varieret kost med mange fibre og langsomt omsættelige sukkerstoffer i form af stivelse) regelmæssig motion og piller, der også kunne produceres i middelalderen og dermed i en tågedal-setting (mix af lupine, trigonella (fenugreek), and zedoary seed). I en tågedal-setting er type 2 diabetes derfor ikke så slemt. Type 1 derimod kræver en ekstern tilførsel af insulin daglig, og var i antikken ofte lig en dødsdom. I tågedalen kan diverse magiske brygge og ovenfor beskrevne mix hjælpe en smule på problemet, men type 1 diabetes er et alvorligt problem og kan i tågedal-regi hører under ulempen Dødelig Sygdom.',
  },
  {
    name: 'Forelskes let',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har et svagt hjerte overfor det modsatte køn, og hvis en flot person bare kigger på dig, kan du overbevise dig selv om, at det er din "soul-mate". Du får -3 til PSI-tjeks mod Forførelse, -2 mod Forhandling og Overtalelse, hvis personen er af de modsatte køn (medmindre vedkommende har meget lav UDS) og skal altid spille din karakter lidt småforelsket.',
  },
  {
    name: 'Hævngærrig',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er blevet groft ydmyget og er meget påvirket af dette. Karakteren er derfor meget opsat på at udtænke en passende hævn. Denne ulempe giver 2 UP mindre hvis ydmygelsen (og dermed hævnen) ikke er et spørgsmål om liv og død.',
  },
  {
    name: 'Alvorlig allergi',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget allergisk over for en kendt og udbredt ting, fx mælk, pollen osv. I Tågedalen hvor der ikke er medicin mod den slags, har jeg valgt at give lidt flere UP for den.',
  },
  {
    name: 'Antiautoritær',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Man skal spille sin char meget rebelsk og med direkte foragt for alle ledertyper. Man er immun overfor lederevnetjeks på godt og ondt, og får plusser til bekæmpelse af Overtalelse og Forhør af alle folk, der udstråler autoritet. Man kan aldrig selv påtage sig en lederrolle.',
  },
  {
    name: 'Plagiarist',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du har ingen fantasi eller opfindsomhed, whatsoever. Alt hvad du siger og gør, er noget du har hørt eller lært andetsteds fra. Kan gøre dig til en ekstrem dårlig løgner, og gør det meget svært at finde på vilde, episke ideer under kamp. Selvfølgelig vil du aldrig indrømme din manglende kreativitet (medmindre du også har mindreværdskompleks).',
  },
  {
    name: 'Nysgerrig',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Du er ekstrem nysgerrig, og hver gang du kommer ud for noget du ikke kender, eller som virker interessant, skal du klare et PSI-tjek for ikke at nærstudere det. Du er f.eks. typen, der vil udløse fælder bare for at se hvad der sker, og altid vil forsøge at åbne alle døre og skrin du kommer forbi. Som oftest vil du også genere dine partymembers med fjollede spørgsmål vedrørende deres evner. Du vil altid fare hen og udspørge interessante NPC’s, hvilket som oftest vil give nogle minusser til NPC-reaction.',
  },
  {
    name: 'Dominerende',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren vil gerne bestemme ALT! Tager stort set aldrig mod ordre fra nogen, og har svært ved at affinde sig med, hvis nogen ikke følger hans/hendes ordrer. Kan meget hurtigt blive trættende. For ikke at gøre denne ulempe alt for irriterende, kan en dominerende karakter godt lade visse ting være op til folk selv, hvis den dominerende person føler, de gør deres job ordentligt (en dominerende magiker skal ikke til at belære en kriger om kamp eksempelvis).',
  },
  {
    name: 'Overtroisk',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren frygter hele tiden at blive forbandet og er desuden rædselsslagen for genfærd, onde ånder osv. Hvis karakteren møder noget, der er overnaturligt skal han klare et PSI tjek for ikke at løbe skrigende bort. I Tågedalen, hvor spøgelser er noget langt, langt de fleste tror på eksisterer (primært fordi de gør det), ser man ikke ned på en overtroisk person i samme omfang, som vi måske gør det i vores verden (DM selv giver i hvert fald ikke fem flade øre for den slags).',
  },
  {
    name: 'Forræderi',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'En af karakterens kontakter er en forræder. Kun DM ved hvem forræderen er. DM kan godt sige, at han ikke gider at skrive en kontakt om til forræder og nedlægge veto mod denne ulempe.',
  },
  {
    name: 'Gentleman',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Vedkommende er en rigtig gentleman, der har en fast morale og nogle generelle principper om hvad der rigtigt og forkert. Stikker ikke sin fjende i ryggen, rejser sig for gamle folk, lader folk komme foran i køen, opfører sig dannet overfor damer (hvis man selv er en mand), etc.',
  },
  {
    name: 'Berygtet',
    cost: '3 til 7',
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er berygtet i et specielt miljø og er ikke særlig populær. Varierer meget i UP-gain alt afhængig af hvilket miljø der er tale om (+3 ved en underverden i en købstad hvor kampagnen sjældent fører en hen, +7 hvis der er tale om en ekstrem magtfuld organisation med rødder alle vegne, såsom Mørkets Legion). Der er ikke tale om, at folk i miljøet er bange for en eller har respekt for en - her kræves fordelen Rygte.',
  },
  {
    name: 'Fobi',
    cost: '5 til 9',
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har en stor, irrationel frygt for noget. Eksempler: klaustrofobi (lukkede rum), hydrofobi (vand), demofobi (store grupper)), scotofobi (mørke), rupofobi (skridt), akrofobi (højder), entomofobi (insekter), brotofobi (høje lyde), agorafobi (åbne pladser) og araknofobi (edderkopper). Se fobi for mere information. Nogle fobier kan - hvis de er meget specielle og ikke forekommer så tit - give mindre UP. Hvis hydrofobi er meget slem, og man ikke kan gå i bad eksempelvis, kan den give helt op til 3 UP mere. At tage en fobi, hvor man blot er lidt utilpas overfor fobien i stedet for panisk angst, tæller som en quirk (se quirks) til 1 eller 2 UP.',
  },
  {
    name: 'Hidsig',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har et hidsigt temperament, hvilket er ret ubehageligt. Karakteren får -1 til PSI-tjeks, og skal slå et PSI-tjek hver gang han bliver provokeret for ikke at hidse sig op og råbe eller sågar angribe provokatøren.',
  },
  {
    name: 'Hypokonder',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er hypokonder og overdriver altid sine lidelser og skader. Karakteren skal klare et PSI tjek for hver gang han bliver såret den mindste smule, for ikke at bryde klynkende og pylrende sammen i selvmedlidenhed.',
  },
  {
    name: 'Farlig gæld',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har lånt et betydeligt beløb af nogle tvivlsomme individer. Nu vil disse individer have pengene tilbage og det meget hurtigt. Individerne har mange ubehagelige måder at inkassere deres gæld på. Karakteren bliver jaget.',
  },
  {
    name: 'Fedme',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget overvægtig, hvilket giver -1 til HUR og UDS men +1 STØ. Vedkommende kan også kun gå halvt så langt som normale mennesker (har betydelse for FAT) og accelererer generelt meget langsomt (kan få betydning får MiB). Hvis vedkommende taber sig ingame, vil vedkommende miste 1 STØ men genvinde 1 HUR og/eller 1 UDS. Dette vil typisk ske ved at købe denne ulempe væk med UP eller bruge lang ingame-tid på kur og træning.',
  },
  {
    name: 'Slapsvans',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er en slapsvans og får -2 til STR. Fordi man genetisk er kodet dårligt til at tage muskelmasse på, bliver det dyrere og mere krævende at købe sig op i STR og STØ.',
  },
  {
    name: 'Skvattet',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      "Karakteren er lille og uden muskler og får derfor -1 til STR og STØ. Man kan kun købe sig op i disse to egenskaber med DM's tilladelse under særlige omstændigheder.",
  },
  {
    name: 'Gammel',
    cost: '15- til 25 kXP bestemt af start-lvl',
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er omkring de 50-60 år (som menneske) og begynder at kunne mærke et langt livs slid. Karakteren får -1 til STR, SMI og HUR, men får +1 til UDA pga. sin visdom.',
  },
  {
    name: 'Fattig',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren er meget fattig og får nedsat sine Startpenge til ca 30% hvad man har krav til. Der skal en meget god forklaring (såvel som en fjollet spiller) til at købe fattig, hvis man har adgang til average Jobs eller bedre.',
  },
  {
    name: 'Småklodset',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har det med at tabe og vælte ting i ny og næ og er generelt ikke noget motorisk vidunder. Man får negative modifikationer til de rul man foretager for ikke at fumle og samtidig smadrer man små skrøbelige ting i ny og næ (bestemt af DM).',
  },
  {
    name: 'Ludomani',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren elsker at spille grænsende til det neurotiske; især når store pengesummer er på spil. Regelteknisk skal karakteren slå et PSI-tjek for hver dag denne befinder sig i en større by med penge på lommen med en eller flere timers fritid, får ikke med det samme at opsøge en eller flere spillebuler og spille for alt hvad man ejer (minus ens kæreste ejendomme). Man kan, efter en times spil, slå et PSI-tjek for at stoppe igen, men typisk skal man have andre til at stoppe en. En Ludoman får +1 til færdigheden Spille.',
  },
  {
    name: 'Elemental Susceptibility',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Din krop reagerer ekstra stærkt på én tilfældig valgt type skade (enten electric, (un)holy, poison, fire, cold eller magic) og du får -15% til resistance i denne type skade. Du ved ikke selv, hvilken type der er tale om (dvs de første par træf vil din resistances være hemmelige og kun kendt af DM).',
  },
  {
    name: 'En gang heldig...',
    cost: 6,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren genvinder 1 HeP per 10. ingame-døgn i stedet for hvert 7. Kan ikke tages samtidig med ulemper der bevirker, du ingen HeP har.',
  },
  {
    name: 'Tøsedreng',
    cost: 7,
    advantage: false,
    category: advantageCategories.STANDARD,
    description:
      'Karakteren har mod som kogt spagetti og får derfor -3 til MMM. Kan ikke kombineres med besærkergang eller lignende.',
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
