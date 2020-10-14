class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
	    this.y = y;
    }

    negative() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    add(vector) {
        if(vector instanceof Vector2D) {
            this.x += vector.x;
            this.y += vector.y;
        } else {
            this.x += vector;
            this.y += vector;
        }
    }

    subtract(vector) {
        if(vector instanceof Vector2D) {
            this.x -= vector.x;
            this.y -= vector.y;
        } else {
            this.x -= vector;
            this.y -= vector;
        }
    }

	multiply(vector) {
        if(vector instanceof Vector2D) {
            this.x *= vector.x;
            this.y *= vector.y;
        } else {
            this.x *= vector;
            this.y *= vector;
        }
    }

    divide(vector) {
        if(vector instanceof Vector2D) {
            if(vector.x != 0) this.x /= vector.x;
            if(vector.y != 0) this.y /= vector.y;
        } else {
            if(vector != 0) {
                this.x /= vector;
                this.y /= vector;
            }
        }
    }

    equals(vector) {
        if(vector instanceof Vector2D) {
            return this.x == vector.x && this.y == vector.y;
        } else return this.x == vector[0] && this.y == vector[1];
    }
    
    dot(vector) {
        if(vector instanceof Vector2D) {
            return this.x * vector.x + this.y * vector.y;
        } else return this.x * vector[0] + this.y * vector[1];
    }

    cross(vector) {
        if(vector instanceof Vector2D) {
            return this.x * vector.y - this.y * vector.x;
        } else return this.x * vector[1] - this.y * vector[0];
    }

    length() {
        return Math.sqrt(this.dot(this));
    }
    
    normalize() {
        return this.divide(this.length());
    }

    min() {
        return Math.min(this.x, this.y);
    }

    max() {
        return Math.max(this.x, this.y);
    }
    
    toAngles() {
        return -Math.atan2(-this.y, this.x);
    }

    angleTo(angle) {
        return Math.acos(this.dot(angle) / (this.length() * angle.length()));
    }

    toArray(n) {
        return [ this.x, this.y ].slice(0, n || 2);
    }

    clone() {
        return new Vector2D(this.x, this.y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
}

window.Vector2D = Vector2D;