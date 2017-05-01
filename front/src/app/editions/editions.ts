import { OpaqueToken } from '@angular/core';
import { Edition, HeaderType } from './edition';


export const ABITARE =
  new Edition(
    'Abitare Venezia', false, HeaderType.Normal,
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
        link: 'http://www.selectaperitivo.it'
      }, {
        img: '/assets/PechaKucha_Loghi_1_Lacunae.png',
        link: 'http://www.lacunaeproject.com/'
      }, {
        img: '/assets/PechaKucha_Loghi_2_Coom.png',
        link: 'http://www.coompany.eu/'
      }, {
        img: '/assets/PechaKucha_Loghi_3_ECC.png',
        link: 'http://www.europeanculturalcentre.eu/index.php'
      }, {
        img: '/assets/PechaKucha_Loghi_4_GAA.png',
        link: 'http://www.globalartaffairs.org/'
      }, {
        img: '/assets/PechaKucha_Loghi_5_IUAV.png',
        link: 'http://www.iuav.it/'
      }
    ]
  );




export function getEditions(): { [name: string]: Edition } {
  return {
    'abitare': ABITARE
  };
};

export const EDITIONS = new OpaqueToken('editions');

export const EDITION_PROVIDER = [
  { provide: EDITIONS, useFactory: getEditions }
];
