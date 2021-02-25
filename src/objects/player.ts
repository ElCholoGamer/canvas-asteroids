import GameObject from '../structures/game-object';
import Bullet from './bullet';

class Player extends GameObject {
	private readonly SPRITE = this.game.sprites.get('ship');
	private readonly SHOOT_SOUND = this.game.sounds.get('shoot');
	private readonly SPRITE_SIZE = 0.4;
	private readonly ROTATION_SPEED = 6;

	private readonly ACCELERATION = 0.2;
	private readonly FRICTION = 0.02;

	private readonly WIDTH = this.SPRITE.width * this.SPRITE_SIZE;
	private readonly HEIGHT = this.SPRITE.height * this.SPRITE_SIZE;

	private readonly forces = Array(360).fill(0);
	private angle = -90;

	public tick() {
		const { controls, canvas } = this.game;

		// Keyboard input
		const up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
		const right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');
		const left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
		const space = controls.isKeyPressed(' ') || controls.isKeyPressed('z');

		// Rotate and wrap angle
		if (right) this.angle += this.ROTATION_SPEED;
		if (left) this.angle -= this.ROTATION_SPEED;
		this.angle = Math.mod(this.angle, 360);

		if (up) {
			// Apply acceleration to current angle
			const index = Math.floor(this.angle);
			this.forces[index] += this.ACCELERATION;
		}

		for (let angle = 0; angle < this.forces.length; angle++) {
			// Apply friction to force
			this.forces[angle] = Math.max(
				0,
				this.forces[angle] * (1 - this.FRICTION)
			);

			// Apply force
			const force = this.forces[angle];

			const radians = Math.radians(angle);
			this.x += Math.cos(radians) * force;
			this.y += Math.sin(radians) * force;
		}

		// Wrap position
		const { width, height } = canvas;
		const halfMaxSize = Math.sqrt(this.WIDTH ** 2 + this.HEIGHT ** 2);

		if (this.x < -halfMaxSize) {
			this.x = width + halfMaxSize;
		} else if (this.x > width + halfMaxSize) {
			this.x = -halfMaxSize;
		}

		if (this.y < -halfMaxSize) {
			this.y = height + halfMaxSize;
		} else if (this.y > height + halfMaxSize) {
			this.y = -halfMaxSize;
		}

		// Shoot
		if (space) {
			const offset = 8;
			const radians = Math.radians(this.angle);
			this.game.scene.instantiate(
				Bullet,
				this.x + Math.cos(radians) * offset,
				this.y + Math.sin(radians) * offset,
				this.angle
			);

			if (!this.SHOOT_SOUND.paused) {
				this.SHOOT_SOUND.pause();
				this.SHOOT_SOUND.currentTime = 0;
			}

			this.SHOOT_SOUND.play();
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.translate(this.x, this.y);
		ctx.rotate(Math.radians(this.angle + 90));

		ctx.drawImage(
			this.SPRITE,
			-(this.WIDTH / 2),
			-(this.HEIGHT / 2),
			this.WIDTH,
			this.HEIGHT
		);
	}
}

export default Player;
