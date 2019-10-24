function strangeCalcul(){
  let footSize = document.getElementById('shoeSize').value;
  let year = document.getElementById('yearOfBirth').value;
  //Les || sont des connecteurs logiques qui signifient "ou".
  if (footSize == '') {
    alert('Veuillez entrer votre pointure.')
  }else if (year == ''){
    alert('Veuillez entrer votre année de naissance.')
  }else if((isNaN(footSize) == true) || (isNaN(year) == true)){ //Si les valeurs entrées ne sont pas des nombres, un message d'erreur apparait.
    alert('Veuillez entrer un nombre pour la pointure et l\'année de naissance');
  }else if((parseInt(footSize) < 16) || (parseInt(footSize) > 50) || (parseInt(year) < 1900) || (parseInt(year) > 2019)){ //Si les valeurs ne sont pas comprises entre ces intervalles, un message d'erreur apparait.
    alert('Les pointures sont comprises entre 16 et 50 (ce n\'est pas de ma faute si vous avez des pieds d\'une taille bizare) et franchement ça m\'étonnerai que vous soyez né avant 1900 ou après 2019 !');
  }else{ //Sinon le calcul est effectué et le résultat est affiché.
    let result = (parseInt(footSize) * 2 + 5) * 50 - parseInt(year) + 1776;
    alert(result);
  }
}
