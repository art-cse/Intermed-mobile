# Intermed-mobile — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova

Next.js me pamjen 1Clinic Intermed dhe rrjedhën RideShare të detyrës. Lista lexon `await lexoUdhetimet()`, detajet dhe kërkesa lexojnë `await gjejUdhetimin(id)`. Të tri faqet kanë `dynamic = "force-dynamic"`. `server-only` mbron lidhjen, ndërsa SQL-ja për ID përdor parametra.

U lidh projekti Neon Intermed, plani Free, dega production, databaza neondb. Agjenti ekzekutoi `schema.sql` përmes Neon driver, jo me klikim në SQL Editor. Ekzekutimi i dytë ruajti saktësisht tri rreshta, pa kopje. Të dhënat janë fiktive.

## Provat që bëra

Provat u kryen nga Codex më 08.10.2026 kundër Neon reale dhe aplikacionit lokal. Nuk deklarohen si demonstrim personal i studentit në klasë.

### Prova 1: Ndryshimi në databazë shfaqet në aplikacion

Kaloi. `UPDATE udhetimet SET ora = '08:25' WHERE id = '2';` u ekzekutua përmes Neon driver. Kërkesat e reja për `/` dhe `/udhetimi/2` shfaqën 08:25 pa ndryshuar kodin. Pas rikthimit në 08:15, lista dhe detajet shfaqën përsëri 08:15.

### Prova 2: Lista bosh dhe rikthimi

Kaloi. Vetëm te `lexoUdhetimet`, pyetja u ndryshua përkohësisht në `FROM udhetimet WHERE false ORDER BY id`. U shfaq “Nuk ka udhëtime për momentin.” me zero karta. Pas heqjes së `WHERE false` dhe përfundimit të rikompilimit të Next.js, u rikthyen tri kartat. Nuk u fshi asnjë rresht.

### Prova 3: Lidhja mungon, rikthimi dhe siguria

Kaloi. `DATABASE_URL` u riemërtua në `DATABASE_URL_PA_TEST` në `.env.local`. Pas ndaljes dhe rinisjes së serverit, lista shfaqi “Nuk u lidhëm me databazën. Provo përsëri.” Pas rikthimit të emrit dhe një rinisjeje tjetër u shfaqën tri kartat nga Neon.

`git check-ignore` konfirmoi përjashtimin e `.env.local`. Kredencialet, node_modules dhe .next nuk përfshihen në commit. Nuk përdoret NEXT_PUBLIC_ për lidhjen private.

### Kontrolle shtesë

- ID 3: butoni është disabled; hapja direkte e kërkesës shfaq “Nuk ka vende të lira.”
- ID 99: HTTP 404 dhe “Udhëtimi nuk u gjet”.
- ID 2: “Simulim: Në pritje”; mesazhi sqaron se kërkesa nuk është dërguar.
- Në 375 px u shfaqën tri karta pa lëvizje horizontale. U provua listë → detajet e ID 2 → kërkesë → detaje → listë.
- `npm run build` dhe `npm run typecheck` kaluan gjatë përgatitjes së projektit.

Në fund u rikthyen ora 08:15, pyetja pa WHERE false dhe emri DATABASE_URL.

## Ku gjendet puna

Repository publik: https://github.com/art-cse/Intermed-mobile

Kodi është te aplikacioni/, SQL-ja te aplikacioni/schema.sql, lidhja te src/lib/db.ts, pyetjet te src/lib/udhetimet.ts, faqet te src/app/ dhe karta te src/components/KartaUdhetimi.tsx. Raporti është pranë README. Vercel nuk është publikuar; publikimi online është opsional këtë javë.

## Çfarë mbetet për përmirësim

Kërkesa mbetet simulim: nuk ruhet rezervim dhe nuk njoftohet shoferi. Demonstrimi nga studenti dhe puna me kolegun në klasë mbeten për t'u bërë personalisht. Publikimi në Vercel mund të shtohet më vonë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Codex përgatiti projektin nga shembulli i Prof. Arben Lila, pamjen, SQL-në dhe dokumentimin; lidhi Neon dhe kreu kontrollet e mësipërme me HTTP dhe shfletues. Studenti u identifikua në shërbimet përkatëse. Nuk pretendohet që studenti i ka kryer ose verifikuar personalisht provat në klasë.
