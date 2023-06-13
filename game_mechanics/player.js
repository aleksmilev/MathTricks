class Player{
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
    }

    get_position(){
        return `[${this.x_position},${this.y_position}]`;  
    }

    move_player(new_position){
        this.x_position = new_position[0];
        this.y_position = new_position[1];

        Grid.grid_feald[new_x_position][new_y_position].owner = this;
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