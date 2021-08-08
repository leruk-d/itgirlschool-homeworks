const CAR_BRANDS = ["audi", "honda", "mercedes", "bmw"];


const AUDI_MODELS = [
  ["a1", [
    [2016, 15000],
    [2015, 14000],
    [2014, 13000]
  ]],
  ["a2", [
    [2004, 6000],
    [2002, 5000]
  ]],
  ["a3", [[2020, 20000],
    [2019, 18000],
    [2018, 16000],
    [2017, 1500]
]]];
const HONDA_MODELS = [
  ["accord", [
    [2021, 40000],
    [2020, 30000],
    [2019, 28000],
    [2018, 25000],
    [2017, 18000]
  ]],
  ["acty", [
    [2021, 30000],
    [2020, 20000],
    [2019, 18000],
    [2018, 15000]
  ]],
  ["civic", [
    [2020, 20000],
    [2019, 15000],
    [2018, 10000]
  ]]];
  const MERCEDES_MODELS = [
      ["a-class", [
        [2021, 50000],
        [2020, 450000],
        [2019, 30000],
        [2018, 25000],
        [2017, 20000]
      ]],
      ["b-class", [[2020, 30000],
        [2019, 28000],
        [2018, 25000],
        [2017, 18000],
        [2016, 13000]
      ]
    ],
    ["c-class", [[2020, 30000],
      [2019, 28000],
      [2018, 25000]
    ]
]];
const BMW_MODELS = [
  ["1_series", [
    [2019, 28000],
    [2018, 25000],
    [2017, 18000],
    [2016, 15000]
  ]],
  ["2_series", [
    [2021, 40000],
    [2020, 30000],
    [2019, 28000],
    [2018, 25000],
    [2017, 18000]
  ]],
  ["3_series", [2019, 30000],
    [2018, 25000],
    [2017, 20000]
  ],
  ["b-class", [2020, 30000],
    [2019, 28000],
    [2018, 25000],
    [2017, 18000],
    [2016, 13000]
  ]
];

// const AUDI_MODELS = ["a1", "a2", "a3"];
// const HONDA_MODELS = ["accord", "acty", "civic"];
// const MERCEDES_MODELS = ["a-class", "b-class", "c-class"];
// const BMW_MODELS = ["1_series", "2_series", "3_series"];

// const RELEASE_AUDI_A1 = ["2016", "2015", "2014"];
// const RELEASE_AUDI_A2 = ["2004", "2002"];
// const RELEASE_AUDI_A3 = ["2020", "2019", "2018", "2017"];


// const RELEASE_HONDA_ACCORD = ["2021", "2020", "2019", "2018", "2017"];
// const RELEASE_HONDA_ACTY = ["2021", "2020", "2019", "2018"];
// const RELEASE_HONDA_CIVIC = ["2021", "2020", "2019"];

// const RELEASE_MERCEDES_A = ["2021", "2020", "2019", "2018", "2017"];
// const RELEASE_MERCEDES_B = ["2020", "2019", "2018", "2017"];
// const RELEASE_MERCEDES_C = ["2020", "2019", "2018"];

// const RELEASE_BMW_1 = ["2019", "2018", "2017", "2016"];
// const RELEASE_BMW_2 = ["2021", "2020", "2019", "2018", "2017"];
// const RELEASE_BMW_3 = ["2019", "2018", "2017", "2016"];

const EQUIPMENT_LEVEL = ["базовый", "средний", "максимальный"];



const carBrandSelect = document.querySelector(".car-brand");
carBrandSelect.addEventListener("change", (e) => {
  const currentSelection = e.currentTarget.value;
  const doesBrandExist = CAR_BRANDS.some(brand => brand === currentSelection);
  if (!doesBrandExist) return;



  const carModelsData = getCarModelDataByBrand(currentSelection);
  const carModelsNames = carModelsData.map(carData => carData[0]);
  

  const modelsSelect = document.querySelector(".car-model");
  modelsSelect.innerHTML = "";
  carModelsNames.forEach(model => {
    const newOption = document.createElement("option");
    newOption.value = model;
    newOption.innerText = model;
    modelsSelect.appendChild(newOption);
  });
  modelsSelect.disabled = false;
});

  const modelsSelect = document.querySelector(".car-model");
modelsSelect.addEventListener("change", (e) => {
  const currentSelection1 = e.currentTarget.value;

  const carModelsDataYear = getCarModelDataByBrand(currentSelection1);
  const  carModelsNamesYears = carModelsDataYear.map(carYear => carYear[1][0]);

  const yearsSelect = document.querySelector(".car-year");
  yearsSelect.innerHTML = "";

  carModelsNamesYears.forEach(name => {
    const newOption = document.createElement("option");
    newOption.value = name;
    newOption.innerText = name;
    yearsSelect.appendChild(newOption);
  });
  modelsSelect.disabled = false;
});


document.getElementById("calcCar").addEventListener("click", () => {
  const carBrand = document.querySelector(".car-brand").value;
  const carModel = document.querySelector(".car-model").value;
  const carYear = document.querySelector(".car-year").value;


  const carModelData = getCarModelDataByBrand(carBrand);
  const chosenCarModelData = carModelData(carModel);
  document.getElementById("price").innerHTML = chosenCarModelData[1][1];

})

function getCarModelDataByBrand(brand) {
  let carModelData = [];
  if (brand === "audi") carModelData = AUDI_MODELS; 
  else if (brand === "honda") carModelData = HONDA_MODELS;
  else if (brand === "mercedes") carModelData = MERCEDES_MODELS;
  else if (brand === "bmw") carModelData = BMW_MODELS;
  return carModelData;
}