let fighter = charFighter('Hawk')
let ranger = charRanger('Lillia')
let rogue = charRogue('Edgar')
let goblin = charMonster1('Goblin')
let bugbear = charMonster2('Bugbear')
let dragon = charMonster3('Dragon')

let addHeroButton = () => {
    select('.hero .atk--button').innerHTML = `<button>Attack</button>`
}

let addMonsterButton = () => {
    select('.monster .atk--button').innerHTML = `<button>Attack</button>`
}

select('.hero--selection .char--mini1').addEventListener('click', () => {
        select('.hero .portrait').style.backgroundImage = `url('assets/fighter-portrait.jpg')`
        addHeroButton()
        fighter.hp = fighter.maxHp
        stage.startHero(fighter, select('.hero'))
        select('.hero button').addEventListener('click', () => stage.heroAttack())
})

select('.hero--selection .char--mini2').addEventListener('click', () => {
        select('.hero .portrait').style.backgroundImage = `url('assets/ranger-portrait.png')`
        addHeroButton()
        ranger.hp = ranger.maxHp
        stage.startHero(ranger, select('.hero'))
        select('.hero button').addEventListener('click', () => stage.heroAttack())
})

select('.hero--selection .char--mini3').addEventListener('click', () => {
    select('.hero .portrait').style.backgroundImage = `url('assets/rogue-portrait.jpg')`
    addHeroButton()
    rogue.hp = rogue.maxHp
    stage.startHero(rogue, select('.hero'))
    select('.hero button').addEventListener('click', () => stage.heroAttack())
})

select('.monster--selection .char--mini1').addEventListener('click', () => {
    select('.monster .portrait').style.backgroundImage = `url('assets/goblin-portrait.jpg')`
    addMonsterButton()
    goblin.hp = goblin.maxHp
    stage.startMonster(goblin, select('.monster'))
    select('.monster button').addEventListener('click', () => stage.monsterAttack())
})

select('.monster--selection .char--mini2').addEventListener('click', () => {
    select('.monster .portrait').style.backgroundImage = `url('assets/bugbear-portrait.png')`
    addMonsterButton()
    bugbear.hp = bugbear.maxHp
    stage.startMonster(bugbear, select('.monster'))
    select('.monster button').addEventListener('click', () => stage.monsterAttack())
})

select('.monster--selection .char--mini3').addEventListener('click', () => {
    select('.monster .portrait').style.backgroundImage = `url('assets/dragon-portrait.jpg')`
    addMonsterButton()
    dragon.hp = dragon.maxHp
    stage.startMonster(dragon, select('.monster'))
    select('.monster button').addEventListener('click', () => stage.monsterAttack())
})