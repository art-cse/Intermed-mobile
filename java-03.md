# Java 3 · RideShare

## Prova 1 · Lista në telefon
Verifikova faqen kryesore me një viewport të ngjashëm me 375px. Aplikacioni shfaq pikërisht 3 karta udhëtimesh, teksti është i lexueshëm, nuk ka scroll horizontal dhe layout-i mbetet i qartë dhe i hapur në telefon.

## Prova 2 · Detajet dhe rastet kufitare
Faqja /udhetimi/2 shfaq detajet e udhëtimit me vendtakimin e saktë: "Te stacioni kryesor". Faqja /udhetimi/3 shfaq 0 vende të lira dhe butonin joaktiv "Nuk ka vende të lira". Faqja /udhetimi/99 trigger-oi not-found të personalizuar me mesazhin "Udhëtimi nuk u gjet" dhe një lidhje për kthim te lista.

## Prova 3 · Kërkesa e simuluar dhe kthimi
Nga një udhëtim me vende të lira, klikova në "Kërko vend" dhe u hap faqja e kërkesës. Ajo shfaq saktësisht "Simulim: Në pritje" me tekstin shpjegues që kërkesa nuk është dërguar në realitet. Kthimi në faqen e detajeve funksionon normalisht me lidhjen "← Kthehu te detajet".

## Çfarë ndërtova
Lista me komponentin KartaUdhetimi, detajet /udhetimi/[id], kërkesa /udhetimi/[id]/kerkesa dhe faqja not-found. Funksionaliteti i Javës 3 u ruajt në versionin e Javës 4; të dhënat tashmë lexohen nga Neon.

## Çfarë do të përmirësoj
Ruajtja reale e kërkesës dhe konfirmimi nga shoferi janë jashtë rrjedhës së këtyre javëve. Simulimi duhet të mbetet i qartë për përdoruesin.

## Ndihma nga AI
U ruajt raporti ekzistues nga dosja rideshare-mobile. Codex shtoi përmbledhjen dhe kontrolloi përputhjen me versionin aktual. Provat e agjentit për të njëjtën rrjedhë janë dokumentuar veçmas te java-04.md; nuk u rindërtua aplikacioni i përfunduar.
