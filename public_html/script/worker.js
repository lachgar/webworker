onmessage = function (event) {
    trier(event.data);
};
var l = 0;
function trier(tab) {
    if (l === tab.length - 1)
        return tab;
    for (var i = 0; i < tab.length - 1 - l; i++) {
        if (tab[i] > tab[i + 1])
        {
            var p;
            p = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = p;
        }
    }
    l++;
    postMessage(tab);
    trier(tab);
}

