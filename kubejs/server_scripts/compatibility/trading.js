onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }

    remove('lightmanscurrency:terminal')
    event.shaped('lightmanscurrency:terminal', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: 'minecraft:emerald'
    }).id('atlanabyss:trading_terminal');
})