export default function () {
  const container = document.querySelector('.arrivals-gallery .row')
  const btn = document.querySelector('.expandProducts')
  const elementsToAdd = [
    {
      div: `<div class="col-sm ">
            <div class="product">
              <img src="https://via.placeholder.com/309x390">
              <p>Name</p>
              <p>$$$</p>
            </div>
          </div>`},
    {
      div: `<div class="col-sm ">
            <div class="product">
              <img src="https://via.placeholder.com/309x390">
              <p>Name</p>
              <p>$$$</p>
            </div>
          </div>`},
    {
      div: `<div class="col-sm ">
        <div class="product">
          <img src="https://via.placeholder.com/309x390">
          <p>Name</p>
          <p>$$$</p>
        </div>
      </div>`},
    {
      div: `<div class="col-sm ">
        <div class="product">
          <img src="https://via.placeholder.com/309x390">
          <p>Name</p>
          <p>$$$</p>
        </div>
      </div>`}
  ]

  btn.addEventListener('click', () => {
    elementsToAdd.forEach(e => {
      const add = document.createElement("div")
      add.innerHTML = e.div
      container.appendChild(add)
      // console.log(add);
    })
  })
}