# 1Clinic Intermed

Projekt për **Programimi për Pajisje Mobile · Java 4 (2026/2027)**.
Emri dhe pamja janë 1Clinic Intermed; rrjedha RideShare, tabela `udhetimet`
dhe adresat e ushtrimit ruhen që projekti të përputhet me detyrën.
Përdoren vetëm tri udhëtime fiktive. Nuk ka të dhëna pacientësh ose rezervime reale.

## Nisja lokale

Kërkohet Node.js 22 ose më i ri.

```sh
cd aplikacioni
npm ci
```

1. Krijo një projekt **Free / $0** në [Neon](https://console.neon.tech/).
2. Ekzekuto `aplikacioni/schema.sql` në SQL Editor të Neon. Skripti krijon
   tabelën dhe tri udhëtime; ekzekutimi i përsëritur nuk krijon kopje.
3. Krijo `aplikacioni/.env.local` dhe vendos lidhjen e plotë nga Neon → Connect:

   ```dotenv
   DATABASE_URL="lidhja-jote-postgresql-nga-neon"
   ```

   Vlera më sipër është vetëm udhëzim, jo kredencial. Mos përdor `NEXT_PUBLIC_`.
   `.env*` përjashtohet nga Git; mos publiko këtë skedar ose pamje të tij.
4. Nis aplikacionin:

   ```sh
   npm run dev
   ```

5. Hap [localhost:3000](http://localhost:3000).

Pa `DATABASE_URL`, aplikacioni tregon gabimin e lidhjes. Nuk ka të dhëna
fikse rezervë që të fshehin mungesën e lidhjes me Neon.

## Çfarë përmban

| Skedari | Funksioni |
| --- | --- |
| `aplikacioni/schema.sql` | Tabela PostgreSQL dhe tri rreshta fiktivë |
| `aplikacioni/src/lib/db.ts` | Lidhja Neon, e mbrojtur me `server-only` |
| `aplikacioni/src/lib/udhetimet.ts` | Leximi async dhe kërkimi me SQL të parametrizuar |
| `aplikacioni/src/app/page.tsx` | Lista, gjendja bosh dhe gabimi i lidhjes |
| `aplikacioni/src/components/KartaUdhetimi.tsx` | Komponenti i kartës |
| `aplikacioni/src/app/udhetimi/[id]/page.tsx` | Detajet dhe butoni për vende të lira |
| `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx` | Kërkesa e simuluar; nuk ruan të dhëna |
| `aplikacioni/src/app/udhetimi/[id]/not-found.tsx` | ID e panjohur dhe kthimi te lista |
| `java-04.md` | Raporti i Javës 4 dhe statusi real i provave |

Të tri faqet lexojnë Neon në çdo kërkesë (`dynamic = "force-dynamic"`).
`notFound()` është jashtë `try/catch` për të dalluar ID-në që mungon nga
gabimi i databazës. Edhe adresa e drejtpërdrejtë e kërkesës kontrollon vendet.

## Provat e detyrës

1. Në Neon: `UPDATE udhetimet SET ora = '08:25' WHERE id = '2';`.
   Rifresko `/` dhe `/udhetimi/2`: të dyja duhet të tregojnë 08:25.
   Rikthe 08:15 dhe kontrollo përsëri të dyja faqet.
2. Vetëm te `lexoUdhetimet`, shto përkohësisht `WHERE false` para `ORDER BY id`.
   Duhet të dalë “Nuk ka udhëtime për momentin.” Hiqe kushtin dhe
   kontrollo rikthimin e tri kartave. Mos fshi rreshtat.
3. Riemërto përkohësisht `DATABASE_URL` në `.env.local`, ndalo dhe rinis serverin.
   Duhet të dalë “Nuk u lidhëm me databazën. Provo përsëri.”
   Rikthe emrin, rinis dhe kontrollo rikthimin e listës.
4. Kontrollo `/udhetimi/3` dhe `/udhetimi/3/kerkesa`: nuk ka vende të lira.
   `/udhetimi/99` duhet të shfaqë “Udhëtimi nuk u gjet”.
5. Provo rrjedhën listë → detaje → kërkesë → kthim në gjerësi 375 px.

Shëno vetëm rezultate të kryera realisht në `java-04.md`.

```sh
npm run typecheck
npm run build
```

## Vercel (opsionale për këtë javë)

Importo repository-n në Vercel, zgjidh **Next.js** dhe **Root Directory:
aplikacioni**. Lidh Neon përmes Storage/Marketplace me planin Free.
Vendos `DATABASE_URL` për Production dhe Development; përdor të njëjtën
degë/databazë për provat lokale. Bëj Redeploy nëse variabla u shtua më vonë.

## Dorëzimi

Udhëzimi kërkon linkun kryesor të repository-t publik, raportin pranë README,
kodin, `schema.sql` dhe `package-lock.json`. `.env.local`, `node_modules`
dhe `.next` nuk duhen dërguar.

[Ushtrimi dhe udhëzimet origjinale](https://arbenl.github.io/lendet/2026-2027/mobile/java-04/ushtrimet.html)
· [Formulari Java 4](https://github.com/arbenl/arbenl-mobile-assignments-2025/issues/new?template=mobile-submission.yml&week=Java%204)

Pasi të përfundojnë provat, përdor formularin dhe lexo kontrollin automatik.
Mos krijo dorëzim të dytë për të njëjtën javë. Kontrolli teknik nuk provon
funksionimin e databazës dhe nuk është notë.

## Burimi dhe ndihma nga AI

Kodi i rrjedhës dhe SQL-ja përshtaten nga shembujt e Javës 3–4 të Prof. Arben Lila.
Codex përgatiti konfigurimin, implementimin, pamjen dhe dokumentimin.
Provat e studentit në klasë nuk deklarohen si të kryera nga AI.

## Rezultati i dorëzimit · Java 4

[Darëzimi #393](https://github.com/arbenl/arbenl-mobile-assignments-2025/issues/393)
kaloi **5/5 kontrolle teknike** më 08.10.2026.
[Komenti i kontrollit](https://github.com/arbenl/arbenl-mobile-assignments-2025/issues/393#issuecomment-6060586926).
Provat reale me Neon dhe kufizimet dokumentohen te `java-04.md`.
Kontrolli automatik nuk është notë; demonstrimi në klasë mbetet përgjegjësi e studentit.
