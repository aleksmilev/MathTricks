class Player{
    x_position;
    y_position;

    constructor(position){
        this.x_position = position[0];
        this.y_position = position[1];

        Grid.grid_feald[x_position][y_position].owner = this;
    }

    move_player(new_position){
        this.x_position = new_position[0];
        this.y_position = new_position[1];

        Grid.grid_feald[new_x_position][new_y_position].owner = this;
    }

    get_available_moves(){
        let available_moves = new Array();
        let posible_moves = [[-1, 0, 1], [-1, 0, 1]];

        for (let i = 0 ; i != posible_moves[0].length; i++) {
            for (let j = 0 ; j != posible_moves[1].length; j++) {
                try{
                    if(Grid.grid_feald[this.x_position + i][this.x_position + j].owner != null){
                        available_moves.add(Grid.grid_feald[this.x_position + i][this.x_position + j]);
                    }
                }catch{}
            }
        }

        return available_moves;
    }
}

class Node{
    x_axis;
    y_axis;
    value;

    owner = null;
    
    constructor(position, value){
        this.x_axis = position[0];
        this.y_axis = position[1];

        this.value = value;
    }

    set_owner(new_owner){
        this.owner = new_owner;
    }
}

class Grid{
    static grid_feald = new Array();

    static create_node_row(){
        const node_row = document.createElement("div");
        node_row.classList.add("node_row");
        document.getElementById("game").appendChild(node_row);

        return node_row;
    }
    static create_node(node, node_row){
        const node_el = document.createElement("h1");
        node_el.classList.add("node_el");
        node_el.innerText = node.value;

        node_row.appendChild(node_el);
    }

    x_axis;
    y_axis;

    constructor(dimensions){
        this.x_axis = dimensions[0];
        this.y_axis = dimensions[1];

        for(let i = 0; i < dimensions[0]; i++){
            Grid.grid_feald.push(new Array());

            for(let j = 0; j < dimensions[1]; j++){
                Grid.grid_feald[i].push(new Node([dimensions[0], dimensions[1]], "test"));
            }
        }
    }
}

const a = new Grid([5, 5]);

Grid.grid_feald.forEach(node_row => {
    let curent_row = Grid.create_node_row();

    node_row.forEach(node_el => {
        Grid.create_node(node_el, curent_row);
    })
});