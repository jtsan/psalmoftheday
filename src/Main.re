module D = Webapi.Dom;
module Doc = Webapi.Dom.Document;
module Elem = Webapi.Dom.Element;
let today = Js.Date.({
    make()
});
let firstOfYear = Js.Date.({
   today
   |> getFullYear
   |> makeWithYM(~year=_, ~month=0.0, ())
});
let dayOfYear = Js.Date.({
  let x = valueOf(today) -. valueOf(firstOfYear);
  int_of_float(x /. 1000.0 /. 60.0 /. 60.0 /. 24.0) + 1
});
let psalmOfTheDay = string_of_int(dayOfYear mod 150);

let linkTo = {j|<a href="https://www.bible.com/en-GB/bible/59/PSA.$(psalmOfTheDay).ESV">Psalm $psalmOfTheDay</a>|j};

let _ = Doc.getElementById("linkTo", D.document)
-> Belt.Option.map(_, Elem.setInnerHTML(_,linkTo));