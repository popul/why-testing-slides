// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("../assets/styles.css");

const theme = createTheme({
  primary: "#FFF",
  secondary: "#FF6600",
  tertiary: "#000",
  quartenary: "#FF6600"

}, {
  primary: "HelvNeue35",
  secondary: "HelvNeue35",
  heading: "HelvNeue45"
});

const images = {
  girl: require("../assets/bgtitle.jpg"),
  t2m: require("../assets/t2m.gif"),
  quality: require("../assets/quality.gif"),
  flexibility: require("../assets/flexibility.gif"),
  tonyStark: require("../assets/tonyStark.gif"),
  cards: require("../assets/cards.gif"),
  holyGrail: require("../assets/holygrail.gif"),
  angry: require("../assets/angry.gif"),
  peace: require("../assets/peace.gif"),
  ok: require("../assets/ok.gif"),
  linux: require("../assets/linux.gif"),
  tools: require("../assets/cles.jpg"),
  redux: require("../assets/redux.svg"),
  danger: require("../assets/danger.gif"),
  happy: require("../assets/happy.gif")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "zoom"]} transitionDuration={500} progress="bar">
          <Slide bgImage={images.girl} bgDarken={0.50} notes={`
Présentation personnelle (département, statut, spécialité)
<br />
Besoins :
<br />
- avoir confiance en son code
<br />
- travailler dans de bonnes conditions
            `}>
            <Heading size={1} caps fit textColor="primary">Les tests unitaires</Heading>
            <Heading size={3} caps textColor="secondary">dans les</Heading>
            <Heading size={1} caps fit textColor="primary">applications web</Heading>
          </Slide>

          <Slide bgColor="#FFD800">
            <Heading size={1} caps fit textColor="primary">
              Ce qu'on dit
            </Heading>
            <Heading size={1} caps fit textColor="secondary">
              en général
            </Heading>
          </Slide>
          <Slide bgImage={images.t2m} />
          <Slide notes={'lol'} transition={[]}>
            <Heading size={1} caps fit textColor="secondary">
              Meilleur Time to Market
            </Heading>
          </Slide>
          <Slide bgImage={images.quality} />
          <Slide>
            <Heading size={1} caps fit textColor="secondary">
              Meilleure qualité
            </Heading>
          </Slide>
          <Slide bgImage={images.flexibility} />
          <Slide>
            <Heading size={1} caps fit textColor="secondary">
              Meilleure flexibilité
            </Heading>
          </Slide>
          <Slide notes={`
En gros c’est parce que les développeurs n’en font pas assez qu’on a un mauvais T2M ou que la TMA plombe les budgets
Vision très psychanalytique du truc quand même ^^<br />
On te fait culpabiliser car t’es à l’origine du truc. Hey ! La patate chaude je la veux pas moi. Tiens le marketeux, prends là, t’as vendu trop de rêve avec ton étude de marché. Ah … t’en a pas fait …
<br />
Le manager te dira, quoi t’as pas fait de tests unitaires ? Franchement, tu fais perdre du fric à ta boite !
<br />
De toute façon, moi je suis à OLPS, je fais pas la TMA, je suis sensé coder les services de demain :)
<br />
Et puis si c’est autant le saint gral et que je me mets à la place d’un sous traitant, j’aurai quand même tendance à en faire mais pas trop, histoire de pas scier la branche sur laquelle je suis assis, surtout si je suis en AT.
<br />
Ya que ceux qui oint des billes dans leur boite qui vont se soucier des tests unitaires.
<br />
En gros, ça risque pas de changer.
            `}>
            <Heading>
              Vision  
            </Heading>
            <Heading textColor="secondary">
              orientée résultat
            </Heading>
          </Slide>
          <Slide bgColor="#E0E0E0">
            <Heading>
              Alors pourquoi faire
            </Heading>
            <Heading textColor="secondary">
              des tests unitaires ?
            </Heading>
          </Slide>
          <Slide notes={`
Etre plus heureux quand je code :). On parlais de UX, maintenant de DX. Le dévelopeur est un utilisateur. On peut appliquer les principes de l’UX aux développeurs en les mariant aux bonnes pratiques de développement. C’est tellement gratifiant de voir tous ces tests passer au vert.
          `} >
            <Heading size={3}>
              Améliorer mon quotidien de développeur
            </Heading>
          </Slide>
          <Slide bgImage={images.tonyStark} />
          <Slide notes={`
C’est comme dans Iron Man, où Tony Stack se fait aider de tous ces assistants dans son boulot. Là, vous codez des tests unitaires, des assistants en quelque sort, qui vous donnent des indicateurs sur votre code, ce qui marche, ce qui marche pas à tout moment. Parfois même, le code est tellement complexe ou abstrait, ça arrive souvent avec de la logique métier que les tests unitaires sont un prérequis pour y arriver.
            `}>
            <Heading size={3}>
              C’est du code qui t’aide à coder
            </Heading>
          </Slide>
          <Slide bgImage={images.cards} />
          <Slide notes={`
Ca aide à avoir confiance en ton code car t’es averti dès que tu casses quelque chose. (GIF château de carte, mikado ou autre structure qui se pete la gueule)
            `}>
            <Heading size={3}>
              Moins peur de tout casser
            </Heading>
          </Slide> 
          <Slide notes={`
Rend possible ou raisonnable le refactoring (GIF genre holy grain) et de mettre à jour ces dépendences. Très dépriment de travailler sur du code legacy
          `}>
            <Heading size={3}>
              Rend possible le refactoring
            </Heading>
          </Slide>
          <Slide bgImage={images.holyGrail} />
          <Slide notes={`
Tout le monde est sujet aux tests unitaires (via des hook git par exemple)           `}>
            <Heading size={3}>
              Permet de mieux travailler ensemble
            </Heading>
          </Slide>
          <Slide bgImage={images.angry} />
          <Slide bgImage={images.peace} />
          <Slide>
            <Heading size={3}>
              Se focaliser sur le besoin avec le TDD
            </Heading>
          </Slide>
          <Slide notes={`
Ca montre comment utiliser ses classes, fonctions. Très utile
            `}>
            <Heading size={3}>
              C’est de la documentation vivante
            </Heading>
          </Slide>
          <Slide bgImage={images.ok} />
          <Slide>
            <Heading size={3}>
              Pour les vrais geeks
            </Heading>
          </Slide>
          <Slide bgImage={images.linux} />
          <Slide notes={`
Pour le vrai codeur, fan de linux, d’assembleur et autre  c’est aussi un challenge technique dans certains cas. Pas évident de tester une application web par exemple hein. Beh, vous savez quoi, on va voir ça ensemble
            `}>
            <Heading size={3} textColor="secondary">
              C’est aussi un challenge technique
            </Heading>
          </Slide>
          <Slide bgImage={images.girl} bgDarken={0.50} notes={`
Logique métier ok, ça a l’air simple, faut peut-être mocker les appels XHR par exemple mais c faisable.
<br/>
Par contre, les composants web, euh, ça m’a l’air plus compliqué.
<br/>
Ils dépendent :
<br/>
- Navigateur et des APIs
<br/>
- Des autres composants de l’application et de leur état
<br/>
- De code métier
<br/>
Dans Angular, protactor est une solution de tests e2e (à base de selenium)
<br/>
Pour des tests unitaires, on peut utiliser Karma/Jasmine/Mocha qui se base sur un navigateur pour s’exécuter.
            `}>
            <Heading size={1} caps fit textColor="primary">Comment</Heading>
            <Heading size={2} caps textColor="secondary">faire des</Heading>
            <Heading size={2} caps fit textColor="primary">tests unitaires</Heading>
            <Heading fit caps size={3} textColor="primary">dans des applications web ?</Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Live</Heading>
            <Heading fit size={2} textColor="tertiary">Coding</Heading>
          </Slide>

          <Slide bgImage={images.redux} notes={`
Permet de tester séparément logique métier et composants et offre du confort de développement
<br />
Application du pattern flux avec Redux. L’état est un arbre auxquels sont abonnés les composants graphiques qui sont revendu en cas de modification. Ils peuvent modifier l’arbre en invoquant des actions qui modifieront le store.
<br />
Les composants ne sont plus qu’une représentation en lecture seule de l’état de l’UI
<br />
Améliore le hot reload, car ça recharge le composants et ses sous composants. Comme l’état est en dehors du composant, on perd pas le state du sous composant
<br />
Permet de restaurer l’état, faire du replay en quelque sorte
<br />
Et surtout, Flux est un pattern qui augmente drastiquement la montée en charge de votre application.            
`}/>
          <Slide>
            <image src={images.danger}></image> 
            <Heading size={3}>
              Les tests unitaires sont
            </Heading>
            <Heading textColor="secondary" fit>structurants</Heading>
          </Slide>
          <Slide notes={`
Plus d’infos sur repo git du code (mocha dans un navigateur par exemple, isolation des CSS par composants)
            `}>
            <Heading size={4}>
              Dépôt GIT de l'application angular
            </Heading>
            <a href="https://github.com/popul/why-testing">
              https://github.com/popul/why-testing
            </a>
            <Heading size={4}>
              Dépôt GIT de la présentation
            </Heading>
            <a href="https://github.com/popul/why-testing-slides">
              https://github.com/popul/why-testing-slides
            </a>
          </Slide>
          <Slide>
            <Heading size={2}>
              Au final, les tests unitaires permettent au développeur
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3}>
              ... d'avoir confiance en son code
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3}>
              ... d'avoir des outils pour développer dans de bonnes conditions
            </Heading>
          </Slide>
          <Slide bgImage={images.happy} />
          <Slide>
            <Heading size={2} textColor="tertiary">
              Ressources
            </Heading>
            <List textColor="secondary">
              <ListItem><a href="http://www.agitar.com/solutions/why_unit_testing.html">Why unit testing ?</a></ListItem>
              <ListItem><a href="http://www.onjava.com/pub/a/onjava/2003/04/02/javaxpckbk.html">  Top 12 Reasons to Write Unit Tests</a></ListItem>
              <ListItem><a href="http://stackoverflow.com/questions/67299/is-unit-testing-worth-the-effort">Is Unit Testing worth the effort ?</a></ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={2} textColor="tertiary">
              Autres ressources
            </Heading>
            <Markdown>
{`
- [Testing Angular.js app headlessly with node.js + mocha](https://gist.github.com/rikukissa/dcb422eb3b464cc184ae)
- [Hot Reload templates, controller and services in Angular1.X!!](https://github.com/honestica/angular-hot-reloader)
- [Use webpack loaders with mocha](https://www.npmjs.com/package/mocha-webpack)
- [Using Angular 2 Patterns in Angular 1.x Apps](https://egghead.io/courses/using-angular-2-patterns-in-angular-1-x-apps)
- [Introduction to Angular Material](https://egghead.io/courses/angular-material-introduction)
- [Angular and Webpack for Modular Applications](https://egghead.io/courses/angular-and-webpack-for-modular-applications)
- [Proper unit testing of Angular JS applications with ES6 module](https://blog.ngconsultant.io/proper-testing-of-angular-js-applications-with-es6-modules-8cf31113873f#.isb3zv7ra)
`}   
            </Markdown>
          </Slide>            
          <Slide>
            <Heading fit>
              Questions ?
            </Heading>
          </Slide>
          <Slide>
            <Heading fit>
              Merci à vous !
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
