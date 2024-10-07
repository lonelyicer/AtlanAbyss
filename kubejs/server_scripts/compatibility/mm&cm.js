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


    //压缩空间微型
    remove('compactmachines:machine_tiny')
    event.shaped('compactmachines:machine_tiny', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:industrial_iron_block',
        B: 'compactmachines:wall'
    }).id('atlanabyss:machine_tiny')
    //压缩空间小型
    remove('compactmachines:machine_small')
    event.shaped('compactmachines:machine_small', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_block',
        B: 'compactmachines:machine_tiny'
    }).id('atlanabyss:machine_small')
    //压缩空间普通
    remove('compactmachines:machine_normal')
    event.shaped('compactmachines:machine_normal', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'thermal:tin_block',
        B: 'compactmachines:machine_small'
    }).id('atlanabyss:machine_normal')
    //压缩空间大型
    remove('compactmachines:machine_large')
    event.shaped('compactmachines:machine_large', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'tconstruct:amethyst_bronze_block',
        B: 'compactmachines:machine_normal'
    }).id('atlanabyss:machine_large')
    //压缩空间巨型
    remove('compactmachines:machine_giant')
    event.shaped('compactmachines:machine_giant', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'thermal:electrum_block',
        B: 'compactmachines:machine_large'
    }).id('atlanabyss:machine_giant')
    //压缩空间最大型
    remove('compactmachines:machine_maximum')
    event.shaped('compactmachines:machine_maximum', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'thermal:signalum_block',
        B: 'compactmachines:machine_giant'
    }).id('atlanabyss:machine_maximum')

    //物品隧道
    remove('compactmachines:tunnels/item')
    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'), [
        'compactmachines:machine_tiny',
        'create:chute'
    ]).id('atlanabyss:machine_tunnel_item')
    //液体隧道
    remove('compactmachines:tunnels/fluid')
    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}'), [
        'compactmachines:machine_tiny',
        'create:fluid_pipe'
    ]).id('atlanabyss:machine_tunnel_fluid')
    //能量隧道
    remove('compactmachines:tunnels/energy')
    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}'), [
        'compactmachines:machine_tiny',
        'createaddition:copper_spool'
    ]).id('atlanabyss:machine_tunnel_energy')
    //缩小器
    remove('compactmachines:personal_shrinking_device')
    event.shapeless('compactmachines:personal_shrinking_device', [
        'compactmachines:machine_tiny'
    ]).id('atlanabyss:personal_shrinking_device_from_machine')
    event.shapeless('compactmachines:machine_tiny', [
        'compactmachines:personal_shrinking_device'
    ]).id('atlanabyss:machine_from_personal_shrinking_device')

    //区块加载升级
    event.shaped('compactmachines:chunkloader_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:vibration_mechanism',
        B: 'compactmachines:wall'
    }).id('atlanabyss:chunkloader_upgrade')
})