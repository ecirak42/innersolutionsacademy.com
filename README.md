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

This repo is published with GitHub Pages from the `main` branch at the root
directory.

- Repository: `https://github.com/ecirak42/innersolutionsacademy.com`
- Custom domain: `innersolutionsacademy.com`

When the preview deployment is verified, update DNS away from the current
GoHighLevel values:

- Root `A` currently points to `162.159.140.166`.
- `www` currently points to `sites.ludicrous.cloud`.

Replace those records with GitHub Pages records:

- `@` `A` `185.199.108.153`
- `@` `A` `185.199.109.153`
- `@` `A` `185.199.110.153`
- `@` `A` `185.199.111.153`
- `www` `CNAME` `ecirak42.github.io`

Optional IPv6 records:

- `@` `AAAA` `2606:50c0:8000::153`
- `@` `AAAA` `2606:50c0:8001::153`
- `@` `AAAA` `2606:50c0:8002::153`
- `@` `AAAA` `2606:50c0:8003::153`

After DNS propagates, return to GitHub Pages settings and enable HTTPS if it is
not enabled automatically.

## Booking Flow

The booking page keeps the existing OnceHub embed:

```html
https://go.oncehub.com/InnerSolutions200?brdr=1pxD8D8D8&dt=&em=1&Si=1
```

If OnceHub is managed separately from GoHighLevel, this should continue working.
If it was bundled with the old GHL setup, replace the iframe URL with the new
scheduler link before switching DNS.
