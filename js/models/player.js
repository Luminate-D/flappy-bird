class Player {
    constructor(x = 250, y = 250) {
        this.width = 50;
        this.height = 40;
        this.vector = new Vector2D(x, y);
        this.score = 0;
        this.died = false;

        this.velocity = new Vector2D(0, 0);

        this.image = new Image();
        this.image.src = './img/bird.png';
    }

    die() {
        this.died = true;
    }

    update() {
        this.velocity.y += GRAVITY;
        this.vector.add(this.velocity);
        if(this.vector.y >= canvas.height && this.died) this.vector.subtract(this.velocity);
    }

    flap() {
        if(this.died) return;
        this.velocity.y = -10;
    }

    render() {
        ctx.drawImage(this.image, this.vector.x, this.vector.y, this.width, this.height);
    }
}