onEvent('entity.check_spawn', event => {
    let { entity } = event;
    //给了ban了
    if (entity.type === 'touhou_little_maid:fairy') {
        event.cancel();
    }
    if (entity.type === 'minecraft:bat') {
        event.cancel();
    }
    if (entity.type === 'minecraft:spider') {
        event.cancel();
    }
    if (entity.type === 'minecraft:cave_spider') {
        event.cancel();
    }
    if (entity.type === 'neapolitan:plantain_spider') {
        event.cancel();
    }
    // if (entity.type === 'alexsmobs:fly') {
    //   event.cancel();
    // }
    // if (entity.type === 'alexsmobs:crimson_mosquito') {
    //   event.cancel();
    // }
    // if (entity.type === 'alexsmobs:cosmic_cod') {
    //   event.cancel();
    // }
})
