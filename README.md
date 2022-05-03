
# VS_Kennzeichen
Projekt Kennzeichen | Moritz Wolf, Kilian Sörries, Alexander Lamers

This is an example REST API project built wit Node.js and Express,
part of a distributed systems lecture @ DHBW Karlsruhe.

The service is dockerized; the frontend, the backend and a MongoDB
run inside of containers orchestrated via docker-compose.

The rudimental React frontend application demonstrates a frotend to
backend connection via fetch.

## Run the app 🚀

- frontend: `cd simple-frontend && npm run start`
- backend: `cd simple-backend && npm run start`
- all containers (frontend, backend, mongo): `cd simple-backend && npm run d-up`




Wir haben die Gesamte Dokumentation in YAML erstellt.

1.
Innerhalb von Behörden soll die Transparenz erhöht werden, deshalb werden Informationen zentral gebündelt. Folgend werden die Ortskennungen in einem zentralen Register geführt und sind somit für die Behördenmitarbeiter leicht zugänglich. Zusätzlich sollen die TÜV-Prüfungen zentral verwaltet werden. Somit sind automatisierte Auswertung bei Ablauf effizient möglich ebenso kann die Polizei die Angaben es Kennzeichens separat prüfen. Zur dauerhaften Sicherung des fließverkehr werden Verstöße zentral vorgehalten. Somit kann eine Medizinisch psychologische Untersuchung beispielsweise sehr akkurat angeordnet werden.
Die architektonische Einbindung basiert auf dem Prinzip der Client-Server Anwendung. Dies stellt somit eine zentral genutzte Cloudumgebung dar die den zuvor dargestellten Use-Case als Bounded Context implementiert. Der Service wird in einem Docker Container betrieben. Die Webanwendung besitzt ebenso einen reverse Proxy für eine Steigerung der Sicherheit bezüglich der Client-Anfragen. 
Bedingt durch ein ämterübergreifendes Use-Case wird der Bounded Context durch die API von unterschiedlichen Subsystemen verwendet. Diese Subsysteme basieren mitunter auf eigenen Cloudsystemen und kommunizieren nach Bedarf über die API von dem zuvor dargestellten Use-Case.
2.
a.
Wenn mehrere Parteien zur selben Zeit einen Eintrag verändern, kann dies zu ungewollter Überschreibung von Daten führen. Eine Lösung wäre das Reservieren von Datensätzen, um einen simultanen Zugriff zu blockieren. Eine weitere Möglichkeit Inkonsistenzen zu vermeiden, könnte ein Merging Tool eingesetzt werden. Dies soll eine ähnliche Beschaffenheit wie Git haben.
b.
Wenn eine große Anzahl an Parteien regulär Anfragen an die Server schickt, kann dies zu Performanceproblemen führen. Diese Überlastung der Server kann primär durch horizontale und vertikale Skalierung der Hardware entgegengewirkt werden. Dies ist durch die Verwendung von einer externen Cloud möglich, die ebenso genug Rechenkapazität flexibel bereitstellt. Eine zusätzliche Möglichkeit wäre die Effizienz der Software zu optimieren. Dies ist zumeist teuer und stellt weitere Risiken dar. Des Weiteren kann ein Optimierungspotenzial nur sehr schwer bestimmt werden.
3.
a.
Der gesamt Service muss getestet werden. Hierbei wird zwischen zwei testverfahren unterschieden. Unittests sollen die Funktionsfähigkeit von Methoden überprüfen. Hierbei werden meistens Mockup Daten verwendet, die den Aufruf der Methode simulieren. Am Ende wird das Ergebnis des Methodenaufrufs mit dem Vorgesehenen Ergebnis verglichen. Die zweite Art sind Integration Tests. Diese prüfen die Zusammenarbeit der Verschiedenen Methoden.
b.
Ein sehr wichtiger Punk ist die Dokumentation der Software, weil dadurch die Wartungsarbeiten und Weiterentwicklungen erst effizient möglich werden. Somit ist es nicht möglich die IT-Governance im Unternehmen zu erfüllen, wenn die Software nicht dokumentiert wird. Explizit können keine Risiken ohne Dokumentation akkurat bewertet werden. Somit ergeben sich weitere Risiken durch möglicherweise falsche Risikobewertungen und Sicherheitsmaßnahmen.
c.
Die IT-Security ist von besonderer Bedeutung in der heutigen Zeit, weil alles stärker vernetzt wird. Deshalb sind Testungen und Sicherheitskonzepte wie Penetration Test und Corruption Layers zu einem essenziellen Bestandteil der Software Entwicklung geworden. Da in diesem Projekt mit Personenbezogenen Daten gearbeitet wird, muss das gesamte System über ein Sicherheitssystem verfügen. Ebenso soll der Service vor unberechtigten Zugriffen und Änderungen geschützt werden. Somit sind Beispielsweise Datenschutzkonzepte neben der Dokumentation zu erstellen.
