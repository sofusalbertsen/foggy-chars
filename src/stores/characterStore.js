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
  },
})
