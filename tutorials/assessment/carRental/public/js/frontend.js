/**
 * Created by tothzs on 2018.04.16..
 */
function listCars() {
    $.get('listCars', function (data) {
        console.log(data);
        var table = document.createElement('table');
        table.classList.add('table');
        for (var i = 0; i < data.length; i++) {
            var row = document.createElement('tr');
            var plateNo = document.createElement('td');
            plateNo.append(data[i].plateNo);//data[i].plateNo;
            var producer = document.createElement('td');
            producer.append(data[i].producer);
            var brand = document.createElement('td');
            brand.append(data[i].brand);
            var color = document.createElement('td');
            color.append(data[i].color);
            var yearOfProduction = document.createElement('td');
            yearOfProduction.append(data[i].yearOfProduction);


            row.appendChild(plateNo);
            row.appendChild(producer);
            row.appendChild(brand);
            row.appendChild(color);
            row.appendChild(yearOfProduction);
            table.appendChild(row);
        }
        $('#content').append(table);
    });
}