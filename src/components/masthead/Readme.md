# Masthead Component

Top-Element in Standalone-Visualisations. Zeigt das Logo des Mediums.

Der Masthead ist absolut positioniert, überdeckt also das nächstfolgende Element. Das mitgelieferte CSS sollte aber den Text in diesem Element korrekt nach unten verschieben.

## Attribute

- mediaName: React.PropTypes.string, Domainname des gewünschten Mediums ohne «.ch». Wenn nicht angegeben, wird die Domain verwendet, unter dem die Visualisation aufgerufen wurde.
- shareUrl: React.PropTypes.string, URL, unter der die Visualisation auf Facebook und Twitter geteilt werden soll.
- twitterShareText: React.PropTypes.string, Text, der beim Tweeten vorausgefüllt werden soll.
- inverted: React.PropTypes.bool, Invertierte Version des Headers für dunkle Hintergründe.

## Changelog

### 1.0.0 (Die Zweite)
- Invertierte Version
- mediaName wird basierend auf der Domain definiert.

### 1.0.0 (Original)
- Erste Implementation
