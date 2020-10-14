class Player {
    constructor(x = 250, y = 250) {
        this.width = 50;
        this.height = 40;
        this.vector = new Vector2D(x, y);
        this.score = 0;
        this.died = false;

        this.velocity = new Vector2D(0, 0);
    }

    die() {
        this.died = true;
    }

    update() {
        this.velocity.y += GRAVITY;
        this.vector.add(this.velocity);
    }

    flap() {
        this.velocity.y = -10;
    }

    render() {
        ctx.fillStyle = this.died ? 'red' : 'black';
        ctx.fillRect(this.vector.x, this.vector.y, this.width, this.height);
    }
}