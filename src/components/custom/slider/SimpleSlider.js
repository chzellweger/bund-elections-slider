require('ta-semantic-ui/semantic/dist/components/grid.css');
require('ta-semantic-ui/semantic/dist/components/container.css');
require('ta-semantic-ui/semantic/dist/components/image.css');
require('ta-semantic-ui/semantic/dist/components/table.css');
require('ta-semantic-ui/semantic/dist/components/segment.css');
require('./SimpleSlider.scss')

require('react-responsive-carousel/lib/styles/carousel.css')
require('react-responsive-carousel/lib/styles/main.css')


var Carousel = require('react-responsive-carousel').Carousel;
import React, {Component} from 'react'

class ElectionsCarousel extends Component {
    constructor(props) {
        super(props)
        this.scrollToTop = this.scrollToTop.bind(this)
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            

            <Carousel   showArrows={true}
                        showIndicators={false}
                        infiniteLoop={false}
                        showThumbs={false}
                        onChange={this.scrollToTop}
                        swipeScrollTolerance={150}>
                                  
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front84-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front84.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>1984</h2>
                                    <h4>Wahl am 2. Dezember 1984</h4>
                                    <h3>«Zwei Mehrheiten»</h3>
                                    «Überraschender Ausgang der Berner Gemeinderatswahl: Die als «Vierer mit Stadtpräsident» angetretenen Kandidaten von FDP, SVP und CVP haben den Einzug in die [damals noch siebenköpfige] Exekutive geschafft, obwohl ihnen angesichts der Vielzahl von Listen kaum jemand einen Vollerfolg zugetraut hatte. Im Berner Gemeinderat werden somit in den kommenden vier Jahren die Bürgerlichen den Ton angeben. Das ist umso bemerkenswerter, als sich die Kräfteverhältnisse im Stadtrat, von einem gewaltigen Vormarsch der Nationalen Aktion und ebenso bedeutenden Verlusten der SP abgesehen, kaum wesentlich ändern werden.» <br /> – Hans Kaufmann,  «Bund» vom 3. 12. 1984
                                    <br /><br /> <i>1980 hatte sie sich abgezeichnet, 1984 war es so weit: Die bürgerliche Wende in Bern war geschafft. 38,9 Prozent der Stimmen erzielte die Liste von FDP, SVP und CVP. Die SP erreicht nur 21,8 Prozent – ein Einbruch um mehr als ein Drittel gegenüber 1980. (zec) <br /><br />Der Gemeinderat: Heinz Bratschi (SP; Fürsorge und Gesundheit), Werner Bircher (FDP; Stadtpräsident), Marco Albisetti (FDP; Polizei), Josef Bossart (CVP; Finanzen), Gret Haller (SP; Schule), Alfred Neukomm (SP; Stadtbetriebe), Marc-Roland Peter (SVP; Planung und Bau).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>
                            
                        
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front88-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front88.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>1988</h2>
                                    <h4>Wahl am 4. Dezember 1988</h4>
                                    <h3>«Doppel-Triumph»</h3>
                                    «Die Berner Gemeinderatswahlen haben den bürgerlichen Parteien einen ganz klaren Sieg gebracht, daran gibt es nichts, aber auch gar nichts zu deuteln. Nicht nur haben FDP, SVP und CVP mit ihren vier bisherigen Gemeinderäten ihre Mehrheitsposition in der Stadtregierung behauptet – dies war allgemein (auch auf der politischen Gegenseite) erwartet worden; überraschend ist vielmehr, auf welche Weise dies geschah: Dass der Vierer mit Stadtpräsident mit 51,8 Prozent mehr als die Hälfte aller Parteistimmen erhalten und sogar ein fünftes Mandat um minime 500 Stimmen verpassen würde, war denn doch von den kühnsten bürgerlichen Optimisten kaum vorausgesehen worden.» – Dieter Arnold, «Bund» vom 5. Dezember 1988
                                    <br /> <br /> <i>1988 wählte die Stadt zum zweiten Mal in Folge eine bürgerliche Mehrheit. Überraschungen gab es auf linker Seite: Die bei den Gewerkschaften unbeliebte SP-Gemeinderätin Gret Haller musste ihrem Parteikollegen Klaus Baumgartner Platz machen – wegen 161 fehlender Stimmen. Stolperstein für Haller war wohl auch ihre Parteinahme für die Zaffaraya-Aktivisten auf dem Gaswerkareal. Zudem zog Joy Matter für das Junge Bern/Freie Liste in das Gremium ein. (zec) <br /><br />Der Gemeinderat: Werner Bircher (FDP; Stadtpräsident), Marco Albisetti (FDP; Polizei), Josef Bossart (CVP; Finanzen), Alfred Neukomm (SP; Stadtbetriebe), Marc-Roland Peter (SVP; Planung und Bau), Klaus Baumgartner (SP; Fürsorge und Gesundheit), Joy Matter (JB; Schule) Abgewählt: Gret Haller (SP).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>

                        
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front92-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front92.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>1992</h2>
                                    <h4>Wahl am 6. Dezember 1992</h4>
                                    <h3>«Die Wende»</h3>
                                    «Damit hat kaum jemand gerechnet: In der Bundesstadt kommt es nach acht Jahren bürgerliche Dominanz zur Wende. Die erstmals in der Koalition Rot-Grün-Mitte vereinten Parteien eroberten, dank einem Restmandat, die Mehrheit in der Stadtregierung. Und auch im Stadtrat kippten die Mehrheitsverhältnisse zugunsten des rot-grünen Spektrums.» - Heinz W. Müller – Heinz W. Müller, «Bund» vom 7. Dezember 1992
                                    <br /><br /><i>Hauptthema am 7. Dezember 1992, dem Tag nach den Wahlen, war das EWR-Nein, doch auch die politische Wende in der Stadt Bern war eine Sensation: Dank ausgeklügelter Taktik konnte Rot-Grün-Mitte das Proporzsystem für sich nutzen und die Mehrheit im Gemeinderat erobern. Es war auch der Beginn der Ära von Stadtpräsident Klaus Baumgartner. (zec) <br /><br />Der Gemeinderat: Josef Bossart (CVP), nach Rücktritt 1993 ersetzt durch Ursula Begert (SVP; Fürsorge und Gesundheit), Alfred Neukomm (SP; Stadtbetriebe), Klaus Baumgartner (SP; Stadtpräsident), Joy Matter (JB; Schule), Therese Frösch (GB; Finanzen), Theres Giger (FDP; Planung und Bau), Kurt Wasserfallen (FDP; Öffentliche Sicherheit). Abgewählt: Marc-Roland Peter (SVP).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>

                        
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front96-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front96.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>1996</h2>
                                    <h4>Wahl am 1. Dezember 1996</h4>
                                    <h3>«Triumph und Elend»</h3>
                                    «Triumph der regierenden RGM-Koalition in Stadt- und Gemeinderatswahl, Abwahl einer starken bürgerlichen Politikerin aus der Berner Stadtregierung: Die Sensation ist perfekt. RGM bleibt keine Episode. Im Gegenteil: Sie sitzt stärker im Sattel denn je. Das ist für eine amtierende Regierung ein ungewöhnlich grosser Vertrauensbeweis. Nicht einmal ein Zusammengehen der Bürgerlichen mit den Rechtsparteien hätte RGM in Gefahr bringen können. Wahlhelferin für die RGM-Koalition war nebst dem eigenen Leistungsausweis aber auch die wirtschaftliche und soziale Verunsicherung, was durch den Vormarsch der SP im Stadtrat deutlich wird.» – Jürg Müller, «Bund» vom 2. Dezember 1996
                                    <br /><br /><i>1996 bestätigt RGM den Überraschungserfolg von 1992. Zudem wird FDP-Gemeinderätin Theres Giger nach der «Tierpark-Affäre» abgewählt. Ihr wird vorgeworfen, den Tierparkdirektor Max Müller nach einer Schlammschlacht und falschen Vorwürfen entlassen zu haben. Der «Bund» sah das anders: «Ihr bitter nötiger Tierparkentscheid wird nun ungerechtfertigterweise zur bittersten Pille ihres Lebens.» (zec) <br /><br />Der Gemeinderat: Alfred Neukomm (SP; Stadtbetriebe), Klaus Baumgartner (SP; Stadtpräsident), Therese Frösch (GB; Finanzen), Kurt Wasserfallen (FDP; Öffentliche Sicherheit), Ursula Begert (SVP; Fürsorge und Gesundheit), Adrian Guggisberg (CVP; Hochbau), Claudia Omar (LdU/GFL; Schule). Abgewählt: Theres Giger (FDP).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>
                
                        
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front00-small.png" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front2000.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>2000</h2>
                                    <h4>Wahl am 26. November 2000</h4>
                                    <h3>«Erosion bei RGM»</h3>
                                    «Wer die Stadtberner Wahlen aus der Vogelperspektive betrachtet, wird kaum grosse Veränderungen feststellen: Die Kräfteverhältnisse in der Regierung sind gleich geblieben. [...] Trotzdem: Das RGM-Bündnis hat seinen Zenit überschritten. Mit der Abwahl von Claudia Omar hat RGM die Mitte und damit den inneren Zusammenhalt verloren. Die SP hat bewusst auf die Abwahl der GFL-Politikerin hingearbeitet. Damit dürfte das vor acht Jahren mit viel Optimismus lancierte Bündnis sein faktisches Ende gefunden haben. Denn die zutiefst enttäuschte GFL wird sich im Stadtrat kaum mehr einbinden lassen.» – Jürg Müller, «Bund» vom 27. November 2000
                                    <br /><br /><i>Die Wahl 2000 war der Beginn einer turbulenten Legislatur im Gemeinderat: Kurt Wasserfallen (FDP) stiess mit seiner «Law & Order»-Maxime auf erbitterten Widerstand. Es war schliesslich Adrian Guggisberg, welcher den gordischen Knoten durchschlug: Auf seinen Vorschlag wurden die Departemente neu verteilt. (zec) <br /><br />Der Gemeinderat: Klaus Baumgartner (SP; Stadtpräsident), Therese Frösch (GB; Finanzen, ab 2003 Fürsorge und Gesundheit), Kurt Wasserfallen (FDP; Öffentliche Sicherheit, ab 2003 Finanzen), Ursula Begert (SVP; Fürsorge und Gesundheit, ab 2003 Öffentliche Sicherheit), Adrian Guggisberg (CVP; Hochbau), Edith Olibet (neu) (SP; Schule), Alexander Tschäppät (neu) (SP; Planung, Verkehr und Tiefbau), Abgewählt: Claudia Omar (gfl).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>
                
                        
                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front04-small.png" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front2004.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>2004</h2>
                                    <h4>Wahl am 28. November 2004</h4>
                                    <h3>«Gefragte Brückenbauer»</h3>
                                    «Zwölf Jahre sind noch nicht genug: Die Stadt Bern wird auch in der nächsten Legislatur von einer rot-grünen Mehrheit regiert. Im Stadtparlament konnte das Rot-Grün-Mitte-Bündnis sogar noch zulegen. Zudem bleibt das Stadtpräsidium in SP-Hand. Alexander Tschäppät, am Ziel seiner Wünsche, hat ein Glanzresultat erzielt. Die Wende, die Berns Bürgerliche beschworen, hielt das Stimmvolk nicht für nötig. Das Negativbild, das bürgerliche Wahlkämpfer von der Stadt zeichneten, empfand das Volk offensichtlich als Zerrbild.» – Susanne Wenger, «Bund» vom 29. November 2004
                                    <br /><br /><i>Zum ersten Mal werden nur fünf Sitze vergeben. An den Mehrheitsverhältnissen ändert sich nichts: RGM dominiert den Gemeinderat – neu sind nur noch drei Parteien in der Regierung vertreten. Alexander Tschäppät wird zum ersten Mal zum Stadtpräsidenten gewählt. Trotz eines persönlichen Glanzresultats abgewählt wird neben Adrian Guggisberg (CVP) auch Ursula Begert: Sie hatte sich mit der SVP zerstritten und trat auf einer eigenen Liste an. (zec) <br /><br />Der Gemeinderat: Edith Olibet (SP; Bildung, Soziales und Sport), Alexander Tschäppät (SP; Stadtpräsident), Kurt Wasserfallen (FDP; Finanzen, Personal und Informatik), nach Tod 2007 ersetzt durch Stephan Hügli (FDP), Barbara Hayoz (neu) (FDP; Finanzen), Regula Rytz (neu) (GB; Tiefbau, Verkehr und Stadtgrün). Abgewählt: Ursula Begert (parteilos), Adrian Guggisberg (CVP).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>

                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front08-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front2008.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>2008</h2>
                                    <h4>Wahl am 30. November 2008</h4>
                                    <h3>«Stabilität in Krisenzeiten»</h3>
                                    «Die bürgerliche Wende bleibt ein weiteres Mal aus. Mit einem Stimmenanteil von 56,3 Prozent hat die RGM-Liste ein hervorragendes Resultat erzielt. Noch vor einem Jahr sah die Situation für Rot-Grün-Mitte weniger rosig aus. Nach den Ausschreitungen an der Anti-SVP-Demonstration vom 6. Oktober stand die Stadt Bern einmal mehr als Hauptstadt des Krawalls und der Randgruppen in den Schlagzeilen. Was ist seither geschehen? Die Zersplitterung des bürgerlichen Lagers ist weiter fortgeschritten. [... ]RGM wiederum hat die Zeichen der Zeit erkannt: Mit der Enttabuisierung des Themas öffentliche Sicherheit haben SP und Grüne den Bürgerlichen den Wind aus den Segeln genommen.» – Bernhard Ott, «Bund» vom 1. Dezember 2008
                                    <br /><br /><i>Die tragische Figur dieser Wahlen war Sicherheitsdirektor Stephan Hügli (FDP, Liste Die Mitte), der 2007 als Ersatz für den verstorbenen Kurt Wasserfallen in den Gemeinderat gewählt wurde. Einerseits hatte er die Brisanz der Anti-SVP-Demonstration unterschätzt. Andererseits entschied sich die FDP, mit Barbara Hayoz nur einen Listenplatz auf der Mitte-Liste zu beanspruchen. Mit seiner eigenen Liste hatte Hügli keine Chancen auf eine Wiederwahl. (zec) <br /><br />Der Gemeinderat: Edith Olibet (SP; Direktorin für Bildung, Soziales und Sport), Alexander Tschäppät (SP; Stadtpräsident), Barbara Hayoz (FDP; Vizepräsidentin, Direktorin für Finanzen, Personal und Informatik), Regula Rytz (GB; Direktorin für Tiefbau, Verkehr und Stadtgrün), Reto Nause (neu) (CVP; Direktor für Sicherheit, Umwelt und Energie). Abgewählt: Stephan Hügli (Die Mitte).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>

                        <div>
                            <div className="ui stackable grid">

                                <div className="eight wide column">
                                    <img  className="ui centered large image" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front12-small.jpg" />
                                    <p><a href="http://interaktiv.derbund.ch/ext/2016/elections-slider/images/front2012.pdf" target="_blank">PDF-Version öffnen</a></p>
                                </div>
                            
                                <div className="six wide left aligned column">
                                    <h2>2012</h2>
                                    <h4>Wahl am 25. November 2012</h4>
                                    <h3>«Überragender Sieg von Rot-Grün»</h3>
                                    «Bei den Wahlen in den Berner Gemeinderat standen sich heuer erstmals drei statt zwei Lager gegenüber. Die Aufspaltung des bürgerlichen Lagers in SVP und FDP einerseits («Bürgerliches Bündnis») und die Mitte-Liste andererseits hatte für die regierende Mehrheit von Rot-Grün-Mitte (RGM) jedoch keine Konsequenzen – ganz im Gegenteil. Mit einem Wähleranteil von 59 Prozent erzielte RGM das beste Ergebnis seit 1992 und schrammte gar nahe an einem vierten Gemeinderatssitz vorbei, für den ein Wähleranteil von 64 Prozent nötig gewesen wäre. Mit diesem Topresultat bestätigt sich einmal mehr, was seit zwanzig Jahren eine Binsenwahrheit für die Berner Stadtregierung ist: Die Stärke von RGM ist die Schwäche der Bürgerlichen. [...] Jenseits der bürgerlichen Schwäche gilt es aber festzuhalten, dass es für die Wähler keinen zwingenden Grund für einen Richtungswechsel gab. Im Vergleich mit dem Bankenplatz Zürich verläuft die Entwicklung in der Bundesstadt relativ stabil. RGM hat in den letzten zwanzig Jahren einiges zur Verbesserung der Lebensqualität in der Wohnstadt Bern beigetragen.» – Bernhard Ott, «Bund» vom 26. November 2012
                                    <br /><br /><i>Der Gemeinderat: Alexander Tschäppät (SP; Stadtpräsident), Reto Nause (CVP; Vizepräsident, Direktor für Sicherheit, Umwelt und Energie), Ursula Wyss (neu) (SP; Direktorin für Tiefbau, Verkehr und Stadtgrün), Franziska Teuscher (neu) (GB; Direktorin für Bildung, Soziales und Sport), Alexandre Schmidt (neu) (FDP; Direktor für Finanzen, Personal und Informatik). Zurückgetreten: Edith Olibet (SP), Barbara Hayoz (FDP), Regula Rytz (GB).</i>
                                </div>
                                <div className="two wide column"></div>
                            
                            </div>
                        </div>

                

            </Carousel>

            


        )
    }
}



export default ElectionsCarousel