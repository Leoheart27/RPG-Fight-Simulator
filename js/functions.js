const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)


const character = {
    name: '',
    hp: 1,
    maxHp: 1,
    atk : 0,
    ac: 0
}

const charFighter = (name) => {
    return {
        ...character,
        name,
        hp: 110,
        maxHp: 110,
        atk: 9,
        ac: 17,
        dmg: 5
    }
}

const charRanger = (name) => {
    return {
        ...character,
        name,
        hp: 90,
        maxHp: 90,
        atk: 14,
        ac: 12,
        dmg: 12
    }
}

const charRogue = (name) => {
    return {
        ...character,
        name,
        hp: 75,
        maxHp: 75,
        atk: 17,
        ac: 10,
        dmg: 20
    }
}

const charMonster1 = (name) => {
    return {
        ...character,
        name,
        hp: 60,
        maxHp: 60,
        atk: 11,
        ac: 12,
        dmg: 3
    }
}

const charMonster2 = (name) => {
    return {
        ...character,
        name,
        hp: 120,
        maxHp: 120,
        atk: 13,
        ac: 14,
        dmg: 6
    }
}

const charMonster3 = (name) => {
    return {
        ...character,
        name,
        hp: 200,
        maxHp: 200,
        atk: 20,
        ac: 15,
        dmg: 20
    }
}

let stage = {
    hero: null,
    heroEl: null,
    monster: null,
    monsterEl: null,

    startHero(hero, heroEl) {
        this.hero = hero
        this.heroEl = heroEl
        this.updateHero()
    },


    startMonster(monster, monsterEl) {
        this.monster = monster
        this.monsterEl = monsterEl
        this.updateMonster()
        
    },

    updateHero() {
        this.heroEl.querySelector('.hp').innerHTML = `HP: ${this.hero.hp}`
        this.heroEl.querySelector('.atk').innerHTML = `ATK: ${this.hero.atk}`
        this.heroEl.querySelector('.ac').innerHTML = `AC: ${this.hero.ac}`
        this.heroEl.querySelector('.dmg').innerHTML = `Damage: ${this.hero.dmg} + 1d8`
        this.heroEl.querySelector('.name').innerHTML = `${this.hero.name}`
        this.heroEl.querySelector('.healthcount').innerHTML = `HP: ${this.hero.hp}`
        let heroMaxHp = (this.hero.hp / this.hero.maxHp) * 100
        this.heroEl.querySelector('.bar').style.width = `${heroMaxHp}%`

    },

    updateMonster() {
        this.monsterEl.querySelector('.hp').innerHTML = `HP: ${this.monster.hp}`
        this.monsterEl.querySelector('.atk').innerHTML = `ATK: ${this.monster.atk}`
        this.monsterEl.querySelector('.ac').innerHTML = `AC: ${this.monster.ac}`
        this.monsterEl.querySelector('.dmg').innerHTML = `Damage: ${this.monster.dmg} + 1d8`
        this.monsterEl.querySelector('.name').innerHTML = `${this.monster.name}`
        this.monsterEl.querySelector('.healthcount').innerHTML = `HP: ${this.monster.hp}`
        let monsterMaxHp = (this.monster.hp / this.monster.maxHp) * 100
        this.monsterEl.querySelector('.bar').style.width = `${monsterMaxHp}%`

    },

    resethero() {
    },

    heroAttack() {
        let attackRoll = this.hero.atk + (Math.floor(Math.random() * 6) +1)
        if(this.monster.hp <= 0 || this.hero.hp <=0 ) {
            combatLog.addMsg(`Combat is over!`)
            return
        }
        if(attackRoll > this.monster.ac) {
            let damageRoll = (this.hero.dmg + (Math.floor(Math.random() * 8) +1))
            this.monster.hp = this.monster.hp - damageRoll
            combatLog.addMsg(`${this.hero.name} attacks ${this.monster.name}! ${attackRoll} ATK vs ${this.monster.ac} AC HIT!
            ${this.hero.name} deals ${damageRoll} of damage to: ${this.monster.name} HP`)
            this.updateMonster()
        } else {
            combatLog.addMsg(`${this.hero.name} attacks ${this.monster.name}! ${attackRoll} atk vs ${this.monster.ac} AC MISS!`)
        }
    },

    monsterAttack() {
        let attackRoll = this.monster.atk + (Math.floor(Math.random() * 6) +1)
        if(this.monster.hp <= 0 || this.hero.hp <=0 ) {
            combatLog.addMsg(`Combat is over!`)
            return
        }
         if(attackRoll > this.hero.ac) {
            let damageRoll = (this.monster.dmg + (Math.floor(Math.random() * 8) +1))
            this.hero.hp = this.hero.hp - damageRoll
            combatLog.addMsg(`${this.monster.name} attacks ${this.hero.name}! ${attackRoll} ATK vs ${this.hero.ac} AC HIT!
            ${this.monster.name} deals ${damageRoll} of damage to: ${this.hero.name} HP`)
            this.updateHero()
        } else {
            combatLog.addMsg(`${this.monster.name} attacks ${this.hero.name}! ${attackRoll} ATK vs ${this.hero.ac} AC MISS!`)
        }
    }

}


const combatLog = {
    list: [],
    addMsg(msg) {
        this.list.push(msg),
        this.render()
    },

    render() {
        const logEL = select('.combat--log')
        logEL.innerHTML = ``
        this.list.forEach(i => {
            logEL.innerHTML += `<li>${i}</li>`
        })
    }
    
}