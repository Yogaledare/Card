## **Uppgift 2: Dra ett kort** 

Deck of Cards API låter oss dra kort från en eller flera kortlekar. I response body så får man både vilket värde kortet har (suit och value) samt en url till en bild på det dragna kortet. Dokumentation: [http://deckofcardsapi.com/ ](http://deckofcardsapi.com/)

Ni ska skriva en sida som visar ett kort i taget när användaren klickar på en knapp. 

1. Skapa en `<button></button>`.
2. Skapa en `<div></div>` där bilden på kortet ska skivas ut. 
3. Skriv en liknande js-fil som i föregående uppgift med vissa skillnader: 
*  Använd denna URI för fetchen: "https://deckofcardsapi.com/api/deck/new/draw/?count=1" 
*  Kolla i dokumentationen för att se hur du ska plocka ut url:en till bilden på kortet från data. 
*  Använd createElement, setAttribute, innerHTML och appendChild för att skapa ett image-element, sätta dess src-attribut, nollställa div-en och lägga till image-elementet till den. 
4. Lägg till en eventListener som lyssnar på knappen och kör ovanstående funktion vid klick. 

**Extra** 

Bygg ett kortspel :) Tag hjälp av dokumentationen för apiet. Ni väljer själv vad ni bygger. Ett enkelt Blackjack spel kanske? 
