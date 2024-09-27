const discs = [
    //ミシュメリア
    'mishumeria',
    'fragile_utopia',
    'oddoai_ririi',
    'tuliparfeit',
    'gyakusahana',
    'lucid_hallucination',
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
    'only_way_out',
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

onEvent('sound_event.registry', event => {
    event.create('ciallo')
    for (const disc of discs) {
        event.create('record.music_disc_' + disc)
    }
})