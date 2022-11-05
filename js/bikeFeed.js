let items

async function load () {
  let url = 'https://api.npoint.io/fd08845d01c4506fe3fb'
  items = await (await fetch(url)).json()
  //console.log(items);

  try {
    items = await (await fetch(url)).json()
  } catch (e) {
    console.log('error')
  }

  let content = ''

  items.forEach(p => {

    console.log(p)

    content += `
    <div class="col-md-4">
    <section class="panel">
        <div class="pro-img-box">
            <img src="https://pedegoelectricbikes.ca/wp-content/uploads/2022/07/Pedego-Avenue-Step-Thru-in-Ocean-Teal.jpg" width="250" height="220" alt="bike"/>
        </div>
        <div class="panel-body text-center">
            <h4>
                <p class="pro-title">
                    Bike Information
                <p>
            </h4>
            <p class="bikeInfo">Bike Index: ${p.bikeId}</p>
            <p class="bikeInfo">Bike Make: ${p.maker}</p>
            <p class="bikeInfo">Bike Model: ${p.model}</p>
            <p class="price">Price: $${p.price}</p>

        </div>
    </section>
</div>
  `
  })
  document.querySelector("#bike").innerHTML = content
}

load()