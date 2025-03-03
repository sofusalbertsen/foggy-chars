import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    upPoints: 100, // Default UP points
    stats: [
      { name: 'STY', longName: 'Styrke', statValue: 10, statname: 'strength' },
      { name: 'STØ', longName: 'Størrelse', statValue: 10, statname: 'size' },
      { name: 'SMI', longName: 'Smidighed', statValue: 10, statname: 'dexterity' },
      { name: 'INT', longName: 'Intelligens', statValue: 10, statname: 'intelligence' },
      { name: 'UDH', longName: 'Udholdenhed', statValue: 10, statname: 'constitution' },
      { name: 'UDS', longName: 'Udseende', statValue: 10, statname: 'appearance' },
      { name: 'POW', longName: 'Power', statValue: 10, statname: 'power' },
      { name: 'HUR', longName: 'Hurtighed', statValue: 10, statname: 'speed' }, // Added speed stat
    ],
    characterInfo: {
      name: '',
      race: '',
      occupation: '',
      age: '',
      // Add any other character info fields here
    },
    advantages: [
      { name: 'Stærk', value: 5, advantage: true, chosen: false },
      { name: 'Svag', value: 5, advantage: false, chosen: false },
      // Add more advantages/disadvantages as needed
    ],
    initiativeModifier: 0, // Initiative modifier (InIM)
    // ... existing state properties
  }),

  getters: {
    calculateHP: (state) => {
      let hp = 0
      state.stats.forEach((stat) => {
        if (stat.name === 'UDH') {
          hp += stat.statValue * 2
        } else if (stat.name === 'STØ') {
          hp += stat.statValue
        }
      })
      return hp
    },

    getStat: (state) => (name) => {
      return state.stats.find((stat) => stat.name === name)
    },

    // Calculate Natural Value (NV)
    calculateNV: (state) => {
      // Assuming NV is based on some stats - adjust this calculation as needed
      const sty = state.stats.find((s) => s.name === 'STY')?.statValue || 0
      const smi = state.stats.find((s) => s.name === 'SMI')?.statValue || 0
      const int = state.stats.find((s) => s.name === 'INT')?.statValue || 0

      return Math.floor((sty + smi + int) / 3)
    },

    // Calculate Initiative Sum (NV + HUR + InIM)
    calculateInitiativeSum: (state) => {
      // Use the calculation inside this getter rather than relying on another getter
      const nv = Math.floor(
        ((state.stats.find((s) => s.name === 'STY')?.statValue || 0) +
          (state.stats.find((s) => s.name === 'SMI')?.statValue || 0) +
          (state.stats.find((s) => s.name === 'INT')?.statValue || 0)) /
          3,
      )
      const hur = state.stats.find((s) => s.name === 'HUR')?.statValue || 0
      return nv + hur + state.initiativeModifier
    },

    // Get Initiative Dice and Modifier
    getInitiativeDiceAndMod: (state) => {
      // Get the sum directly without using another getter
      const sum = state.calculateInitiativeSum

      if (sum < 18) return { dice: 4, mod: 3 }
      if (sum <= 21) return { dice: 4, mod: 2 }
      if (sum <= 25) return { dice: 4, mod: 1 }
      if (sum <= 30) return { dice: 4, mod: 0 }
      if (sum <= 33) return { dice: 3, mod: 0 }
      if (sum <= 37) return { dice: 2, mod: 0 }
      if (sum <= 41) return { dice: 2, mod: 0, specialChance: 0.75 } // 75% chance for 1
      return { dice: 0, mod: 1 } // Always 1
    },

    // Get initiative description
    getInitiativeDescription: (state) => {
      // Directly compute dice and modifier without relying on another getter
      const sum = state.calculateInitiativeSum

      let dice, mod, specialChance

      if (sum < 18) {
        dice = 4
        mod = 3
      } else if (sum <= 21) {
        dice = 4
        mod = 2
      } else if (sum <= 25) {
        dice = 4
        mod = 1
      } else if (sum <= 30) {
        dice = 4
        mod = 0
      } else if (sum <= 33) {
        dice = 3
        mod = 0
      } else if (sum <= 37) {
        dice = 2
        mod = 0
      } else if (sum <= 41) {
        dice = 2
        mod = 0
        specialChance = 0.75
      } else {
        dice = 0
        mod = 1
      }

      if (dice === 0) return '1'
      if (specialChance) return `1d${dice} (75% for 1)`
      return mod > 0 ? `1d${dice}+${mod}` : `1d${dice}`
    },
  },

  actions: {
    updateStat(statName, value) {
      const stat = this.stats.find((s) => s.name === statName)
      if (stat) {
        stat.statValue = parseInt(value)
      }
    },

    modifyUP(points) {
      this.upPoints += points
    },

    toggleAdvantage(name) {
      const advantage = this.advantages.find((adv) => adv.name === name)
      if (advantage) {
        advantage.chosen = !advantage.chosen
        const pointChange = advantage.advantage ? -advantage.value : advantage.value
        this.modifyUP(advantage.chosen ? pointChange : -pointChange)
      }
    },

    updateCharacterInfo(field, value) {
      this.characterInfo[field] = value
    },

    updateInitiativeModifier(value) {
      this.initiativeModifier = parseInt(value) || 0
    },

    // Roll initiative based on current stats
    rollInitiative() {
      // Calculate the dice and mod directly instead of using a getter
      const sum = this.calculateInitiativeSum

      let dice, mod, specialChance

      if (sum < 18) {
        dice = 4
        mod = 3
      } else if (sum <= 21) {
        dice = 4
        mod = 2
      } else if (sum <= 25) {
        dice = 4
        mod = 1
      } else if (sum <= 30) {
        dice = 4
        mod = 0
      } else if (sum <= 33) {
        dice = 3
        mod = 0
      } else if (sum <= 37) {
        dice = 2
        mod = 0
      } else if (sum <= 41) {
        dice = 2
        mod = 0
        specialChance = 0.75
      } else {
        dice = 0
        mod = 1
      }

      if (dice === 0) return 1

      let result
      if (specialChance) {
        // Handle 75% chance for 1
        const chance = Math.random()
        if (chance <= 0.75) {
          result = 1
        } else {
          result = Math.floor(Math.random() * dice) + 1
        }
      } else {
        result = Math.floor(Math.random() * dice) + 1 + mod
      }

      return result
    },
  },
})
