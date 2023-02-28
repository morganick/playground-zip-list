# Playgroud - Zip List

This is just a playground project to get some ideas out of my head and flex my understanding of mainly TypeScript generics. There were several other pieces of this setup that were newer to me so I went ahead and added them in; life long learning (3xl).

## Project Setup

* pnpm because Yarn 3 is breaking things and folks are still in the 1.x series because of it. pnpm does links to reduce duplicates and resolution while preserving the `node_modules` directory. Seems fast and great so far.
* Vite because it's fast, has HMR, and near zero config. Webpack and I have never gotten along. How do you pronounce Vite anwyways? Everyone pronouces it differently...
* TailwindCSS - I've used utility CSS before, but with a custom implementation. I wanted to see what I could get away with. This project would have been faster for me to do in raw CSS, but speed was not the goal. Learning was.
* Vitest - It has a compatible API with Jest and works off of the Vite build pipeline; efficiency++. All of the specs run in 1ms and has a VSCode extension that runs them on save with pretty icons. Not sure how I feel about test failures stealing my panel focus, but that might be configurable.

## Functional Core

I wanted to see how far I could take this with just using the `useReducer` hook. Immutable state sure does get noisy fast. In Elm, you'd use messages and commands so that you could segment off state updates. This doesn't have that much state yet.