onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }
    const { createsifter } = event.recipes;

    //筛沙砾
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.05),
        Item.of('create:copper_nugget').withChance(0.03),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], [
        'minecraft:gravel',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_gravel')

    remove('createsifter:sifting/gravel_andesite_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.10),
        Item.of('create:copper_nugget').withChance(0.08),
        Item.of('thermal:tin_nugget').withChance(0.05),
        Item.of('thermal:nickel_nugget').withChance(0.04),
        Item.of('minecraft:gunpowder').withChance(0.20)
    ], [
        'minecraft:gravel',
        'createsifter:andesite_mesh'
    ]).processingTime(500).id('atlanabyss:andesite_mesh_gravel')

    remove('createsifter:sifting/gravel_zinc_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.15),
        Item.of('create:copper_nugget').withChance(0.12),
        Item.of('thermal:tin_nugget').withChance(0.10),
        Item.of('thermal:nickel_nugget').withChance(0.08),
        Item.of('create:zinc_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.30)
    ], [
        'minecraft:gravel',
        'createsifter:zinc_mesh'
    ]).processingTime(500).id('atlanabyss:zinc_mesh_gravel')

    remove('createsifter:sifting/gravel_brass_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.24),
        Item.of('create:copper_nugget').withChance(0.18),
        Item.of('thermal:tin_nugget').withChance(0.15),
        Item.of('thermal:nickel_nugget').withChance(0.12),
        Item.of('create:zinc_nugget').withChance(0.10),
        Item.of('minecraft:gold_nugget').withChance(0.05),
        Item.of('thermal:silver_nugget').withChance(0.03),
        Item.of('minecraft:gunpowder').withChance(0.50)
    ], [
        'minecraft:gravel',
        'createsifter:brass_mesh'
    ]).processingTime(500).id('atlanabyss:brass_mesh_gravel')

    //筛泥土
    createsifter.sifting([
        Item.of('minecraft:wheat_seeds').withChance(0.1),
        Item.of('kubejs:cottons_seed').withChance(0.09),
        Item.of('farmersdelight:tomato_seeds').withChance(0.08),
        Item.of('farmersdelight:cabbage_seeds').withChance(0.07),
        Item.of('farmersdelight:rice').withChance(0.06),
        Item.of('farmersdelight:onion').withChance(0.05),
        Item.of('minecraft:melon_seeds').withChance(0.04),
        Item.of('minecraft:pumpkin_seeds').withChance(0.03),
        Item.of('minecraft:cocoa_beans').withChance(0.02),
        Item.of('minecraft:beetroot_seeds').withChance(0.01),
    ], [
        '#minecraft:dirt',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_dirt')
})