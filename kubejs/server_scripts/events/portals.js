onEvent('block.right_click', (e) => {
    const { block, player, server } = e;

    let portalBlock = 'minecraft:diamond_block'; // 传送门方块
    let frame = 'minecraft:obsidian'; // 传送门框架
    if (block.id != portalBlock || e.hand != 'main_hand') return;

    let dim = player.level.dimension;
    let per = player.persistentData;
    let abyssPortal = block.north == frame && block.south == frame && block.west == frame && block.east == frame;

    let one = 'minecraft:overworld'; // 维度
    let two = 'atlanabyss:under_forest';
    let thr = 'atlanabyss:major_fault';
    let PlayerId = player.getName().getString();

    function goAbyss(dimGo, h) {
        let xgo = Math.round(block.x / 2);
        let ygo = h - block.y;
        let zgo = Math.round(block.z / 2);

        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimGo} as ${PlayerId} run tp ${xgo} ${ygo - 2} ${zgo}`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo - 1} ${zgo} ${xgo} ${ygo - 2} ${zgo} air`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo + 1} ${ygo} ${zgo} ${xgo - 1} ${ygo} ${zgo} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo} ${zgo + 1} ${xgo} ${ygo} ${zgo - 1} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo} ${zgo} ${xgo} ${ygo} ${zgo} ${portalBlock}`);
        player.potionEffects.add('minecraft:slow_falling', 200);
        server.scheduleInTicks(20, () => {
            player.playSound('minecraft:block.portal.travel');
            server.tell(`${xgo},${ygo},${zgo}`)
        });
    }
    function backAbyss(dimback, h) {
        let xback = Math.round(block.x * 2);
        let yback = h - block.y;
        let zback = Math.round(block.z * 2);

        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimback} as ${PlayerId} run tp ${xback} ${yback + 1} ${zback}`)
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback + 1} ${zback} ${xback} ${yback + 2} ${zback} air`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback + 1} ${yback} ${zback} ${xback - 1} ${yback} ${zback} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback} ${zback + 1} ${xback} ${yback} ${zback - 1} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback} ${zback} ${xback} ${yback} ${zback} ${portalBlock}`);
        server.scheduleInTicks(40, () => {
            player.playSound('minecraft:block.portal.travel');
            server.tell(`${xback},${yback},${zback}`)
        });
    }
    // function obackAbyss(dimdata) {
    //     let backDim = per.getString(`dim_${dimdata}`);
    //     let backPlayer = player.getName().getString();
    //     let backX = per.getDouble(`pos_${dimdata}_x`);
    //     let backY = per.getDouble(`pos_${dimdata}_y`);
    //     let backZ = per.getDouble(`pos_${dimdata}_z`);

    //     player.playSound('minecraft:block.portal.trigger');
    //     server.runCommandSilent(`execute in ${backDim} as ${backPlayer} run tp ${backX} ${backY} ${backZ}`)
    //     server.scheduleInTicks(40, () => {
    //         player.playSound('minecraft:block.portal.travel');
    //     });
    // }

    if (player.mainHandItem == null) {
        if (dim == thr) {
            if (abyssPortal) {
                if (block.y >= -6) {
                    backAbyss(two, -1);
                } else {
                    player.setStatusMessage('§c传送门过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == two) {
            if (abyssPortal) {
                if (block.y >= 250) {
                    backAbyss(one, 191);
                } else if (block.y <= 5) {
                    goAbyss(thr, -1);
                } else {
                    player.setStatusMessage('§c传送门过高或过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == one) {
            if (abyssPortal) {
                if (block.y <= -58) {
                    goAbyss(two, 191);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        }
    }
})
onEvent('entity.hurt', (e) => {
    const { level, server, entity, source } = e;
    if (source.type == 'outOfWorld' && level.dimension == 'atlanabyss:major_fault') {
        server.runCommandSilent(`execute in atlanabyss:secret_garden as ${entity} run tp ${entity.x} 256 ${entity.z}`)
        e.cancel();
    }
})