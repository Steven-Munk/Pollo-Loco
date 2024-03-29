class ThrownBottle extends MoveableObject {

    world;
    bottleHitSomething = false;
    bottleDirection = [];

    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_BOTTLE_SPALSH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    offset = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    };


    constructor(x, y) {
        super();
        this.loadAllImages();

        this.y = y;
        this.x = x;
        this.width = 80;
        this.height = 80;

        this.applyGravity();
        this.bottleMovement();
        this.animate();
    }


    /**
     * funciton loads all images of thrown object
     */
    loadAllImages() {
        this.loadImage(this.IMAGES_BOTTLE_ROTATION[0]);
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPALSH);
    }


    /**
     * function disables movement, if bottle hit something
     */
    bottleMovement() {
        this.speedY = 25;
        setInterval(() => {
            if (!this.bottleHitSomething) {
                this.getDirectionFromPepe();
                this.moveRightOrLeft();
            } else {
                this.speedY = 0;
            }
        }, 1000 / 60);
    }


    /**
     * function checks, in which direction pepe is looking
     */
    getDirectionFromPepe() {
        this.bottleDirection.push(this.world.pepeLooksRight);
    }


    /**
     * function moves bottle left or right depending on pepe
     */
    moveRightOrLeft() {
        if (this.bottleDirection[0]) {
            this.x += 10;
        } else {
            this.x -= 10;
        }
    }


    /**
     * function animates bottle on the flight and on hit
     */
    animate() {
        setInterval(() => {
            if (this.bottleHitSomething) {
                this.playAnimation(this.IMAGES_BOTTLE_SPALSH);
            } else {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }
        }, 1000/ 20);
    }
}