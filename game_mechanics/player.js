class Player{
    static player_turn_index = 0;
    static all_players = new Array();
    static player_turn = Player.all_players[Player.player_turn_index % (Player.all_players.length + 1)];

    x_position;
    y_position;

    name;
    color;

    constructor(position, name, color){
        this.x_position = position[0];
        this.y_position = position[1];

        this.name = name;
        this.color = color

        Grid.grid_feald[this.x_position][this.y_position].set_owner(this);
        Player.all_players.push(this);
    }

    get_position(){
        return `[${this.x_position},${this.y_position}]`;  
    }

    move_player(new_position){
        let old_position = JSON.parse(this.get_position());

        this.x_position = new_position[0];
        this.y_position = new_position[1];

        Grid.grid_feald[this.x_position][this.y_position].set_owner(this);

        const all_noes = document.querySelectorAll(".node_el");
        all_noes.forEach(node => {
            node.removeEventListener("click", Node.handleMove);
        });
    }

    get_available_moves(){
        let available_moves = new Array();
        let posible_moves = [[-1, 0, 1], [-1, 0, 1]];

        posible_moves[0].forEach(x => {
            posible_moves[1].forEach(y => {
                try{
                    //console.log(`Check ${x},${y} : ${Grid.grid_feald[this.x_position + x][this.y_position + y].owner == null}`);
                
                    if(Grid.grid_feald[this.x_position + x][this.y_position + y].owner == null){
                        available_moves.push(Grid.grid_feald[this.x_position + x][this.y_position + y]);
                    }
                }
                catch{}
            });
        });

        return available_moves;
    }
}