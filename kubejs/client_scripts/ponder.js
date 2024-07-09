onEvent('ponder.tag', e => {
    e.createTag('kubejs:compact_controller', 'mm:compact_machine_controller', "Compact Machine", "The Compact Machine", [
        'mm:compact_machine_controller',
        'create:industrial_iron_block',
        'mm:item_input_slot1_port',
        'mm:item_output_slot1_port',
        'ae2:controller',
        'compactmachines:solid_wall'
    ]);
})

onEvent('ponder.registry', e => {
    e.create('mm:compact_machine_controller')
        .scene(
            'kubejs:compact_machine',
            'Build the Compact Machine',
            'kubejs:compact_machine',
            (scene, util) => {
                scene.showBasePlate();
                scene.idle(20);
                scene.scaleSceneView(0.9);

                scene.addKeyframe();
                for (let x = 1; x < 4; x++) {
                    for (let z = 1; z < 4; z++) {
                        scene.world.showSection([x, 1, z], Facing.DOWN);
                        scene.idle(2);
                    }
                    scene.idle(2);
                }
                scene.text(40, 'compactmachines:solid_wall', [2.5, 2, 2.5]);

                scene.idle(60);
                for (let x = 1; x < 4; x++) {
                    for (let z = 1; z < 4; z++) {
                        scene.world.showSection([x, 2, z], Facing.DOWN);
                        scene.idle(2);
                    }
                    scene.idle(2);
                }
                scene.text(40, 'compactmachines:solid_wall', [2.5, 3, 2.5]);

                scene.idle(60);
                for (let z = 3; z > 0; z--) {
                    for (let x = 3; x > 0; x--) {
                        scene.world.showSection([x, 3, z], Facing.DOWN);
                        scene.idle(2);
                    }
                    scene.idle(2);
                }
                scene.addKeyframe();
                scene.text(40, 'ae2:controller', [2.5, 4, 2.5]);
                scene.text(40, 'mm:item_output_slot1_port', [1, 3.5, 2.5]);

                scene.idle(60);
                for (let z = 3; z > 0; z--) {
                    for (let x = 3; x > 0; x--) {
                        scene.world.showSection([x, 4, z], Facing.DOWN);
                        scene.idle(2);
                    }
                    scene.idle(2);
                }
                scene.text(20, 'mm:compact_machine_controller', [2.5, 5, 2.5]);
                scene.text(40, 'mm:item_input_slot1_port', [1, 4.5, 2.5]);

                scene.idle(20);
                scene.showControls(20, util.grid.at(2.5, 4, 2), 'left').rightClick();

                scene.idle(40);
                scene.addKeyframe();
                scene.idle(20);
                scene.rotateCameraY(180);
                scene.idle(40);
                scene.rotateCameraY(180);
            }
        );
})