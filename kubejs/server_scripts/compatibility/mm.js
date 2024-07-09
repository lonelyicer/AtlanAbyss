onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }

    remove('compactmachines:wall');

    //输入输出
    event.stonecutting('mm:item_input_slot1_port',
        'create:industrial_iron_block'
    ).id('atlanabyss:item_input_slot1_port');
    event.stonecutting('mm:item_output_slot1_port',
        'create:industrial_iron_block'
    ).id('atlanabyss:item_output_slot1_port');
    //控制器
    event.shaped('mm:compact_machine_controller', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:industrial_iron_block',
        B: 'minecraft:glass'
    }).id('atlanabyss:compact_machine_controller')
})