import { OpaqueToken } from '@angular/core';
import { Edition, NormalHeader, DraggableHeader } from './edition';


export const ABITARE =
  new Edition(
    'Abitare Venezia', false,
    new NormalHeader('/assets/PechaKucha_Header_abitare.png'),
    {
      subtitle: `
        Una notte di progetti su Venezia e per Venezia,
        declinati nelle varie sfumature dell’abitare oggi la città
        e la sua laguna, tra proposte, progetti visivi e ricerche
        universitarie.
      `,
      content: `
        <div class="col-sm-6">
          <p>
            L’agorà era uno spazio fondamentale nella vita dei cittadini delle Poleis
            greche: il suo scopo era quello di accogliere il confronto di opinioni e
            dare spazio al dialogo sulla città e la vita pubblica. L’assemblea era lo
            strumento principale di questo confronto.
          </p>
          <p>
            Come abitanti e cittadini di Venezia, crediamo che questo spazio
            sia stato negato alla città per troppo tempo. Il confronto su temi
            fondamentali per la sopravvivenza della città e del suo tessuto sociale
            diviene ogni giorno più impellente.
          </p>
          <p>
            A causa della crescente gravità dello stato della città lagunare,
            Venezia è divenuta il case study più rappresentativo di particolari
            problematiche comuni a molte città storiche italiane, nelle quali una
            monocoltura del turismo di massa minaccia pericolosamente il loro
            ruolo di nuclei attivi della vita pubblica.
          </p>
          <p>
            A Venezia, più che in altri luoghi, questa deviazione ha alterato
            l’economia, costretto la popolazione alla migrazione di massa per
            la carenza di appartamenti a prezzi accessibili e lacerato il tessuto
            sociale, la coesione e la cultura civica.
          </p>
        </div>
        <div class="col-sm-6">
          <p>
            A ciò si aggiunge anche il precario equilibrio ambientale lagunare,
            minacciato dall’assenza di una strategia di turismo sostenibile e di un
            approccio coordinato per la protezione dell’ecosistema lagunare, la cui
            sopravvivenza è alla base delle ragioni che rendono la città di Venezia
            di “eccezionale valore universale”.
          </p>
          <p>
            Durante la festa pubblica più importante e antica della città di Venezia,
            il Carnevale, proponiamo dunque di donare alla città e ai suoi abitanti
            un momento di riscatto e confronto, attraverso la costituzione di una
            moderna agorà, una PechaKucha Night sul tema de l’abitare Venezia.
          </p>
          <p>
            Vogliamo costruire un network reale tra iniziative, gruppi, associazioni
            e singole menti, studiosi e studenti, uniti dall’obiettivo primo della
            salvaguardia della città e della sua anima: i suoi abitanti.
          </p>
          <p>
            Per una notte saremo il trait d’union di realtà differenti e distanti,
            poiché di diversa provenienza ed origine o poiché relegate agli
            ambienti accademici o informali, ma spesso unite dalle stesse volontà,
            interessi e direzioni. <br />
            Can We Save Venice Before It’s Too Late?
          </p>
        </div>
      `
    },
    [
      {
        date: '01.02',
        name: 'Open call'
      }, {
        date: '20.02',
        name: 'Deadline invio candidature'
      }, {
        date: '01.03',
        name: 'Deadline invio presentazioni'
      }, {
        date: '11.03',
        name: 'PechaKucha Night'
      }
    ],
    {
      mapUrl: 'https://maps.google.com/?q=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia',
      staticImg: 'https://maps.googleapis.com/maps/api/staticmap'+
              '?center=Palazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
              '&zoom=16' +
              '&size=600x600' +
              '&maptype=roadmap' +
              '&markers=color:red%7CPalazzo%20Michiel%20Strada%20Nuova,%204391%20Campo%20Santi%20Apostoli%20Venezia' +
              '&key=AIzaSyDOtyBGM1ArybPLKhVIcBZzL_TKy2DWNxQ',
      content: `
        <p class="h1 mb-3">
          Palazzo Michiel<br />
          Strada Nuova, 4391<br />
          Campo Santi Apostoli<br />
          Venezia
        </p>
        <p class="h1 mb-3">
          Si trova a 250 m dal Ponte di Rialto.<br />
          È raggiungibile via vaporetto con la linea
          Actv 1, fermata Ca' d'Oro.
        </p>
        <p>
          Durante la Biennale di Venezia Palazzo Michiel è sede dell’esposizione
          VENICE DESIGN organizzata dalla GAA-Foundation, European
          Cultural Centre.
        </p>
        <p>
          <a href="http://www.palazzomichiel.org" target="_blank">
            www.palazzomichiel.org
          </a>
        </p>
      `
    },
    [
      {
        img: '/assets/PechaKucha_Loghi_6_Select.png',
        link: 'http://www.selectaperitivo.it',
        col: 'col-4'
      }, {
        img: '/assets/PechaKucha_Loghi_1_Lacunae.png',
        link: 'http://www.lacunaeproject.com/',
        col: 'col-4'
      }, {
        img: '/assets/PechaKucha_Loghi_2_Coom.png',
        link: 'http://www.coompany.eu/',
        col: 'col-4'
      }, {
        img: '/assets/PechaKucha_Loghi_3_ECC.png',
        link: 'http://www.europeanculturalcentre.eu/index.php',
        col: 'col-4'
      }, {
        img: '/assets/PechaKucha_Loghi_4_GAA.png',
        link: 'http://www.globalartaffairs.org/',
        col: 'col-4'
      }, {
        img: '/assets/PechaKucha_Loghi_5_IUAV.png',
        link: 'http://www.iuav.it/',
        col: 'col-4'
      }
    ],
    [
      '/assets/gallery/abitare/IMG_9010.jpg',
      '/assets/gallery/abitare/IMG_9016.jpg',
      '/assets/gallery/abitare/IMG_9026.jpg',
      '/assets/gallery/abitare/IMG_9047.jpg',
      '/assets/gallery/abitare/IMG_9049.jpg',
      '/assets/gallery/abitare/IMG_9062.jpg',
      '/assets/gallery/abitare/IMG_9103.jpg',
      '/assets/gallery/abitare/IMG_9112.jpg',
      '/assets/gallery/abitare/IMG_9126.jpg',
      '/assets/gallery/abitare/IMG_9140.jpg',
      '/assets/gallery/abitare/IMG_9185.jpg',
      '/assets/gallery/abitare/IMG_9222.jpg'
    ]
  );



export const LAGUNA =
  new Edition(
    'Habitat Laguna', true,
    new DraggableHeader(
      '/assets/PechaKucha_background_laguna.png',
      '/assets/PechaKucha_front_laguna.png'
    ),
    {
      subtitle: `
        Una PechaKucha Night dedicata all’habitat lagunare e alle sue isole,
        tra proposte, progetti e ricerche.
      `,
      content: `
        <div class="col-sm-6">
          <p>
            La laguna di Venezia si estende per circa 550 km<sup>2</sup>, di cui solo l’8% è
            occupato da terra. Oltre un centianaio di isole di imparagonabile bellezza,
            storia antichissima e paesaggi particolari vanno a costituire un ambiente sui
            generis in continuo mutamento.
          </p>
          <p>
            L’origine del nome Venetia,ae (pluralia tantum) indica come la città
            veniva concepita già nel passato da una pluralità di elementi poi fusisi
            assieme. Venezia era ed è costituita non da una singola isola ma
            da un intero arcipelago. La storia di Venezia deve necessariamente
            comprendere la storia delle sue numerosissime isole e del suo
            habitat lagunare. È a questo arcipelago che la seconda edizione di
            PechaKucha Venezia intende rivolgersi.
          </p>
          <p>
            La capacità e la volontà di preservare dal mare questo arcipelago
            ha portato già nel XIV secolo a deviare gli spostamenti fluviali e a
            monitorare nei secoli la loro azione sulla gronda lagunare, nonché a
            concepire metodi diversi, unici e straordinari per creare, mantenere e
            sostenere un habitat assolutamente unico.
          </p>
        </div>
        <div class="col-sm-6">
          <p>
            Oggi quest’ambiente così particolare, in precario equilibrio
            ambientale, è minacciato dall’assenza di una strategia sostenibile e di
            un approccio coordinato per la protezione del suo ecosistema, da cui
            dipende la stessa sopravvivenza della laguna tutta.
            A Venezia l’innalzamento del livello del mare causato dal cambiamento
            climatico globale è aggravato dal fenomeno dell’abbassamento
            (subsidenza) del suolo. Nell’ultimo secolo, nel complesso, Venezia è
            affondata lentamente ma senza pause di 25 centimetri, tra gli 0,6 e
            gli 1,6 millimetri all’anno. Sarà un’azione inesorabile o sostenibile e
            contrastabile?
          </p>
          <p>
            Con “Habitat Laguna” vogliamo connettere i numerosi progetti di
            riqualificazione delle isole abbandonate con ricerche storiche e
            archeologiche e i piani di recupero e conservazione ambientale.
            Crediamo che la condivisione sia un mezzo fondamentale per
            consolidare la consapevolezza dell’interdipendenza tra Venezia e il suo
            Habitat e alimentare il dibattito sulla sua ri-valorizzazione.
          </p>
        </div>
      `
    },
    [
      {
        date: '24.04',
        name: 'Open call'
      }, {
        date: '10.05',
        name: 'Deadline invio candidature'
      }, {
        date: '15.05',
        name: 'Deadline invio presentazioni'
      }, {
        date: '21.05',
        name: 'PechaKucha Night'
      }
    ],
    {
      mapUrl: 'https://maps.google.com/?q=' + encodeURIComponent('Isola della Certosa, Venezia'),
      staticImg: 'https://maps.googleapis.com/maps/api/staticmap'+
              '?center=' + encodeURIComponent('Isola della Certosa, Venezia') +
              '&zoom=13' +
              '&size=600x600' +
              '&maptype=roadmap' +
              '&markers=color:red%7C' + encodeURIComponent('Isola della Certosa, Venezia') +
              '&key=AIzaSyDOtyBGM1ArybPLKhVIcBZzL_TKy2DWNxQ',
      content: `
        <p class="h1 mb-3">
          Venezia Certosa Marina Resort<br />
          Isola della Certosa<br />
          Venezia
        </p>
        <p class="h1 mb-3">
          È raggiungibile via vaporetto con la linea Actv 4.2, fermata Certosa su richiesta.
        </p>
        <p>
          <a href="http://www.ventodivenezia.it" target="_blank">
            www.ventodivenezia.it
          </a>
        </p>
      `
    },
    [
      {
        img: '/assets/PechaKucha_Loghi_2_Coom.png',
        link: 'http://www.coompany.eu/',
        col: 'col-3'
      }, {
        img: '/assets/PechaKucha_Loghi_1_Lacunae.png',
        link: 'http://www.lacunaeproject.com/',
        col: 'col-3'
      }, {
        img: '/assets/PechaKucha_Loghi_7_Certosa.png',
        link: 'http://www.ventodivenezia.it',
        col: 'col-3'
      }, {
        img: '/assets/PechaKucha_Loghi_5_IUAV.png',
        link: 'http://www.iuav.it/',
        col: 'col-3'
      }
    ]
  );





export function getEditions(): { [name: string]: Edition } {
  return {
    'abitare': ABITARE,
    'laguna': LAGUNA
  };
};

export const EDITIONS = new OpaqueToken('editions');

export const EDITION_PROVIDER = [
  { provide: EDITIONS, useFactory: getEditions }
];
