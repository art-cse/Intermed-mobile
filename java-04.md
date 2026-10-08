# 1Clinic Intermed / RideShare — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova

Projekti Next.js përdor emrin 1Clinic Intermed dhe rrjedhën RideShare të detyrës.
Lista lexon `lexoUdhetimet()`, ndërsa detajet dhe kërkesa përdorin
`await gjejUdhetimin(id)`. Të dhënat lexohen me SQL nga Neon vetëm në server.
`server-only` mbron lidhjen; `DATABASE_URL` nuk publikohet. Të tri faqet kanë
`dynamic = "force-dynamic"`. SQL-ja krijon tri udhëtime fiktive pa kopje.

## Provat që bëra

### Prova 1: Ndryshimi në databazë shfaqet në aplikacion

Status: në pritje të lidhjes me një databazë Neon. Nuk është verifikuar ende
ndryshimi real i ID 2 nga 08:15 në 08:25, shfaqja në listë dhe detaje, ose
rikthimi në 08:15. Komandat dhe hapat e saktë janë te README.

### Prova 2: Lista bosh dhe rikthimi

Status: në pritje të databazës. Kodi përfshin mesazhin “Nuk ka udhëtime për
momentin.” për rezultat bosh. Testi me `WHERE false` dhe rikthimi i tri kartave
nuk janë kryer ende me Neon; implementimi nuk paraqitet si provë e përfunduar.

### Prova 3: Lidhja mungon, rikthimi dhe siguria

Status: pjesërisht e verifikuar nga Codex më 08.10.2026. Pa `DATABASE_URL`,
serveri i prodhimit shfaqi “Nuk u lidhëm me databazën. Provo përsëri.” te `/`,
`/udhetimi/2`, `/udhetimi/2/kerkesa` dhe `/udhetimi/99`. Gabimi i lidhjes nuk
paraqitet si ID e panjohur. Në shfletues me gjerësi 375 px, gjendja e gabimit
nuk kishte lëvizje horizontale (`scrollWidth = innerWidth = 375`).

Riemërtimi i një lidhjeje reale dhe rikthimi i tri kartave mbeten në pritje
të Neon. `git check-ignore` konfirmoi përjashtimin e `.env.local`,
`node_modules` dhe `.next`. Nuk janë shtuar kredenciale në kod.

Kontrolle shtesë të agjentit: `npm run build` dhe `npm run typecheck` kaluan.
Këto kontrolle nuk zëvendësojnë provat me databazën në klasë.

## Ku gjendet puna

Kodi është te `aplikacioni/`, SQL-ja te `aplikacioni/schema.sql`, lidhja te
`src/lib/db.ts` dhe leximi te `src/lib/udhetimet.ts`. Faqet janë te `src/app/`
dhe karta te `src/components/KartaUdhetimi.tsx`. Raporti është pranë README.
Repository publik: https://github.com/art-cse/1clinic-intermed . Vercel nuk është publikuar.

## Çfarë mbetet për përmirësim

Duhet lidhur Neon dhe përfunduar provat reale për ndryshimin e orës, listën
bosh, rikthimin e lidhjes, ID 99 dhe zero vende. Kërkesa “Në pritje” është
vetëm simulim; nuk dërgohet njoftim dhe nuk ruhet rezervim.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Codex përgatiti projektin, përshtati kodin e shembullit, SQL-në, pamjen dhe
udhëzimet. Kontrollet që kryen agjenti shënohen si të tilla. Provat me
studentin/kolegun në klasë nuk janë kryer dhe nuk deklarohen si të kryera.
