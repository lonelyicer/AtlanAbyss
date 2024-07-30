//priority: 0

//隐藏jei物品
onEvent('jei.hide.items', event => {
	const hideId = (name) => event.hide(name);
	const nameId = [
		//                              分割线                              // 
		//                              分割线                              // 
		//                              分割线                              //  
		//TE
		'thermal:sap_bucket',//树汁桶
		'thermal:syrup_bucket',//糖浆桶
		'thermal:resin_bucket',//树脂桶
		'thermal:tree_oil_bucket',//树油桶
		'thermal:gunpowder_block',//火药块
		'thermal:apple_block',//箱装苹果
		'thermal:carrot_block',//箱装胡萝卜
		'thermal:potato_block',//箱装马铃薯
		'thermal:beetroot_block',//箱装甜菜根
		//'thermal:machine_furnace',//熔炉
		//'thermal:machine_sawmill',//锯木机
		//'thermal:machine_press',//冲压机
		'thermal:machine_bottler',//罐装机
		'thermal:machine_brewer',//罐装机
		'thermal:machine_chiller',//冷冻机
		'thermal:machine_refinery',//流体精炼机
		'thermal:machine_pyrolyzer',//热解机
		/^thermal:energy_cell/,//能量框架
		/^thermal:fluid_cell/,//流体框架
		'thermal:iron_plate',//铁板
		'thermal:gold_plate',//金板
		'thermal:copper_plate',//铜板
		'thermal:fluid_reservoir',//大桶
		'thermal:satchel',//背包
		'thermal:potion_infuser',//药水注射器
		'thermal:potion_quiver',//药水箭袋
		'thermal:press_gear_die',//齿轮冲压摸具
		'createaddition:diamond_grit',//钻石粉
		'thermal:copper_nugget',//铜粒
		//青铜
		'thermal:bronze_block',
		'thermal:bronze_ingot',
		'thermal:bronze_nugget',
		'thermal:bronze_dust',
		'thermal:bronze_plate',
		'thermal:bronze_coin',
		//发电机
		'thermal:dynamo_stirling',
		'thermal:dynamo_gourmand',
		'thermal:dynamo_disenchantment',
		//齿轮
		'thermal:gold_gear',
		'thermal:copper_gear',
		'thermal:netherite_gear',
		'thermal:lapis_gear',
		'thermal:diamond_gear',
		'thermal:emerald_gear',
		'thermal:quartz_gear',
		'thermal:tin_gear',
		'thermal:lead_gear',
		'thermal:silver_gear',
		'thermal:nickel_gear',
		'thermal:bronze_gear',
		'thermal:electrum_gear',
		'thermal:invar_gear',
		'thermal:constantan_gear',
		'thermal:signalum_gear',
		'thermal:lumium_gear',
		'thermal:steel_gear',
		//模具
		'thermal:press_coin_die',
		'thermal:press_gear_die',
		'thermal:press_packing_2x2_die',
		'thermal:press_packing_3x3_die',
		'thermal:press_unpacking_die',
		'thermal:chiller_ball_cast',
		'thermal:chiller_ingot_cast',
		'thermal:chiller_rod_cast',
		//玫瑰金
		'thermal:rose_gold_ingot',
		'thermal:rose_gold_nugget',
		'thermal:rose_gold_plate',
		'thermal:rose_gold_dust',
		'thermal:rose_gold_gear',
		'thermal:rose_gold_coin',
		'thermal:rose_gold_block',
		//钱币
		'thermal:iron_coin',
		'thermal:netherite_coin',
		'thermal:tin_coin',
		'thermal:lead_coin',
		'thermal:nickel_coin',
		'thermal:electrum_coin',
		'thermal:invar_coin',
		'thermal:constantan_coin',
		'thermal:signalum_coin',
		'thermal:lumium_coin',
		'thermal:enderium_coin',
		'thermal:steel_coin',
		'thermal:gold_coin',
		'thermal:copper_coin',
		'thermal:silver_coin',
		//矿
		'thermal:sulfur_ore',
		'thermal:deepslate_sulfur_ore',
		//                              分割线                              // 
		//                              分割线                              // 
		//                              分割线                              // 
		//create
		'create:dough',
		'create:bar_of_chocolate',
		//createaddition
		'createaddition:electrum_ingot',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		//createoreexcavation
		'createoreexcavation:raw_diamond',
		'createoreexcavation:raw_emerald',
		'createoreexcavation:raw_redstone',
		'createoreexcavation:extractor',
		//phosphophyllite
		'phosphophyllite:fluid_white_hole',
		'phosphophyllite:fluid_black_hole',
		'phosphophyllite:item_white_hole',
		'phosphophyllite:item_black_hole',
		'phosphophyllite:phosphophyllite_ore',
		'phosphophyllite:power_white_hole',
		'phosphophyllite:power_black_hole',
		'phosphophyllite:debug_tool',
		//biggerreactors
		'biggerreactors:uranium_ore',
		'biggerreactors:wrench',
		'biggerreactors:ludicrite_ingot',
		'biggerreactors:ludicrite_dust',
		'biggerreactors:cyanite_dust',
		'biggerreactors:cyanite_block',
		'biggerreactors:blutonium_dust',
		'biggerreactors:blutonium_block',
		'biggerreactors:reactor_computer_port',//电脑端口
		'biggerreactors:turbine_computer_port',
		'biggerreactors:heat_exchanger_computer_port',
		//extendedcrafting
		'extendedcrafting:luminessence',
		'extendedcrafting:black_iron_slate',
		'extendedcrafting:ender_star',
		'extendedcrafting:pedestal',
		'extendedcrafting:ender_alternator',
		'extendedcrafting:ender_crafter',
		'extendedcrafting:recipe_maker',
		'extendedcrafting:crafting_core',
		'extendedcrafting:handheld_table',
		/^extendedcrafting:.*block/,
		/^extendedcrafting:.*ingot/,
		/^extendedcrafting:.*nugget/,
		/^extendedcrafting:.*catalyst/,
		/^extendedcrafting:.*component/,
		/^extendedcrafting:.*table/,
		//industrialforegoing
		'industrialforegoing:pitiful_generator',//发电机
		'industrialforegoing:plastic',//塑料片
		'industrialforegoing:fluid_extractor',//液体提取机
		'industrialforegoing:iron_gear',
		'industrialforegoing:iron_gear',
		'industrialforegoing:diamond_gear',
		'industrialforegoing:machine_frame_pity',
		'industrialforegoing:machine_frame_simple',
		'industrialforegoing:machine_frame_advanced',
		'industrialforegoing:machine_frame_advanced',
		//ae2
		'ae2:ender_dust',
		'ae2:vibration_chamber',
		'ae2:charger',
		'ae2:silicon_press',
		//pipez
		'pipez:wrench',
		//neapolitan
		'neapolitan:milk_bottle',
		//kitchenkarrot
		'kitchenkarrot:ice_cubes',
		//tconstruct
		'tconstruct:netherite_nugget',//下界合金粒
		'tconstruct:copper_nugget',//铜粒
		'tconstruct:honey_bucket',
		'tconstruct:grout',//砖泥
		'tconstruct:coin_cast',//币模具
		'tconstruct:round_plate_sand_cast',
		'tconstruct:round_plate_red_sand_cast',
		'tconstruct:gear_cast',//齿轮模具
		'tconstruct:gear_sand_cast',
		'tconstruct:gear_red_sand_cast',
		//beyond_earth
		'beyond_earth:steel_ingot',
		'beyond_earth:steel_nugget',
		'beyond_earth:steel_block',
		'beyond_earth:coal_generator',
		'beyond_earth:water_pump',
		'beyond_earth:iron_plate',
		'beyond_earth:desh_plate',
		//黑紫方块
		'citadel:fancy_item',
		'decorative_blocks:blockstate_copy_item',
		//ftb
		/^itemfilters:/,
	];
	nameId.forEach(hideId);
});


//隐藏jei类别
onEvent('jei.remove.categories', event => {
	[
		//'thermal:furnace', //热力熔炉
		//'thermal:sawmill', //热力锯木机
		//'thermal:press',//冲压机
		'thermal:brewer',//罐装机
		'thermal:chiller',//冷冻机
		'thermal:refinery',//流体精炼机
		'thermal:pyrolyzer',//热解机
		'thermal:bottler',//流体罐装机
		//能源炉
		'thermal:stirling_fuel',//斯特林能源炉
		'thermal:disenchantment_fuel',//祛魔能源炉
		'thermal:gourmand_fuel',//饕餮能源炉
		//发电机
		'beyond_earth:coal_generator',
		//液体提取机
		'industrialforegoing:fluid_extractor'
	].forEach(cat => {
		event.remove(cat)
	})
})

//隐藏jei流体
onEvent('jei.hide.fluids', event => {
	[
		//'industrialforegoing:essence',//精华液
		'thermal:sap',
		'thermal:syrup',
		'thermal:resin',
		'thermal:tree_oil',
		'cofh_core:honey',
		'cofh_core:potion',
		'sophisticatedcore:xp_still',
		'biggerreactors:liquid_obsidian',
		'beyond_earth:oil',
		'tconstruct:honey',
	].forEach(fluid => {
		event.hide(fluid);
	});
});

onEvent('jei.information', event => {
	event.add('biggerreactors:cyanite_ingot', ['核废料', '可通过裂变反应堆的产出获得。'])
	event.add('kubejs:divine_ore', ['颠倒维度特产品', '使用带时运的稿子破坏深板岩概率掉落。'])
	event.add('kubejs:osmium_scrap', ['守卫者死亡时概率掉落。', '（也许你需要设计建造一个守卫者农场）'])
})

onEvent('jei.add.items', event => {
	event.add('thermal:nuke_tnt');
	event.add('thermal:nuke_grenade');
	event.add('minecraft:dragon_egg');
})


