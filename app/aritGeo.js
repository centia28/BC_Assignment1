function aritGeo(tab) {
	if(tab.length == 0) {
		return 0;
	}

	if(tab.length <= 2) {
		return -1;
	}

	var step = tab[1] - tab[0];
	var ratio = tab[1] / tab[0];
	var isGeo = true ;
	var isAri = true ;

	for(var i = 0 ; i < tab.length - 1; i++) {
		if(tab[i + 1] - tab[i] != step) {
			isAri = false;
		}

		if(tab[i + 1] / tab[i] != ratio) {
			isGeo = false ;
		}
	}

	if(isAri) {
		return "Arithmetic";
	} else if (isGeo) {
		return "Geometric";
	} else {
		return -1;
	}
}

module.exports = aritGeo;