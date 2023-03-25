//algorithm

function numbToWord(numb) {
  switch (numb) {
    case "1":
      return "satu";
      break;
    case "2":
      return "dua";
      break;
    case "3":
      return "tiga";
      break;
    case "4":
      return "empat";
      break;
    case "5":
      return "lima";
      break;
    case "6":
      return "enam";
      break;
    case "7":
      return "tujuh";
      break;
    case "8":
      return "delapan";
      break;
    case "9":
      return "sembilan";
      break;
    default:
      break;
  }
}

function numbToWordBelasan(numb) {
  switch (numb) {
    case "11":
      return "sebelas";
      break;
    case "12":
      return "dua belas";
      break;
    case "13":
      return "tiga belas";
      break;
    case "14":
      return "empat belas";
      break;
    case "15":
      return "lima belas";
      break;
    case "16":
      return "enam belas";
      break;
    case "17":
      return "tujuh belas";
      break;
    case "18":
      return "delapan belas";
      break;
    case "19":
      return "sembilan belas";
      break;
    default:
      break;
  }
}

function getSpellNominal(number) {
  const numbarray = String(number).split("");

  if (numbarray.length == 2) {
    return spellPuluhan(number);
  }
  if (numbarray.length == 3) {
		return spellRatusan(number)
  }
  if (numbarray.length == 4) {
    return "ribua";
  }
  if (numbarray.length == 5) {
    return "puluhan ribu";
  }
  if (numbarray.length == 6) {
    return "ratusan ribu";
  }
  if (numbarray.length == 7) {
    return "jutaan";
  }
  if (numbarray.length == 8) {
    return "puluhan juta";
  }

  if (numbarray.length > 8) {
    return "Error";
  }
}

console.log(getSpellNominal(105));

function spellPuluhan(number) {
  const idr = " rupiah";
  const str = String(number);
  const numbarray = str.split("");
  if (numbarray.length == 1) {
    return numbToWord(number) + idr;
  }
  if (numbarray.length == 2) {
    if (numbarray[0] == 1 && numbarray[1] == 0) {
      return "sepuluh rupiah";
    }

    if (numbarray[0] != 1) {
      const angka1 = numbToWord(numbarray[0]) + " puluh";
      const angka2 = numbToWord(numbarray[1]);
      if (angka2 != undefined) {
        return `${angka1} ${angka2} rupiah`;
      } else {
        return angka1 + idr;
      }
    } else {
      return numbToWordBelasan(String(number)) + idr;
    }
  }
}

function spellRatusan(number) {
	const numbarray = String(number).split('')
	const ratusan = numbarray[0] == 1 ? 'seratus':`${numbToWord(numbarray[0])} ratus`;
	if (numbarray[1] == 0 && numbarray[2] == 0) {
		return ratusan + ' rupiah'
	}
	if (numbarray[1] == 0 && numbarray[2] != 0) {
		const angka3 = numbToWord(numbarray[2]);
		return ratusan + " " + angka3 + ' rupiah'
	}
	if (numbarray[1] != 0 && numbarray[2] != 0) {
		const array23 = numbarray.slice(1)
		const numb23 = Number(array23.join(""));
		return ratusan + " " + spellPuluhan(numb23)
	}
}

console.log(spellRatusan(908));