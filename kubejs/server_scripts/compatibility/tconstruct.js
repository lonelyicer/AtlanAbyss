onEvent('recipes', event => {
  let remove = (name) => {
    event.remove({ id: name })
  }
  let { create, thermal } = event.recipes;
  //铜 
  remove('tconstruct:common/materials/copper_ingot_from_nuggets')
  remove('tconstruct:common/materials/copper_nugget_from_ingot')
  //金齿轮
  remove('tconstruct:smeltery/casts/gold_casts/gears')
  remove('tconstruct:smeltery/casts/red_sand_casts/gears')
  remove('tconstruct:smeltery/casts/sand_casts/gears')
  //杆
  remove('tconstruct:smeltery/casting/metal/brass/rod_gold_cast')
  remove('tconstruct:smeltery/casting/metal/brass/rod_sand_cast')
  remove('tconstruct:smeltery/casting/metal/copper/rod_gold_cast')
  remove('tconstruct:smeltery/casting/metal/copper/rod_sand_cast')
  remove('tconstruct:smeltery/casting/metal/electrum/rod_gold_cast')
  remove('tconstruct:smeltery/casting/metal/electrum/rod_sand_cast')
  remove('tconstruct:smeltery/casting/metal/gold/rod_gold_cast')
  remove('tconstruct:smeltery/casting/metal/gold/rod_sand_cast')
  remove('tconstruct:smeltery/casting/metal/iron/rod_gold_cast')
  remove('tconstruct:smeltery/casting/metal/iron/rod_sand_cast')
  //币铸模
  remove('tconstruct:smeltery/casts/gold_casts/coins')
  remove('tconstruct:smeltery/casts/sand_casts/coins')
  remove('tconstruct:smeltery/casts/red_sand_casts/coins')
  //浇筑合成板
  remove(/^tconstruct:smeltery.*plate_gold_cast$/)
  remove(/^tconstruct:smeltery.*plate_sand_cast$/)
  remove('tconstruct:smeltery/casts/gold_casts/plates')
  remove('tconstruct:smeltery/casts/sand_casts/plates')
  remove('tconstruct:smeltery/casts/red_sand_casts/plates')
  //浇筑钱币板
  remove(/^tconstruct:smeltery.*coin_gold_cast$/)
  remove(/^tconstruct:smeltery.*coin_sand_cast$/)
  //铝
  remove('tconstruct:smeltery/melting/metal/aluminum/ore_singular')
  remove('tconstruct:smeltery/melting/metal/aluminum/raw_block')
  remove('tconstruct:smeltery/melting/metal/aluminum/raw')
  //铀
  remove('tconstruct:smeltery/melting/metal/uranium/ore_singular')
  remove('tconstruct:smeltery/melting/metal/uranium/raw_block')
  remove('tconstruct:smeltery/melting/metal/uranium/raw')
  remove('tconstruct:smeltery/melting/metal/uranium/ingot')
  //炽铁
  remove('twilightforest:smeltery/melting/metal/fiery/nugget')
  //骑士金属
  remove('twilightforest:smeltery/melting/metal/knightmetal/nugget')
  //砖泥
  remove('tconstruct:smeltery/seared/grout_multiple')
  remove('tconstruct:smeltery/seared/grout')
  remove('tconstruct:smeltery/seared/seared_brick')
  remove('tconstruct:smeltery/seared/seared_brick_kiln')
  remove('tconstruct:smeltery/melting/seared/grout')
  remove('tconstruct:common/puny_smelting')
  event.shapeless('tconstruct:puny_smelting', [
    'minecraft:book',
    'minecraft:clay_ball'
  ]).id('atlanabyss:tc_puny_smelting');

  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      item: 'kubejs:uranium_ingot'
    },
    result: {
      fluid: 'tconstruct:molten_uranium',
      amount: 90
    },
    temperature: 830,
    time: 61
  }).id('atlanabyss:tc_melting_uranium_ingot');

  remove('tconstruct:tools/modifiers/slotless/embellishment_uranium')
  event.custom({
    type: 'tconstruct:swappable_modifier',
    inputs: [
      {
        item: 'kubejs:uranium_ingot'
      },
      {
        item: 'kubejs:uranium_ingot'
      },
      {
        item: 'kubejs:uranium_ingot'
      }
    ],
    tools: {
      tag: 'tconstruct:modifiable/embellishment/metal'
    },
    allow_crystal: false,
    result: {
      name: 'tconstruct:embellishment',
      value: 'tconstruct:uranium'
    }
  }).id('atlanabyss:tc_embellishment_uranium');

  remove('tconstruct:smeltery/casting/metal/uranium/ingot_gold_cast')
  remove('tconstruct:smeltery/casting/metal/uranium/ingot_sand_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: {
      tag: 'tconstruct:casts/multi_use/ingot'
    },
    fluid: {
      tag: 'forge:molten_uranium',
      amount: 90
    },
    result: {
      item: 'kubejs:uranium_ingot'
    },
    cooling_time: 61
  }).id('atlanabyss:tc_casting_uranium_ingot_gold_cast');
  event.custom({
    type: 'tconstruct:casting_table',
    cast: {
      tag: 'tconstruct:casts/single_use/ingot'
    },
    cast_consumed: true,
    fluid: {
      tag: 'forge:molten_uranium',
      amount: 90
    },
    result: {
      item: 'kubejs:uranium_ingot'
    },
    cooling_time: 61
  }).id('atlanabyss:tc_casting_uranium_ingot_sand_cast');

  //下界岩
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:cobblestone'
    },
    cast_consumed: true,
    fluid: {
      tag: 'tconstruct:blood',
      amount: 1250
    },
    result: 'minecraft:netherrack',
    cooling_time: 100
  }).id('atlanabyss:casting_basin_netherrack')

  //魂钢
  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      {
        tag: 'forge:molten_iron',
        amount: 180
      },
      {
        tag: 'tconstruct:liquid_soul',
        amount: 250
      }
    ],
    result: {
      fluid: 'tconstruct:molten_soulsteel',
      amount: 270
    },
    temperature: 1200
  }).id('atlanabyss:ore_molten_steelsoul');

  //熔融末影→谐振末影
  event.recipes.create.mixing(Fluid.of('thermal:ender', 250),
    Fluid.of('tconstruct:molten_ender', 250)
  ).heated().id('atlanabyss:superheated_tc_molten_ender')

  //粉碎矿熔炼
  function oreMelting(ingredient, result, ra, dt, t, byproducts, ba, id) {
    event.custom({
      type: 'tconstruct:ore_melting',
      rate: 'metal',
      ingredient: {
        item: ingredient
      },
      result: {
        fluid: result,
        amount: ra
      },
      temperature: dt,
      time: t,
      byproducts: [
        {
          fluid: byproducts,
          amount: ba
        }
      ]
    }).id('atlanabyss:ore_melting_' + id);
  }

  oreMelting('create:crushed_raw_iron', 'tconstruct:molten_iron', 90, 800, 90, 'tconstruct:molten_nickel', 90, 'crushed_iron')
  oreMelting('create:crushed_raw_gold', 'tconstruct:molten_gold', 90, 700, 85, 'tconstruct:molten_copper', 90, 'crushed_gold')
  oreMelting('create:crushed_raw_copper', 'tconstruct:molten_copper', 90, 500, 75, 'tconstruct:molten_gold', 90, 'crushed_copper')
  oreMelting('create:crushed_raw_zinc', 'tconstruct:molten_zinc', 90, 420, 70, 'tconstruct:molten_tin', 90, 'crushed_zinc')
  oreMelting('create:crushed_raw_silver', 'tconstruct:molten_silver', 90, 790, 90, 'tconstruct:molten_platinum', 90, 'crushed_silver')
  oreMelting('create:crushed_raw_tin', 'tconstruct:molten_tin', 90, 225, 59, 'tconstruct:molten_silver', 90, 'crushed_tin')
  oreMelting('create:crushed_raw_lead', 'tconstruct:molten_lead', 90, 330, 65, 'tconstruct:molten_tungsten', 90, 'crushed_lead')
  oreMelting('create:crushed_raw_nickel', 'tconstruct:molten_nickel', 90, 950, 97, 'tconstruct:molten_iron', 90, 'crushed_nickel')

  //粘液种子
  event.shapeless('tconstruct:earth_slime_grass_seeds', [
    'botania:grass_seeds',
    'minecraft:slime_ball'
  ]).id('atlanabyss:earth_slime_grass_seeds')//绿种子
  event.shapeless('tconstruct:sky_slime_grass_seeds', [
    'botania:grass_seeds',
    'tconstruct:sky_slime_ball'
  ]).id('atlanabyss:sky_slime_grass_seeds')//蓝种子
  event.shapeless('tconstruct:blood_slime_grass_seeds', [
    'botania:grass_seeds',
    'tconstruct:blood_slime_ball'
  ]).id('atlanabyss:blood_slime_grass_seeds')//红种子
  event.shapeless('tconstruct:ender_slime_grass_seeds', [
    'botania:grass_seeds',
    'tconstruct:ender_slime_ball'
  ]).id('atlanabyss:ender_slime_grass_seeds')//紫种子
  //树苗
  event.recipes.botania.mana_infusion('tconstruct:earth_slime_sapling',
    'ars_nouveau:green_archwood_sapling',
    120,
    'minecraft:amethyst_block').id('atlanabyss:earth_slime_sapling')
  event.recipes.botania.mana_infusion('tconstruct:sky_slime_sapling',
    'ars_nouveau:blue_archwood_sapling',
    120,
    'minecraft:amethyst_block').id('atlanabyss:sky_slime_sapling')
  event.recipes.botania.mana_infusion('tconstruct:ender_slime_sapling',
    'ars_nouveau:purple_archwood_sapling',
    120,
    'minecraft:amethyst_block').id('atlanabyss:ender_slime_sapling')
  event.recipes.botania.mana_infusion('tconstruct:blood_slime_sapling',
    'ars_nouveau:red_archwood_sapling',
    120,
    'minecraft:amethyst_block').id('atlanabyss:blood_slime_sapling')


  //蜂蜜
  remove('tconstruct:smeltery/melting/slime/honey_block')
  event.custom({
    'type': 'tconstruct:melting',
    'ingredient': {
      'item': 'minecraft:honey_block'
    },
    'result': {
      'fluid': 'create:honey',
      'amount': 1000
    },
    'temperature': 1,
    'time': 94
  }).id('atlanabyss:tc_melting_honey_block')

  remove('tconstruct:smeltery/entity_melting/bee')
  event.custom({
    'type': 'tconstruct:entity_melting',
    'entity': {
      'type': 'minecraft:bee'
    },
    'result': {
      'fluid': 'create:honey',
      'amount': 25
    },
    'damage': 2
  }).id('atlanabyss:entity_melting_bee')

  //花岗粘土
  remove('tconstruct:smeltery/melting/clay/brick_slab')
  remove('tconstruct:smeltery/melting/clay/pot')
  remove('tconstruct:smeltery/melting/clay/terracotta')
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      item: 'minecraft:granite'
    },
    result: {
      fluid: 'tconstruct:molten_clay',
      amount: 1000
    },
    temperature: 450,
    time: 96
  }).id('atlanabyss:tc_melting_granite');

  //花岗合金
  event.shaped('kubejs:granite_alloy', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dried_kelp',
    B: 'minecraft:granite'
  }).id('atlanabyss:granite_alloy');
  event.shaped('16x kubejs:granite_alloy', [
    'AB',
    'BA'
  ], {
    A: 'kubejs:abyss_ingot',
    B: 'minecraft:granite'
  }).id('atlanabyss:granite_alloy_x');

  create.mixing('kubejs:granite_alloy', [
    'minecraft:granite',
    'minecraft:dried_kelp'
  ]).id('atlanabyss:mixing_granite_alloy');
  create.mixing('16x kubejs:granite_alloy', [
    'minecraft:granite',
    'kubejs:abyss_ingot'
  ]).id('atlanabyss:mixing_granite_alloy_x');

  thermal.smelter('kubejs:granite_alloy', [
    'minecraft:dried_kelp',
    'minecraft:granite'
  ]).energy(3200).id('atlanabyss:smelter_granite_alloy');
  thermal.smelter('16x kubejs:granite_alloy', [
    'kubejs:abyss_ingot',
    'minecraft:granite'
  ]).energy(3200).id('atlanabyss:smelter_granite_alloy_x');
  //焦黑砖
  event.smelting('tconstruct:seared_brick', 'kubejs:granite_alloy').xp(.3).id('atlanabyss:smelting_seared_brick')

  //熔渣
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      tag: 'create:stone_types/scoria'
    },
    result: {
      fluid: 'tconstruct:scorched_stone',
      amount: 1000
    },
    temperature: 500,
    time: 100
  }).id('atlanabyss:tc_melting_scoria');

  //魂钢配方补
  event.shaped('tconstruct:soulsteel_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'tconstruct:soulsteel_ingot'
  }).id('atlanabyss:soulsteel_block_from_ingot')
  event.shapeless('9x tconstruct:soulsteel_ingot', [
    'tconstruct:soulsteel_block'
  ]).id('atlanabyss:soulsteel_ingot_from_block')
  event.shaped('tconstruct:soulsteel_ingot', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'tconstruct:soulsteel_nugget'
  }).id('atlanabyss:soulsteel_ingot_from_nugget')
  event.shapeless('9x tconstruct:soulsteel_nugget', [
    'tconstruct:soulsteel_ingot'
  ]).id('atlanabyss:soulsteel_nugget_from_ingot')

  //紫水晶黄铜
  remove('createaddition:compat/tconstruct/amethyst_bronze')
  create.mixing('4x tconstruct:amethyst_bronze_ingot', [
    '3x minecraft:copper_ingot',
    'thermal:tin_ingot',
    'minecraft:amethyst_shard'
  ]).heated().id('atlanabyss:mixing_amethyst_bronze_ingot');

  remove('thermal:compat/tconstruct/smelter_alloy_tconstruct_amethyst_bronze_ingot')
  thermal.smelter('4x tconstruct:amethyst_bronze_ingot', [
    '3x minecraft:copper_ingot',
    'thermal:tin_ingot',
    'minecraft:amethyst_shard'
  ]).energy(4000).id('atlanabyss:smelter_amethyst_bronze_ingot');

  remove('tconstruct:smeltery/alloys/molten_amethyst_bronze')
  event.custom({
    'type': 'tconstruct:alloy',
    'inputs': [
      { 'tag': 'forge:molten_copper', 'amount': 90 },
      { 'tag': 'forge:molten_tin', 'amount': 270 },
      { 'tag': 'tconstruct:molten_amethyst', 'amount': 100 }
    ],
    'result': {
      'fluid': 'tconstruct:molten_amethyst_bronze',
      'amount': 360
    },
    'temperature': 820
  }).id('atlanabyss:alloy_molten_amethyst_bronze');



  //燃料
  remove('twilightforest:smeltery/melting/fuel/fiery_essence')
  event.custom({
    'type': 'tconstruct:melting_fuel',
    'fluid': {
      'name': 'kubejs:molten_plutonium',
      'amount': 50
    },
    'duration': 50,
    'temperature': 5000
  }).id('atlanabyss:melting_fuel_molten_plutonium')

  //无尽材料
  event.custom({
    type: 'tconstruct:material',
    ingredient: {
      tag: 'forge:ingots/infinity'
    },
    value: 1,
    needed: 1,
    material: 'kubejs:infinity'
  }).id('atlanabyss:material_infinity')

  //升级槽
  event.custom({
    type: 'tconstruct:incremental_modifier',
    input: {
      item: 'kubejs:lutetium_ingot'
    },
    amount_per_item: 1,
    needed_per_level: 42,
    tools: {
      tag: 'tconstruct:modifiable'
    },
    allow_crystal: true,
    result: {
      name: 'kubejs:lutetium',
      level: 1
    },
    max_level: 3
  }).id('atlanabyss:modifier_infinity')
  //能力槽
  event.custom({
    type: 'tconstruct:incremental_modifier',
    input: {
      item: 'kubejs:elemental_ingot'
    },
    amount_per_item: 1,
    needed_per_level: 10,
    tools: {
      tag: 'tconstruct:modifiable'
    },
    allow_crystal: true,
    result: {
      name: 'kubejs:elemental',
      level: 1
    },
    max_level: 10
  }).id('atlanabyss:modifier_elemental')



  function casting_table(input, amount) {
    event.custom({
      type: 'tconstruct:casting_table',
      cast: { item: input, type: 'tconstruct:material' },
      cast_consumed: true,
      switch_slots: true,
      fluid: { tag: 'forge:molten_brass', amount: 270 },
      result: input + '_cast',
      cooling_time: 57
    })
  }

  //黄铜铸模
  remove('tconstruct:smeltery/casts/gold_casts/bow_grip')
  remove('tconstruct:smeltery/casts/gold_casts/bow_limb')
  remove('tconstruct:smeltery/casts/gold_casts/tough_handle')
  remove('tconstruct:smeltery/casts/gold_casts/tool_handle')
  remove('tconstruct:smeltery/casts/gold_casts/large_plate')
  remove('tconstruct:smeltery/casts/gold_casts/round_plate')
  remove('tconstruct:smeltery/casts/gold_casts/tool_binding')
  remove('tconstruct:smeltery/casts/gold_casts/broad_axe_head')
  remove('tconstruct:smeltery/casts/gold_casts/broad_blade')
  remove('tconstruct:smeltery/casts/gold_casts/hammer_head')
  remove('tconstruct:smeltery/casts/gold_casts/small_blade')
  remove('tconstruct:smeltery/casts/gold_casts/small_axe_head')
  remove('tconstruct:smeltery/casts/gold_casts/pick_head')
  remove('tconstruct:smeltery/casts/gold_casts/wires')
  remove('tconstruct:smeltery/casts/gold_casts/repair_kit')
  remove('tconstruct:smeltery/casts/gold_casts/rods')
  remove('tconstruct:smeltery/casts/gold_casts/gems')
  remove('tconstruct:smeltery/casts/gold_casts/nuggets')
  remove('tconstruct:smeltery/casts/gold_casts/ingots')

  casting_table('tconstruct:bow_grip')
  casting_table('tconstruct:bow_limb')
  casting_table('tconstruct:tough_handle')
  casting_table('tconstruct:tool_handle')
  casting_table('tconstruct:large_plate')
  casting_table('tconstruct:round_plate')
  casting_table('tconstruct:tool_binding')
  casting_table('tconstruct:broad_axe_head')
  casting_table('tconstruct:broad_blade')
  casting_table('tconstruct:hammer_head')
  casting_table('tconstruct:small_blade')
  casting_table('tconstruct:small_axe_head')
  casting_table('tconstruct:pick_head')
  casting_table('tconstruct:repair_kit')

  remove('thermal:chiller_ball_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { item: 'minecraft:slime_ball' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 810 },
    result: 'thermal:chiller_ball_cast',
    cooling_time: 120
  }).id('atlanabyss:casting_table_chiller_ball_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { item: 'thermal:chiller_ball_cast' },
    fluid: { tag: 'forge:lucky_fluid', amount: 1000 },
    result: 'kubejs:halo_gashapon',
    cooling_time: 1200
  }).id('atlanabyss:casting_table_halo_gashapon')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:wires' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 270 },
    result: 'tconstruct:wire_cast',
    cooling_time: 60
  }).id('atlanabyss:casting_table_wire_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:rods' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 270 },
    result: 'tconstruct:rod_cast',
    cooling_time: 60
  }).id('atlanabyss:casting_table_rod_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:gems' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 270 },
    result: 'tconstruct:gem_cast',
    cooling_time: 60
  }).id('atlanabyss:casting_table_gem_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:nuggets' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 270 },
    result: 'tconstruct:nugget_cast',
    cooling_time: 60
  }).id('atlanabyss:casting_table_nugget_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:ingots' },
    cast_consumed: true,
    switch_slots: true,
    fluid: { tag: 'forge:molten_brass', amount: 270 },
    result: 'tconstruct:ingot_cast',
    cooling_time: 60
  }).id('atlanabyss:casting_table_ingot_cast')

  //创造升级
  event.shapeless(Item.of('tconstruct:creative_slot', '{slot:"abilities"}'), [
    'kubejs:infinity_ingot',
    'kubejs:polished_candy_crystal'
  ]).id('atlanabyss:creative_slot_abilities')
  event.shapeless(Item.of('tconstruct:creative_slot', '{slot:"defense"}'), [
    'kubejs:infinity_ingot',
    'kubejs:polished_sulfur'
  ]).id('atlanabyss:creative_slot_defense')
  event.shapeless(Item.of('tconstruct:creative_slot', '{slot:"upgrades"}'), [
    'kubejs:infinity_ingot',
    'create:polished_rose_quartz'
  ]).id('atlanabyss:creative_slot_upgrades')
  event.shapeless(Item.of('tconstruct:creative_slot', '{slot:"souls"}'), [
    'kubejs:infinity_ingot',
    'kubejs:polished_charged_certus_quartz'
  ]).id('atlanabyss:creative_slot_souls')
})
