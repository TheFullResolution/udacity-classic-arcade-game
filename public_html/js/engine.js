/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */
/* global ctx, player, allEnemies, heartBlock7, keyBlock18, iteams, lifeCounter */


var level1 = function () {
    for (col = 0; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -30);
    }
    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, -40);

    /*First Row */
    for (col = 0; col <6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 50);
    }
 /*Second Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 125);
    }
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 130);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 205);
    }
 /*Third Row */

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 285);
    }
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow North.png'), col * 101, 283);
    }
    ctx.drawImage(Resources.get('images/Shadow South West.png'), 300, 205);

/*HOUSE*/
    ctx.drawImage(Resources.get('images/Roof North West.png'), 0 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North.png'), 1 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North East.png'), 2 * 101, 240);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 0 * 101, 460);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 2 * 101, 460);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 0 * 101, 420);
    ctx.drawImage(Resources.get('images/Door Tall Closed.png'), 1 * 101, 470);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 2 * 101, 420);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 1 * 101, 365);


    ctx.drawImage(Resources.get('images/Roof South West.png'), 0 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South.png'), 1 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South East.png'), 2 * 101, 320);

    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 400);
    }

    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 283);


    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 363);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 363);
/*Sixth Row */

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 444);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 444);

    ctx.drawImage(Resources.get('images/Shadow North.png'), 3 * 101, 467);
    ctx.drawImage(Resources.get('images/Shadow North.png'), 5 * 101, 467);
    ctx.drawImage(Resources.get('images/Wall Block.png'), 3 * 101, 465);
    ctx.drawImage(Resources.get('images/Ramp North.png'), 4 * 101, 487);

    ctx.drawImage(Resources.get('images/Wall Block.png'), 5 * 101, 465);

    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 572);
    }

/*trees*/

    ctx.drawImage(Resources.get('images/Tree Ugly.png'), 505, 175);
    ctx.drawImage(Resources.get('images/Tree Short.png'), 305, 345);

};
var level2 = function () {
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -30);
    }

    /*First Row */
    for (col = 0; col <6; col++) {
        ctx.drawImage(Resources.get('images/Dirt Block.png'), col * 101, 30);
    }

    /*Second Row */
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 115);
    }
    ctx.drawImage(Resources.get('images/Rock.png'), 3 * 101, 80);
    ctx.drawImage(Resources.get('images/Rock.png'), 4 * 101, 80);

    /*Third Row */
     for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 2*101, 190);

    for (col = 3; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 5*101, 190);

     /*Fourth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    for (col = 4; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    ctx.drawImage(Resources.get('images/water-block.png'), 3 * 101, 275);

      /*Fifth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 355);
    }
    ctx.drawImage(Resources.get('images/Ramp North.png'), 2 * 101, 352);
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 355);
    }

    /*Sixth Row */
    for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 390);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 435);
    }

    /*Seventh Row */
    for (col = 0; col < 5; col++) {
       ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 550);
    }
    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, 515);
};

var gameStatus = "play";



var Engine = (function(global) {
    /* Predefine the variables we'll be using within this scope,
     * create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 606;
    canvas.height = 664;

    doc.body.appendChild(canvas);

    /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
    function main() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */

        update(dt,now);
        render(now);

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    };

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data. Based on how
     * you implement your collision detection (when two entities occupy the
     * same space, for instance when your character should die), you may find
     * the need to add an additional function call here. For now, we've left
     * it commented out - you may or may not want to implement this
     * functionality this way (you could just implement collision detection
     * on the entities themselves within your app.js file).
     */
    function update(dt,now) {
        updateEntities(dt,now);
        checkCollisions(now);
    }

    /* This is called by the update function  and loops through all of the
     * objects within your allEnemies array as defined in app.js and calls
     * their update() methods. It will then call the update function for your
     * player object. These update methods should focus purely on updating
     * the data/properties related to  the object. Do your drawing in your
     * render methods.
     */
    function checkCollisions(now){
        if (player.immortal < (now/1000)){
        allEnemies.forEach(function(enemy) {
        if (player.x < enemy.x +  enemy.width  && player.x + player.width  > enemy.x &&
		player.y < enemy.y +  enemy.height && player.y + player.height > enemy.y) {
                   player.reset();
        }
        });
    }
        iteams.forEach(function(item) {

        if (player.x < item.x +  item.width  && player.x + player.width  > item.x &&
		player.y < item.y +  item.height && player.y + player.height > item.y) {
                   item.status="picked";
        }
        });


    }

    function updateEntities(dt,now) {

        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update(dt,now);
        iteams.forEach(function(item) {
            item.update();
        });

        lifeCounter.update();

    }


    function render() {

            /*Background*/

        level1();


        renderEntities();
    }

    /* This function is called by the render function and is called on each game
     * tick. It's purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        iteams.forEach(function(item) {
            item.render();
        });

        player.render();
        lifeCounter.render();
    }

    /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. It's only called once by the init() method.
     */
    function reset() {
        // noop
    }

    /* Go ahead and load all of the images we know we're going to need to
     * draw our game level. Then set init as the callback method, so that when
     * all of these images are properly loaded our game will start.
     */
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/char-princess-girl.png',
        'images/char-pink-girl.png',
        'images/Ramp South.png',
        'images/Ramp East.png',
        'images/Ramp North.png',
        'images/Dirt Block.png',
        'images/Ramp West.png',
        'images/Rock.png',
        'images/Wall Block.png',
        'images/enemy-bug-left.png',
        'images/enemy-bug.png',
        'images/Heart.png',
        'images/Key.png',
        'images/char-pink-girl-holding.png',
        'images/char-pink-girl-immortal.png',
        'images/Roof North East.png',
        'images/Roof North West.png',
        'images/Roof South East.png',
        'images/Roof South West.png',
        'images/Roof South.png',
        'images/Window Tall.png',
        'images/Door Tall Closed.png',
        'images/Roof North.png',
        'images/Wood Block.png',
        'images/Shadow North.png',
        'images/Shadow West.png',
        'images/Shadow South West.png',
        'images/Tree Short.png',
        'images/Tree Tall.png',
        'images/Tree Ugly.png',
        'images/Shadow South.png'

    ]);
    Resources.onReady(init);

    /* Assign the canvas' context object to the global variable (the window
     * object when run in a browser) so that developer's can use it more easily
     * from within their app.js files.
     */
    global.ctx = ctx;
})(this);
