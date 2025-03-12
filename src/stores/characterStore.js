import { defineStore } from 'pinia'
import { advantages, getAdvantage } from '../data/advantages'

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
    // We'll replace this with a selectedAdvantages array
    selectedAdvantages: [],
    maxAdvantages: 6, // Maximum number of standard advantages a character can have
    initiativeModifier: 0,
    // Stats modifiers that can be affected by advantages
    statsModifiers: {
      skadeBonus: 0,
      hp_bonus: 0,
      fat_bonus: 0,
      mmm_bonus: 0,
      initiative_bonus: 0,
      bite_damage: 0,
      poison_resistance: 0,
    },
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
      return hp + state.statsModifiers.hp_bonus
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

    // New getters for advantages
    standardAdvantages: (state) => {
      return state.selectedAdvantages.filter((adv) => adv.advantage && adv.category === 'standard')
    },

    specialAdvantages: (state) => {
      return state.selectedAdvantages.filter((adv) => adv.advantage && adv.category === 'special')
    },

    standardDisadvantages: (state) => {
      return state.selectedAdvantages.filter((adv) => !adv.advantage)
    },

    canSelectMoreAdvantages: (state) => {
      const standardAdvCount = state.selectedAdvantages.filter(
        (adv) => adv.advantage && adv.category === 'standard',
      ).length
      return standardAdvCount < state.maxAdvantages
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
      const existingIndex = this.selectedAdvantages.findIndex((adv) => adv.name === name)

      if (existingIndex !== -1) {
        // Already selected, so remove it
        const advantage = this.selectedAdvantages[existingIndex]

        const pointChange = -advantage.cost

        this.modifyUP(pointChange)

        this.selectedAdvantages.splice(existingIndex, 1)
        this.updateStatsFromAdvantages()
      } else {
        // Not selected yet, so add it if possible
        const advantage = getAdvantage(name)
        if (advantage) {
          // Check if we can add more advantages (only for standard advantages)
          if (
            !advantage.advantage ||
            advantage.category !== 'standard' ||
            this.canSelectMoreAdvantages
          ) {
            this.selectedAdvantages.push({
              name: advantage.name,
              cost: advantage.cost,
              advantage: advantage.advantage,
              category: advantage.category,
              description: advantage.description,
              chosen: true,
            })

            const pointChange = advantage.cost
            this.modifyUP(pointChange)
            this.updateStatsFromAdvantages()
          }
        }
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

    // New method to update character stats based on selected advantages
    updateStatsFromAdvantages() {
      // Reset all modifiers
      this.statsModifiers = {
        skadeBonus: 0,
        hp_bonus: 0,
        fat_bonus: 0,
        mmm_bonus: 0,
        initiative_bonus: 0,
        bite_damage: 0,
        poison_resistance: 0,
      }

      // Apply modifiers from each advantage
      this.selectedAdvantages.forEach((adv) => {
        switch (adv.name) {
          case 'Stærk':
            this.statsModifiers.skadeBonus += 1
            break
          case 'Svag':
            this.statsModifiers.skadeBonus -= 1
            break
          case 'Stærke tænder':
            // Check if character is a lizard/has bite attack
            if (this.characterInfo.race === 'Øglemand') {
              this.statsModifiers.bite_damage += 1
            }
            break
          case 'Hollow Bones':
            this.statsModifiers.hp_bonus -= 3 // Approximating 1d6
            this.statsModifiers.initiative_bonus += 2
            break
          // Add more cases for other advantages that affect stats
        }
      })
    },
  },
})
