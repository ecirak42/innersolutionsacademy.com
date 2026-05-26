# Inner Solutions Academy Static Site

This repo is a static rebuild of the current GoHighLevel funnel for
`innersolutionsacademy.com`.

## Pages

- `/` - main Inner Solutions landing page
- `/landing` - same landing page URL preserved from GoHighLevel
- `/learnmore` - booking page with the existing OnceHub scheduler embed
- `/thank-you` - confirmation page

## Local Preview

Run a static server from the repo root:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

Recommended: connect this GitHub repo to Cloudflare Pages, Netlify, or Vercel
and deploy the root directory as a static site. GitHub Pages can also work; the
`CNAME` and `.nojekyll` files are already included for that path.

When the preview deployment is verified, update DNS away from the current
GoHighLevel values:

- Root `A` currently points to `162.159.140.166`.
- `www` currently points to `sites.ludicrous.cloud`.

Replace those records with the DNS records provided by the new host. Do this
only after the new deployment is live and tested.

## Booking Flow

The booking page keeps the existing OnceHub embed:

```html
https://go.oncehub.com/InnerSolutions200?brdr=1pxD8D8D8&dt=&em=1&Si=1
```

If OnceHub is managed separately from GoHighLevel, this should continue working.
If it was bundled with the old GHL setup, replace the iframe URL with the new
scheduler link before switching DNS.
