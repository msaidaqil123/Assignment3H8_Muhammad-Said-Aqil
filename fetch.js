const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const tabel = document.getElementById("table");
const positifElement = document.getElementById("positif");
const sembuhElement = document.getElementById("sembuh");
const meninggalElement = document.getElementById("meninggal");


fetch(BASE_URL)
    .then((Response) => Response.json())
    .then((data) => {

        const cData = data.data

        for (let i = 0; i < cData.length; i++) {
            // isi <tr>
            const row = table.insertRow(i + 1);
            //buat <td> 
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);


            cell1.innerHTML = cData[i].provinsi;
            cell2.innerHTML = cData[i].kasusPosi;
            cell3.innerHTML = cData[i].kasusSemb;
            cell4.innerHTML = cData[i].kasusMeni;

        }

        const posi = (cData.reduce((n, { kasusPosi }) => n + kasusPosi, 0));
        positifElement.innerHTML = "Positif : " + posi;
        const sembuh = (cData.reduce((n, { kasusSemb }) => n + kasusSemb, 0));
        sembuhElement.innerHTML = "Sembuh : " + sembuh;
        const dead = (cData.reduce((n, { kasusMeni }) => n + kasusMeni, 0));
        meninggalElement.innerHTML = "Meninggal : " + dead;



    });