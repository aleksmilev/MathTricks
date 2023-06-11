import { Grid, Node } from "./game_mechanics/grid.js";
import { Player } from "./game_mechanics/player.js";

const a = new Grid([5, 5]);

Grid.grid_feald.forEach(node_row => {
    let curent_row = Grid.create_node_row();

    node_row.forEach(node_el => {
        Grid.create_node(node_el, curent_row);
    })
});