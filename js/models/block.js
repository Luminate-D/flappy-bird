class Block {
    constructor(ground = true, lastblock) {
        this.ground = ground;
        this.lb = lastblock;

        if(ground) {
            this.height = range(canvas.height - 100, 250);
        } else {
            this.height = lastblock.height - 175;
        }

        this.vector = new Vector2D(canvas.width, ground ? this.height : 0);
        this.passed = false;
    }

    update() {
        this.vector.x -= SPEED;

        if(!this.passed && !this.ground
            && this.vector.x < player.vector.x && player.vector.y > this.height
            && player.vector.y < this.lb.height && (player.vector.x - this.vector.x < 10))
        if(this.vector.x < player.vector.x && !this.passed && !this.ground
            && player.vector.y > this.height && player.vector.y < this.lb.height) {
            this.passed = true;
            player.score++;
        }
    }

    render() {
        ctx.fillStyle = 'green';
        if(this.ground) ctx.fillRect(this.vector.x, this.vector.y, 50, canvas.height);
        else ctx.fillRect(this.vector.x, 0, 50, this.height);
    }

    collided() {
        if(this.ground) {
            return player.vector.x < this.vector.x + 50 &&
                player.vector.x + player.width > this.vector.x &&
                player.vector.y < this.vector.y + canvas.height &&
                player.vector.y + player.height > this.vector.y;
        } else {
            return player.vector.x < this.vector.x + 50 &&
                player.vector.x + player.width > this.vector.x &&
                player.vector.y < 0 + this.height &&
                player.vector.y + player.height > 0;
        }
    }
}

function range(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

