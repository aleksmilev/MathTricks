export class Player{
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