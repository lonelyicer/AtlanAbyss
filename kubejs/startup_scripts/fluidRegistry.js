onEvent('fluid.registry', event => {
    //氧化铝溶液
    event.create('alumina_solution')
        .thinTexture(0xFEDEC8)
        .bucketColor(0xFEDEC8)
        .noBlock()
        .displayName('Alumina Solution');
    //细沙
    event.create('fine_sand')
        .displayName('Fine Sand')
        .stillTexture('kubejs:fluid/fine_sand')
        .flowingTexture('kubejs:fluid/fine_sand')
        .bucketColor(0xE3DBB0)
        .noBlock()
        .displayName('Fine Sand');
    //熔融钚
    event.create('molten_plutonium')
        .stillTexture('kubejs:fluid/molten_plutonium_still')
        .flowingTexture('kubejs:fluid/molten_plutonium_flowing')
        .bucketColor(0x253F51)
        .noBlock()
        .displayName('Molten Plutonium');
    //液态逻辑
    let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
    event.create('raw_logic')
        .thinTexture(0xE7FFCB)
        .bucketColor(0xE7FFCB)
        .stillTexture('kubejs:fluid/number_still')
        .flowingTexture('kubejs:fluid/number_flow')
        .color(0xE7FFCB)
        .noBlock()
        .displayName(`Liquified Logic (Unprocessed)`);

    for (let i = 0; i < colors.length; i++)
        event.create('number_' + i)
            .thinTexture(colors[i])
            .bucketColor(colors[i])
            .stillTexture('kubejs:fluid/number_still')
            .flowingTexture('kubejs:fluid/number_flow')
            .color(colors[i])
            .noBlock()
            .displayName(`Liquified Logic (${i})`);

    event.create('matrix')
        .thinTexture(colors[0])
        .bucketColor(colors[0])
        .stillTexture('kubejs:fluid/matrix_still')
        .flowingTexture('kubejs:fluid/matrix_flow')
        .noBlock()
        .displayName(`Liquified Computation Matrix`);

    //幸运之液
    event.create('lucky_fluid')
        .bucketColor(0xE08B63)
        .stillTexture('kubejs:block/lucky_block')
        .flowingTexture('kubejs:block/lucky_block')
        .noBlock()
        .displayName('Lucky Fluid');


})