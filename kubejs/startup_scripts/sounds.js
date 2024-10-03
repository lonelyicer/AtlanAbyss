const michaliaDiscs = [
    //ミシュメリア
    'mishumeria',
    'fragile_utopia',
    'oddoai_ririi',
    'tuliparfeit',
    'gyakusahana',
    'lucid_hallucination'
];
const adventureDiscs = [
    //Adventure
    'isometric',
    'you_re_on',
    'ok',
    'la_lune',
    'pay_no_mind',
    'beings',
    'imperium',
    'zephyr',
    'nonsense',
    'innocence',
    'pixel_empire',
    'home',
    'icarus',
    'finale',
    'the_city',
    'cut_the_kid',
    'technicolor',
    'only_way_out'
];
const worldsDiscs = [
    //Worlds
    'divinity',
    'sad_machine',
    'years_of_war',
    'flicker',
    'fresh_static_snow',
    'polygon_dust',
    'hear_the_bells',
    'natural_light',
    'lionhearted',
    'sea_of_voices',
    'fellow_feeling',
    'goodbye_to_a_world'
];

onEvent('sound_event.registry', (e) => {
    e.create('ciallo')
    for (const disc of michaliaDiscs) {
        e.create('record.music_disc_' + disc)
    }
    for (const disc of adventureDiscs) {
        e.create('record.music_disc_' + disc)
    }
    for (const disc of worldsDiscs) {
        e.create('record.music_disc_' + disc)
    }
})
onEvent('item.registry', (e) => {
    // ミシュメリア
    for (const disc of michaliaDiscs) {
        e.create('music_disc_' + disc, 'music_disc')
            .song('kubejs:record.music_disc_' + disc).analogOutput(1)
            .texture('kubejs:item/music_disc_michalia')
            .tag('minecraft:music_discs')
    }
    // Adventure
    for (const disc of adventureDiscs) {
        e.create('music_disc_' + disc, 'music_disc')
            .song('kubejs:record.music_disc_' + disc).analogOutput(1)
            .texture('kubejs:item/music_disc_adventure')
            .tag('minecraft:music_discs')
    }
    // Worlds
    for (const disc of worldsDiscs) {
        e.create('music_disc_' + disc, 'music_disc')
            .song('kubejs:record.music_disc_' + disc).analogOutput(1)
            .texture('kubejs:item/music_disc_worlds')
            .tag('minecraft:music_discs')
    }
})