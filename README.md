This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use Node.js 26 (also specified in `.nvmrc` and `package.json`), then install the locked dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(home)/page.tsx`. The page auto-updates as you edit the file.

Run `npm run lint`, `npm run typecheck`, and `npm run build` to validate changes.

ESLint stays on 9.x and TypeScript on 6.0.x for compatibility with the current Next.js lint plugins. Other dependencies use their latest stable releases at the time of this upgrade.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The `engines.node` field in `package.json` selects Node.js `26.x` for new Vercel deployments, overriding the project's older Node setting. Keep the dashboard's Node.js Version setting at `26.x` as well. Push these changes and redeploy to apply the upgrade.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
