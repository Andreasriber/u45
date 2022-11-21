document.addEventListener("DOMContentLoaded", async () => {

    let flagAdress;

  const getDataPerson = async () => {
    let response = await fetch("https://randomuser.me/api/");
    return response.json();
  };

  (async () => {
    console.log(await getDataPerson());
    let obj = await getDataPerson();

    let personName = document.getElementById("person");
    personName.innerHTML = obj.results[0].name.first + " " + obj.results[0].name.last;

    let personCountry = document.getElementById("country");
    personCountry.innerHTML = obj.results[0].location.country;

    let personStreet = document.getElementById("street");
    personStreet.innerHTML =
    obj.results[0].location.street.name + " " +obj.results[0].location.street.number;
    flagAdress = "https://countryflagsapi.com/png/" + obj.results[0].location.country;
    
    
    const getDataflag = async () => {
        let response = await fetch(flagAdress);
        console.log(response);
        return response.blob();
      };
    
      (async () => {
        let imageBlob = await getDataflag();
        const imageObjectUrl = URL.createObjectURL(imageBlob)
        let imageContainer = document.getElementById("imageContainer");
        imageContainer.src = imageObjectUrl
      })(); 
    

    
    
  })();
  

});
