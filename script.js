const a = new Grid([5, 5]);

const pl1 = new Player([0,0], "pl1", "#0000FF");
const pl2 = new Player([4,4], "pl2", "#FF0000");


pl1.get_available_moves().forEach(node => {
    let node_position = JSON.parse(node.get_position());

    node.mark_node();
});