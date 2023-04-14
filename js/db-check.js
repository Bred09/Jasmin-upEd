// Переменные полей
let aktNumber = $(".akt-number");
let aktData = $(".akt-data");
let aktSeller = $(".akt-seller");

let userDB = [];
let checkedDB = [];

$(".akt-imp").on("change", async function (e) {
  $('.res').html('')
  /* get data as an ArrayBuffer */
  const file = e.target.files[0];
  const data = await file.arrayBuffer();

  /* parse and load first worksheet */
  const wb = XLSX.read(data);
  console.log("Загруженная таблица\nсо всеми данными");
  console.log(wb);

  const ws = wb.Sheets[wb.SheetNames[0]];
  console.log("Загруженная таблица\nс первым листом");
  console.log(ws);

  // $(".res").html(XLSX.utils.sheet_to_html(ws, { id: "tabeller" }));

  // Извлечение данных
  // Номер акта
  if (ws.A2.h) {
    $(aktNumber).val(ws.A2.h.slice(-8));
    // Дата
    $(aktData).val(ws.F3.h.match(/\d+/g).join("."));
    // Продавец
    $(aktSeller).val(ws.B5.h.slice(-13).slice(0, -1));
  }

  // Edit \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  // let lastCeel = Number(ws["!ref"].split("H")[1]) - 1;
  // console.log(lastCeel);
  // let db = [];
  // for (let i = 13; i < lastCeel; i++) {
  //   console.log(ws["G" + i].v);
  // }

  // console.log(db);

  let kmdb = [];
  // Получение КМ
  // Фильтрация массива на наличие в начале "010"
  const km = Object.values(ws).filter((e) => {
    if (/^010/.test(e.v)) {
      kmdb.push(e.v);
      return true;
    }
  });

  // Выводит значение присустствующие в обеих массивах
  let result = [...new Set(db)].filter((item) => kmdb.includes(item));
  console.log(db);
  console.log(result);
  // Показываем сколько КМ в Акте(с анимацией)
  $({ numberValue: 0 }).animate(
    { numberValue: kmdb.length },
    {
      duration: 500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
      easing: "linear",

      step: function (val) {
        $(".akt-km-cnt").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
      },
    }
  );
  // Показываем сколько КМ найдено с Акта в Базе (с анимацией)
  $({ numberValue: 0 }).animate(
    { numberValue: result.length },
    {
      duration: 500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
      easing: "linear",

      step: function (val) {
        $(".db-km-cnt").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
      },
    }
  );

  userDB = kmdb;
  checkedDB = result;
});