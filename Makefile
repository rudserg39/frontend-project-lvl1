install:
	npm ci

brain-even:
	brain-even

brain-calc:
	brain-calc

brain-gcd:
	brain-gcd

brain-progression:
	brain-progression

brain-prime:
	brain-prime

publish:
	npm publish --dry-run

lint:
	npx eslint .

link:
	npm link

setup:
	install
	link
